import { baseEvents } from "./base-events";
import { FormEventData, FormEventType } from "@preforms/ts";

export function FormEvent(
  type: FormEventType | `${FormEventType}`,
): MethodDecorator {
  return baseEvents<FormEventData>([`form:${type}`] as const);
}
