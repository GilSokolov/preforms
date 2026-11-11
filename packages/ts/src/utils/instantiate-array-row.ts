import type { FieldArray, FormElement } from "../core";
import { resolveFieldId } from "./resolve-field-id";

/**
 * Instantiate a set of FormField instances from a fields for a specific array row.
 *
 * @param fields - Array of FormFieldConfig objects defining each field in the row.
 * @param index - Index of the row (used to make field names unique).
 * @param rowValue - Optional data for this row. A nested `array` field whose key
 *   holds an array in it is cloned with that array as its `value`, so it seeds
 *   its own rows. Groups descend into `rowValue[group.key]`; wrappers are transparent.
 *
 * @remarks
 * - Only fields with a `name` or `key` property will receive a `name` for submission.
 *   Fields that are purely structural (wrappers, titles, layout elements) are skipped.
 * - Every field will receive a unique `id` for runtime usage, even if it doesn’t have a `name`.
 * - This function is useful when receiving a **JSON schema from the server**, which is purely config,
 *   and you need to create live `FormField` instances for rendering or runtime manipulation.
 *
 * @returns An array of FormField instances representing one row of the array.
 */
export function instantiateArrayRow(
  fields: FormElement[],
  index: number,
  rowValue?: unknown,
): FormElement[] {
  const row =
    rowValue && typeof rowValue === "object"
      ? (rowValue as Record<string, unknown>)
      : undefined;

  return fields.map((config: FormElement) => {
    const cloned = replaceIndexPlaceholders(config, index);
    switch (cloned.kind) {
      case "group":
        return {
          ...withIndexedId(cloned, index),
          fields: instantiateArrayRow(
            cloned.fields,
            index,
            cloned.key ? row?.[cloned.key] : undefined,
          ),
        };

      case "array": {
        const nested = cloned.key ? row?.[cloned.key] : undefined;
        const indexed = withIndexedId(cloned, index);

        // a nested array seeds its own rows from field.value in ngOnInit, so it
        // has to be handed the slice of this row's data that belongs to it
        return Array.isArray(nested)
          ? { ...indexed, value: nested }
          : indexed;
      }

      case "field":
      case "external":
      case "decorative":
      case "button":
        return withIndexedId(cloned, index);

      case "wrapper":
        return {
          ...withIndexedId(cloned, index),
          fields: instantiateArrayRow(cloned.fields, index, row),
        };

      default:
        throw new Error(`Unsupported field kind: ${(cloned as any).kind}`);
    }
  });
}

export function isArrayField(field: FormElement): field is FieldArray {
  return field.kind === "array";
}

function replaceIndexPlaceholders(obj: any, index: number): any {
  if (typeof obj === "string") {
    return obj.replace(/\[\$index\]/g, `[${index}]`);
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => replaceIndexPlaceholders(item, index));
  }

  if (obj && typeof obj === "object") {
    const newObj: any = {};
    for (const key in obj) {
      newObj[key] = replaceIndexPlaceholders(obj[key], index);
    }
    return newObj;
  }

  return obj;
}

function withIndexedId<T extends FormElement>(config: T, index: number): T {
  const id = resolveFieldId(config);
  const suffix = `[${index}]`;

  return {
    ...config,
    // an author who already wrote [$index] into the id gets it indexed once
    id: id.endsWith(suffix) ? id : `${id}${suffix}`,
  };
}

/**
 * Re-points an already instantiated row at a new index, in place.
 *
 * Rows are mutable runtime state: a trigger may have set `hidden`, patched a
 * label or swapped options, and the objects are the ones the template renders.
 * So instead of rebuilding the row, this walks the template beside the live
 * row and rewrites only what the template templatised with `[$index]`, plus
 * the indexed ids themselves. Everything else is left alone.
 *
 * @param template - the row template (FieldArray.fields)
 * @param live - the instantiated row, mutated in place
 * @param from - the index the row currently carries
 * @param to - the index it should carry
 */
export function reindexArrayRow(
  template: FormElement[],
  live: FormElement[],
  from: number,
  to: number,
): void {
  if (from === to) return;

  template.forEach((config, i) => {
    const target = live[i];

    if (target) reindexElement(config, target, from, to);
  });
}

function reindexElement(
  config: FormElement,
  target: FormElement,
  from: number,
  to: number,
): void {
  const suffix = `[${from}]`;
  const base = target.id?.endsWith(suffix)
    ? target.id.slice(0, -suffix.length)
    : resolveFieldId(config);

  (target as { id: string }).id = `${base}[${to}]`;

  for (const key in config) {
    if (key === "id" || key === "fields") continue;

    const value = (config as any)[key];

    if (!hasIndexPlaceholder(value)) continue;

    (target as any)[key] = replaceIndexPlaceholders(value, to);
  }

  const nested = (config as any).fields;
  const liveNested = (target as any).fields;

  if (Array.isArray(nested) && Array.isArray(liveNested)) {
    reindexArrayRow(nested, liveNested, from, to);
  }
}

function hasIndexPlaceholder(value: unknown): boolean {
  if (typeof value === "string") return value.includes("[$index]");

  if (Array.isArray(value)) return value.some(hasIndexPlaceholder);

  if (value && typeof value === "object") {
    return Object.values(value).some(hasIndexPlaceholder);
  }

  return false;
}
