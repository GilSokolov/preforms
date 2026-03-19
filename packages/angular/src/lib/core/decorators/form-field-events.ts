import { baseEvents } from "./base-events";
import { FieldEventData } from "@preforms/ts";
import { FormFieldEventType } from "@preforms/ts";

// Define options for the decorator
export interface FormFieldEventOptions {
  type: FormFieldEventType | "*"; // Event type (e.g., 'change', 'click', or '*' for all)
  field: string; // Field key in the form (e.g., 'username')
}

// Decorator to bind methods to form field events
export function FormFieldEvent(options: FormFieldEventOptions) {
  const key = `form-field:event:keys`;
  const eventNames = Array.isArray(options.field)
    ? options.field
    : [options.field];
  const eventKeys = eventNames.map((field) => `field:${field}.${options.type}`);
  return baseEvents<FieldEventData>(eventKeys);
}
