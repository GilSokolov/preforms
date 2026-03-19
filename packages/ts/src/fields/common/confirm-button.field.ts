import { FieldButton, FieldButtonConfig } from "../../core/models/field-button";

/**
 * A button to confirm or save an action.
 *
 * Can optionally trigger form submission, save callbacks, or dialog toggling.
 * Defaults to `type="submit"` and label `"Confirm"`.
 *
 * Examples:
 * ```ts
 * new ConfirmButton(); // label: "Confirm"
 * new ConfirmButton("Save"); // label: "Save"
 * new ConfirmButton({ key: "confirmBtn", class: "primary" });
 * ```
 */
export class ConfirmButton extends FieldButton {
  constructor(labelOrConfig: string | FieldButtonConfig = "Confirm") {
    const config: FieldButtonConfig =
      typeof labelOrConfig === "string"
        ? { label: labelOrConfig, type: "submit" }
        : labelOrConfig;

    super({
      ...config,
      type: config.type ?? "submit",
    });
  }
}
