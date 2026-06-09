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
    }
  | ((ctx: any) => boolean);

/**
 * Actions that can be performed when a trigger fires.
 * Enum keys are SCREAMING_SNAKE_CASE for developer clarity.
 * Enum values are snake_case strings used in configs and JSON.
 */
export enum TriggerAction {
  SET = "set",
  UPDATE = "update",
  FETCH = "fetch",
  SUBMIT = "submit",
  RESET = "reset",
  VALIDATE = "validate",
  LOAD = "load",
  VALIDATE_ASYNC = "validate_async",
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
  action: TriggerAction.VALIDATE_ASYNC;
  fetchUrl: string; // endpoint to fetch data from
}

/**
 * Trigger to update the field's internal state
 */
export interface StateUpdateTrigger<T = any> extends BaseTrigger<T> {
  action: TriggerAction.UPDATE | `${TriggerAction.UPDATE}`;
  state: Partial<FormElementConfig<T> & Record<any, any> & { value: any }>; // state changes to apply
}

/**
 * Trigger to toggle field properties
 */
export interface ToggleTrigger<T = any> extends BaseTrigger<T> {
  action: TriggerAction.TOGGLE | `${TriggerAction.TOGGLE}`;
  toggle: ("disabled" | "hidden" | "required" | "multiple")[]; // properties to toggle
}

/**
 * Trigger to perform cross-field validation
 */
export interface ValidationTrigger<T = any> extends BaseTrigger<T> {
  action: TriggerAction.VALIDATE | `${TriggerAction.VALIDATE}`;
  validation: CrossFieldValidation; // validation rule to apply
}

/**
 * Trigger to submit the form
 */
export interface SubmitTrigger<T = any> extends BaseTrigger<T> {
  action: TriggerAction.SUBMIT | `${TriggerAction.SUBMIT}`;
  // additional properties like submit handler could be added here
}

/**
 * Trigger to reset the form
 */
export interface ResetTrigger<T = any> extends BaseTrigger<T> {
  action: TriggerAction.RESET | `${TriggerAction.RESET}`;
  // additional properties like reset target could be added here
}

/**
 * Trigger interface specific for DialogField
 */
export interface DialogTrigger<T = any> extends BaseTrigger<T> {
  action:
    | TriggerAction.OPEN_DIALOG
    | TriggerAction.CLOSE_DIALOG
    | `${TriggerAction.OPEN_DIALOG}`
    | `${TriggerAction.CLOSE_DIALOG}`;
  target: string;
}

export type LoadMode = "patch" | "replace" | "merge";

export interface LoadTriggerBase<T = unknown> extends BaseTrigger<T> {
  action: TriggerAction.LOAD | `${TriggerAction.LOAD}`;
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
  method?: "GET" | "POST";
  body?: unknown;
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
  action: TriggerAction.SET | `${TriggerAction.SET}`;
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
