import { describe, expect, it } from "vitest";
import { ResetButton } from "./reset-button.field";
import { SubmitButton } from "./submit-button.field";
import { ConfirmButton } from "./confirm-button.field";
import { CloseDialogButton } from "./close-dialog-button.field";
import { TriggerAction } from "../../core";

describe("ResetButton", () => {
  it("defaults to label 'Reset' and type 'reset'", () => {
    const field = new ResetButton();
    expect(field.label).toBe("Reset");
    expect(field.type).toBe("reset");
  });

  it("accepts a custom label via the shorthand constructor", () => {
    const field = new ResetButton("Clear");
    expect(field.label).toBe("Clear");
    expect(field.type).toBe("reset");
  });

  it("always forces type to 'reset' even via full config", () => {
    const field = new ResetButton({ key: "resetBtn", type: "submit" });
    expect(field.type).toBe("reset");
  });
});

describe("SubmitButton", () => {
  it("defaults to label 'Submit' and type 'submit'", () => {
    const field = new SubmitButton();
    expect(field.label).toBe("Submit");
    expect(field.type).toBe("submit");
  });

  it("accepts a custom label via the shorthand constructor", () => {
    const field = new SubmitButton("Save");
    expect(field.label).toBe("Save");
  });
});

describe("ConfirmButton", () => {
  it("defaults to label 'Confirm' and type 'submit'", () => {
    const field = new ConfirmButton();
    expect(field.label).toBe("Confirm");
    expect(field.type).toBe("submit");
  });

  it("allows overriding the type via config", () => {
    const field = new ConfirmButton({ key: "confirmBtn", type: "button" });
    expect(field.type).toBe("button");
  });
});

describe("CloseDialogButton", () => {
  it("defaults the label to 'Close' and type to 'button'", () => {
    const field = new CloseDialogButton("settingsDialog");
    expect(field.label).toBe("Close");
    expect(field.type).toBe("button");
  });

  it("stores the target dialog id and wires a close trigger", () => {
    const field = new CloseDialogButton("settingsDialog", "Cancel");

    expect(field.target).toBe("settingsDialog");
    expect(field.label).toBe("Cancel");
    expect(field.triggers).toEqual([
      {
        on: "click",
        action: TriggerAction.CLOSE_DIALOG,
        target: "settingsDialog",
      },
    ]);
  });

  it("sets the command and commandfor attributes to target the dialog", () => {
    const field = new CloseDialogButton("settingsDialog");
    expect(field.command).toBe("close");
    expect(field.commandfor).toBe("settingsDialog");
  });
});
