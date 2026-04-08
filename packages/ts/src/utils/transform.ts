// ─── Types ────────────────────────────────────────────────────────────────────

type CastType = "string" | "number" | "boolean" | "date";

/** Resolves a dot-path value, e.g. "user.address.city" */
export interface ValueNode {
  /** dot-path into the source data */
  $: string;
  cast?: CastType;
  default?: unknown;
  /** optional transform applied after resolution */
  transform?: (value: unknown) => unknown;
}

export interface ObjectNode {
  $type: "object";
  /** dot-path to the source sub-object; omit to use the current scope */
  from?: string;
  fields: Record<string, SchemaNode>;
}

export interface ArrayNode {
  $type: "array";
  /** dot-path to the source array */
  from: string;
  /** schema applied to each element */
  map?: SchemaNode;
  /** predicate evaluated against each element before mapping */
  filter?: (item: unknown, index: number) => boolean;
  /** key used to group the array into a Record<key, item[]> */
  groupBy?: string;
}

/** A literal value — useful for injecting constants into the output */
export interface LiteralNode {
  $literal: unknown;
}

/** Calls a function with the entire current scope as argument */
export interface ComputedNode {
  $compute: (scope: unknown) => unknown;
}

export type SchemaNode =
  | ValueNode
  | ObjectNode
  | ArrayNode
  | LiteralNode
  | ComputedNode;

// ─── Path resolution ──────────────────────────────────────────────────────────

function getPath(obj: unknown, path: string): unknown {
  if (!path) return obj;
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc == null) return undefined;
    return (acc as Record<string, unknown>)[key];
  }, obj);
}

// ─── Casting ──────────────────────────────────────────────────────────────────

function cast(value: unknown, type?: CastType): unknown {
  if (value == null || type == null) return value;
  switch (type) {
    case "string":
      return String(value);
    case "number":
      return Number(value);
    case "boolean":
      return Boolean(value);
    case "date":
      return new Date(value as string | number);
    default:
      return value;
  }
}

// ─── Node type guards ─────────────────────────────────────────────────────────

function isValueNode(node: SchemaNode): node is ValueNode {
  return "$" in node;
}
function isObjectNode(node: SchemaNode): node is ObjectNode {
  return (node as ObjectNode).$type === "object";
}
function isArrayNode(node: SchemaNode): node is ArrayNode {
  return (node as ArrayNode).$type === "array";
}
function isLiteralNode(node: SchemaNode): node is LiteralNode {
  return "$literal" in node;
}
function isComputedNode(node: SchemaNode): node is ComputedNode {
  return "$compute" in node;
}

// ─── Core resolver ────────────────────────────────────────────────────────────

function normalize(node: any): SchemaNode {
  if (typeof node === "string") {
    return { $: node };
  }

  if ("map" in node && !node.$type) {
    return { $type: "array", ...node };
  }

  if (typeof node === "object" && !node.$type) {
    return { $type: "object", fields: node };
  }

  return node;
}

function resolveNode(n: SchemaNode, scope: unknown): unknown {
  const node = normalize(n);

  if (isLiteralNode(node)) {
    return node.$literal;
  }

  if (isComputedNode(node)) {
    return node.$compute(scope);
  }

  if (isValueNode(node)) {
    let value = getPath(scope, node.$);
    if (value == null && node.default !== undefined) value = node.default;
    value = cast(value, node.cast);
    if (node.transform) value = node.transform(value);
    return value;
  }

  if (isObjectNode(node)) {
    const subScope = node.from ? getPath(scope, node.from) : scope;
    const result: Record<string, unknown> = {};
    for (const [key, fieldNode] of Object.entries(node.fields)) {
      result[key] = resolveNode(fieldNode, subScope);
    }
    return result;
  }

  if (isArrayNode(node)) {
    let items = getPath(scope, node.from);
    if (!Array.isArray(items)) return [];

    if (node.filter) {
      items = items.filter(node.filter);
    }

    const mapped: unknown[] = node.map
      ? (items as unknown[]).map((item) => resolveNode(node.map!, item))
      : (items as unknown[]);

    if (node.groupBy) {
      const grouped: Record<string, unknown[]> = {};
      for (const item of mapped) {
        const key = String(getPath(item, node.groupBy) ?? "__unknown__");
        (grouped[key] ??= []).push(item);
      }
      return grouped;
    }

    return mapped;
  }

  return undefined;
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Transform `data` according to a declarative `schema`.
 *
 * @example
 * const result = transform(
 *   {
 *     $type: "object",
 *     fields: {
 *       id:   { $: "uid", cast: "string" },
 *       name: { $: "profile.fullName", default: "Anonymous" },
 *       age:  { $: "profile.age", cast: "number" },
 *     },
 *   },
 *   { uid: 42, profile: { fullName: "Alice", age: "30" } }
 * );
 * // → { id: "42", name: "Alice", age: 30 }
 */
export function transform<T = unknown>(schema: any, data: unknown): T {
  return resolveNode(schema, data) as T;
}

/**
 * Build a reusable transformer from a fixed schema.
 *
 * @example
 * const toUser = compile(userSchema);
 * const users = rawList.map(toUser);
 */
export function compile<T = unknown>(schema: SchemaNode): (data: unknown) => T {
  return (data) => transform<T>(schema, data);
}
