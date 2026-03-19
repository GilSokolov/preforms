import { FieldButton, FieldButtonConfig } from "../../core/models/field-button";

/**
 * A button to reset form values to their initial state.
 *
 * Can be instantiated with a label string or full config.
 * Defaults to `type="reset"` and label `"Reset"`.
 *
 * Examples:
 * ```ts
 * new ResetButton(); // label: "Reset"
 * new ResetButton("Clear"); // label: "Clear"
 * new ResetButton({ key: "resetBtn", class: "secondary" });
 * ```
 */
export class ResetButton extends FieldButton {
  constructor(labelOrConfig: string | FieldButtonConfig = "Reset") {
    const config: FieldButtonConfig =
      typeof labelOrConfig === "string"
        ? { label: labelOrConfig, type: "reset" }
        : labelOrConfig;

    super({
      ...config,
      type: "reset",
    });
  }
}
