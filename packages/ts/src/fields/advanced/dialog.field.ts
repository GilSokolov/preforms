import { FieldGroup, FieldGroupConfig } from "../../core";

/**
 * Configuration for the DialogField.
 */
export interface DialogFieldConfig<T> extends FieldGroupConfig<T> {
  /** Whether the dialog should display a close button. Default: true */
  closeBtn?: boolean;

  width?: string;

  /** Optional nested child fields inside the dialog */
}

/**
 * DialogField represents a modal/dialog UI element.
 *
 * ## Default behavior
 * - `component` is `"dialog"`.
 * - `closeBtn` defaults to `true`.
 * - Supports optional nested fields (`fields`) for content, buttons, forms, etc.
 *
 * ## Example
 * ```ts
 * new DialogField({
 *   key: "confirmDialog",
 *   closeBtn: true,
 *   fields: [
 *     new FormTitle({ value: "Confirm Deletion", level: 3 }),
 *     new FormText({ value: "Are you sure?" }),
 *   ],
 * });
 * ```
 */
export class DialogField<T = unknown> extends FieldGroup<T> {
  /** Whether the dialog shows a close button */
  closeBtn: boolean;

  width?: string;

  constructor(config: DialogFieldConfig<T>) {
    super({ ...config, component: "dialog" });

    this.closeBtn = config.closeBtn ?? true;

    this.width = config.width;
  }
}
