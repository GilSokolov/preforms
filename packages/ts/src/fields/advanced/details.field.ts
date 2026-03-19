import { FieldWrapper } from "../../core";

/**
 * Details field represents a collapsible/details container.
 *
 * It behaves like a FormFieldGroup but can be used to wrap other fields
 * in a UI component similar to the HTML `<details>` element.
 *
 * ## Example
 * ```ts
 * new Details({
 *   key: "personalInfo",
 *   fields: [
 *     new FirstName(),
 *     new LastName(),
 *   ],
 * });
 * ```
 */
export class DetailsField extends FieldWrapper {
  /** The control type identifier for UI renderers */
  override component = "details";
}
