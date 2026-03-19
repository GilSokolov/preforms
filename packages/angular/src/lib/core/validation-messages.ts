// validation-messages.ts

import { FormField } from "@preforms/ts";

export const DEFAULT_VALIDATION_MESSAGES: Record<
  string,
  (field: FormField) => string
> = {
  required: () => "is required",
  pattern: (field) => field.hint || "has a validation error",
  max: (field) =>
    field.max !== undefined
      ? `must be less than or equal to ${field.max}`
      : "has a maximum value violation",
  min: (field) =>
    field.min !== undefined
      ? `must be greater than or equal to ${field.min}`
      : "has a minimum value violation",
  minlength: (field) =>
    field.minLength !== undefined
      ? `must be at least ${field.minLength} characters`
      : "does not meet minimum length",
  maxlength: (field) =>
    field.maxLength !== undefined
      ? `must be at most ${field.maxLength} characters`
      : "exceeds maximum length",
  step: (field) =>
    field.step !== undefined
      ? `value must be a multiple of ${field.step}`
      : "has a step validation error",
  email: () => "must be a valid email address",
};
