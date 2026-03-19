import { FieldArray, FormElement } from "../core";
import { resolveFieldId } from "./resolve-field-id";

/**
 * Instantiate a set of FormField instances from a fields for a specific array row.
 *
 * @param fields - Array of FormFieldConfig objects defining each field in the row.
 * @param index - Index of the row (used to make field names unique).
 * @param parent - Optional parent key/id to namespace the row.
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
): FormElement[] {
  return fields.map((config: FormElement) => {
    const cloned = replaceIndexPlaceholders(config, index);
    switch (cloned.kind) {
      case "group":
        return {
          ...withIndexedId(cloned, index),
          fields: instantiateArrayRow(cloned.fields, index),
        };

      case "array":
      case "field":
        return withIndexedId(cloned, index);

      case "wrapper":
        return {
          ...cloned,
          fields: instantiateArrayRow(cloned.fields, index),
        };

      case "decorative":
      case "button":
        return cloned;

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
  return {
    ...config,
    id: `${id}[${index}]`,
  };
}
