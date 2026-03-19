import { TriggerEvent } from "../interfaces";

/**
 * Events that can trigger a field action
 */
export enum FormFieldEventType {
  CLICK = "click",
  SELECTED = "selected",
  CHECKED = "checked",
  UNCHECKED = "unchecked",
  CHANGE = "change",
  INPUT = "input",
  BLUR = "blur",
  FOCUS = "focus",
}

export interface FieldEventData<T = any> {
  /** Event type like 'input', 'change', 'blur', etc. */
  type: TriggerEvent;

  /** The unique id of the field */
  id: string;

  /** The name or key of the field */
  name: string;

  /** The current value of the field (after the event) */
  value: T;

  /** Optional metadata or custom payload (extensible field for future use) */
  meta?: Record<string, any>;
}
