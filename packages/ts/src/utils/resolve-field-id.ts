import { FormElement } from "../core";

export function resolveFieldId({ component, id }: FormElement): string {
  if (id) return id;

  // Final guaranteed-unique fallback
  return `${component}-${crypto.randomUUID()}`;
}
