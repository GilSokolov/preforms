import { FieldButton, FieldButtonConfig } from "../../core/models/field-button";

/**
 * A button to submit the form.
 *
 * Can be instantiated with a label string or full config.
 *
 * Examples:
 * ```ts
 * new SubmitButton(); // label defaults to "Submit"
 * new SubmitButton("Save"); // label set to "Save"
 * new SubmitButton({ key: "saveBtn", class: "primary" });
 * ```
 */
export class SubmitButton extends FieldButton {
  constructor(labelOrConfig: string | Partial<FieldButtonConfig> = "Submit") {
    const config: Partial<FieldButtonConfig> =
      typeof labelOrConfig === "string"
        ? { type: "submit", label: labelOrConfig }
        : labelOrConfig;

    super({
      ...config,
      type: "submit",
    });
  }
}
