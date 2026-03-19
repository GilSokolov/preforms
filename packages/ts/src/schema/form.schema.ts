import { BaseTrigger, FormElement, FormField } from "../core";

/**
 * Supported HTTP methods for form submission.
 * "dialog" is a virtual method used for modal-based forms.
 */
export type FormMethod = "get" | "post" | "patch" | "delete" | "dialog";

/**
 * Encoding type for form submission.
 */
export type FormEnctype =
  | "application/x-www-form-urlencoded"
  | "multipart/form-data"
  | "text/plain";

/**
 * Configuration object for DynamicForm.
 */
export interface FormSchemaConfig {
  /** List of fields in this form */
  fields: FormField<any>[];
  /** Unique identifier for the form (used for triggers, dialogs, analytics) */
  id?: string;

  /** Form title (pure UI hint) */
  title?: string;

  /** Target URL or dialog id */
  action?: string;

  /** HTTP method or virtual method */
  method?: FormMethod;

  /** Form submission target (HTML attribute) */
  target?: string;

  /** Enable or disable browser autocomplete */
  autocomplete?: "on" | "off";

  /** Disable native browser validation */
  novalidate?: boolean;

  /** Name attribute (HTML forms) */
  name?: string;

  /** Relationship attribute */
  rel?: string;

  /**
   * Encoding type for form submission.
   *
   * - application/x-www-form-urlencoded (default)
   * - multipart/form-data (required for file uploads)
   * - text/plain (not recommended)
   */
  enctype?: FormEnctype;

  /**
   * Optional form-level triggers.
   * Useful for submit, reset, or dialog interactions.
   */
  triggers?: BaseTrigger[];
}

/**
 * DynamicForm
 *
 * A headless, framework-agnostic form schema.
 * Responsible for describing form structure, metadata, and behavior.
 */
export class FormSchema {
  readonly fields: FormElement[];
  readonly id?: string;
  readonly title?: string;
  readonly action?: string;
  readonly method?: FormMethod;
  readonly target?: string;
  readonly autocomplete?: "on" | "off";
  readonly novalidate?: boolean;
  readonly name?: string;
  readonly rel?: string;
  readonly enctype?: FormEnctype;
  readonly triggers?: BaseTrigger[];

  constructor(config: FormSchemaConfig) {
    this.id = config.id;
    this.title = config.title;
    this.action = config.action;
    this.method = config.method;
    this.fields = config.fields;
    this.target = config.target;
    this.autocomplete = config.autocomplete;
    this.novalidate = config.novalidate;
    this.name = config.name;
    this.rel = config.rel;
    this.enctype = config.enctype;
    this.triggers = config.triggers;
  }
}
