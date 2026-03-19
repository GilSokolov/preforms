import { FormElement } from "@preforms/ts";
import { DEFAULT_VALIDATION_MESSAGES } from "../validation-messages";

export function getValidationMessage(
  key: string,
  field: FormElement,
  message?: string,
): string {
  const handler = DEFAULT_VALIDATION_MESSAGES[key];

  if (message) return message;

  if (handler && field.kind === "field") return handler(field);

  return "has a validation error";
}
