import { TriggerAction } from "../../core";
import { FieldButton, FieldButtonConfig } from "../../core/models/field-button";

/**
 * A button to close a dialog/modal.
 *
 * Automatically attaches a trigger to close the target dialog when clicked.
 * `targetId` specifies which dialog to close. If omitted, defaults to current button key.
 *
 * Examples:
 * ```ts
 * new CloseDialogButton("settingsDialog", "Cancel");
 * new CloseDialogButton("settingsDialog", { class: "danger" });
 * ```
 */
export class CloseDialogButton extends FieldButton {
  targetId: string;

  constructor(targetId: string, labelOrConfig?: string | FieldButtonConfig) {
    const config =
      typeof labelOrConfig === "string"
        ? { label: labelOrConfig }
        : labelOrConfig;

    super({
      label: "Close",
      ...config,
      type: "button",

      triggers: [
        {
          on: "click",
          action: TriggerAction.DIALOG_CLOSE,
          targetId,
        },
      ],
      command: "close",
      commandfor: targetId,
    });

    this.targetId = targetId;
  }
}
