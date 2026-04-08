import { ComparisonOperator } from "../comparison-operator";
import { CrossFieldValidation } from "./cross-field-validation";
import { FormFieldEventType } from "../events/field-event-data";
import { FormElementConfig } from "./form-element";
import { SchemaNode } from "../../utils/transform";
import { FormEventType } from "../events";
import { FormSchemaConfig } from "../../schema";

export type OneOrMany<T> = T | T[];

export type FieldState<T> = Partial<FormElementConfig<T>> & {
  value?: T;
};

export type ConditionValue<T> =
  | OneOrMany<T>
  | {
      operator: ComparisonOperator | `${ComparisonOperator}`;
      value: OneOrMany<T>;
    };

/**
 * Actions that can be performed when a trigger fires.
 * Enum keys are SCREAMING_SNAKE_CASE for developer clarity.
 * Enum values are snake_case strings used in configs and JSON.
 */
export enum TriggerAction {
  // ----- Form lifecycle -----
  UPDATE_STATE = "update_state",
  FETCH = "fetch",
  SUBMIT = "submit",
  RESET = "reset",
  TOGGLE_FIELD = "toggle_field",
  VALIDATE = "validate",
  ASYNC_VALIDATE = "async_validate",

  // ----- Dialog UI -----
  /** Open a dialog */
  DIALOG_OPEN = "dialog_open",
  /** Close a dialog */
  DIALOG_CLOSE = "dialog_close",
  LOAD = "load",
  VALIDATE_ASYNC = "validate_async",
  SET = "set",
  TOGGLE = "toggle",
  OPEN_DIALOG = "open_dialog",
  CLOSE_DIALOG = "close_dialog",
  EMIT = "emit",
}

export type TriggerEvent =
  | FormFieldEventType
  | `${FormFieldEventType}`
  | FormEventType
  | `${FormEventType}`
  | `custom:${string}`;

/**
 * Base trigger interface
 */
export interface BaseTrigger<T = any> {
  on: TriggerEvent; // event that triggers this action
  action: TriggerAction | `${TriggerAction}`; // the operation to perform
  targetField?: OneOrMany<string>; // which field(s) to affect; defaults to self
  sourceField?: OneOrMany<string>; // which field(s) to listen;
  target?: OneOrMany<string>; // which field(s) to affect; defaults to self
  source?: OneOrMany<string>; // which field(s) to listen;
  condition?: ConditionValue<T>; // optional conditional trigger
  id?: string; // optional unique identifier for debugging
  priority?: number; // optional execution order
  debounce?: number; // throttling in complex forms
  once?: boolean; // optional, true = fire only once
}

export type FetchMode = "patch" | "replace" | "merge";

export type FetchProjection =
  | {
      target: string;
      select: string; // primitive array
      source?: string;
    }
  | {
      target: string;
      select: Record<string, string>; // map properties
      source?: string;
    };

/**
 * Trigger to fetch data from an endpoint
 */
export interface FetchTrigger<T = any> extends BaseTrigger<T> {
  action: "fetch";
  fetchUrl: string; // endpoint to fetch data from
  mode?: FetchMode; // whether to merge fetched data with existing state,
  projection?: FetchProjection;
}

/**
 * Trigger to fetch validations from an endpoint
 */
export interface AsyncValidationTrigger<T = any> extends BaseTrigger<T> {
  action: TriggerAction.ASYNC_VALIDATE;
  fetchUrl: string; // endpoint to fetch data from
}

/**
 * Trigger to update the field's internal state
 */
export interface StateUpdateTrigger<T = any> extends BaseTrigger<T> {
  action: "update_state";
  applyState: Partial<FormElementConfig<T> & Record<any, any> & { value: any }>; // state changes to apply
}

/**
 * Trigger to toggle field properties
 */
export interface ToggleTrigger<T = any> extends BaseTrigger<T> {
  action: "toggle_field";
  toggleStates: ("disabled" | "hidden" | "required" | "multiple")[]; // properties to toggle
}

/**
 * Trigger to perform cross-field validation
 */
export interface ValidationTrigger<T = any> extends BaseTrigger<T> {
  action: "validate";
  validation: CrossFieldValidation; // validation rule to apply
}

/**
 * Trigger to submit the form
 */
export interface SubmitTrigger<T = any> extends BaseTrigger<T> {
  action: "submit";
  // additional properties like submit handler could be added here
}

/**
 * Trigger to reset the form
 */
export interface ResetTrigger<T = any> extends BaseTrigger<T> {
  action: "reset";
  // additional properties like reset target could be added here
}

/**
 * Trigger interface specific for DialogField
 */
export interface DialogTrigger<T = any> extends BaseTrigger<T> {
  action: TriggerAction.DIALOG_OPEN | TriggerAction.DIALOG_CLOSE;

  /**
   * Optional target dialog ID or key.
   * Useful when multiple dialogs exist in the same form.
   * If omitted, the trigger applies to the current DialogField.
   */
  targetId: string;
}

export type LoadMode = "patch" | "replace" | "merge";

export interface LoadTriggerBase<T = unknown> extends BaseTrigger<T> {
  action: TriggerAction.LOAD;
  mode?: LoadMode;
  transform?: Record<string, SchemaNode | Record<string, any>>;
}

/**
 * Load data from a remote source
 */
export interface NetworkLoadTrigger<T = unknown> extends LoadTriggerBase<T> {
  protocol: "http" | "graphql" | "websocket";
  url: string;
  query?: string;
  event?: string;
  params?: Record<string, unknown>;
}

/**
 * Load data from a local source
 */
export interface LocalLoadTrigger<T = unknown> extends LoadTriggerBase<T> {
  protocol: "storage" | "memory";
  key: string;
  params?: Record<string, unknown>;
}

export type LoadTrigger<T = unknown> =
  | NetworkLoadTrigger<T>
  | LocalLoadTrigger<T>;

export interface SetTrigger<T = unknown> extends BaseTrigger<T> {
  action: TriggerAction.SET;
  scope: "field" | "form";
  state: FieldState<T> | Partial<FormSchemaConfig>;
}

/**
 * Union of all possible triggers for a form field
 */
export type FormFieldTrigger<T = any> =
  | FetchTrigger<T>
  | StateUpdateTrigger<T>
  | ToggleTrigger<T>
  | ValidationTrigger<T>
  | SubmitTrigger<T>
  | ResetTrigger<T>
  | DialogTrigger<T>
  | AsyncValidationTrigger<T>
  | LoadTrigger<T>;
