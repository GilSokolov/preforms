import { FormControl, FormGroup } from "@angular/forms";
import {
  CloseDialogButton,
  ConfirmButton,
  FieldButton,
  ResetButton,
  SubmitButton,
  TextField,
} from "@preforms/ts";
import { describe, expect, it } from "vitest";
import { DynamicFieldGroupComponent } from "./dynamic-field-group.component";

// Regression: new FieldButton({ key }) threw "Missing control for key". The form
// factory never puts button controls in the group, so the lookup must skip them.
function group(...keys: string[]) {
  return new FormGroup(Object.fromEntries(keys.map((k) => [k, new FormControl("")])));
}

describe("DynamicFieldGroupComponent.getControl", () => {
  it("returns the group control for a keyed FieldButton instead of throwing", () => {
    const cmp = new DynamicFieldGroupComponent();
    cmp.control = group("name");

    const button = new FieldButton({ key: "save", type: "button" });

    expect(() => cmp.getControl(button)).not.toThrow();
    expect(cmp.getControl(button)).toBe(cmp.control);
  });

  it.each([
    ["SubmitButton", () => new SubmitButton({ key: "b" })],
    ["ResetButton", () => new ResetButton({ key: "b", type: "reset" })],
    ["ConfirmButton", () => new ConfirmButton({ key: "b", type: "button" })],
    [
      "CloseDialogButton",
      () => new CloseDialogButton("dlg", { key: "b", type: "button" }),
    ],
  ])("does not throw for a keyed %s", (_name, make) => {
    const cmp = new DynamicFieldGroupComponent();
    cmp.control = group("name");

    expect(cmp.getControl(make() as never)).toBe(cmp.control);
  });

  it("still returns the field's own control for a keyed field", () => {
    const cmp = new DynamicFieldGroupComponent();
    cmp.control = group("name");

    expect(cmp.getControl(new TextField({ key: "name" }))).toBe(
      cmp.control.get("name"),
    );
  });

  it("still throws for a keyed field with no control, and says what to do", () => {
    const cmp = new DynamicFieldGroupComponent();
    cmp.control = group("other");

    expect(() => cmp.getControl(new TextField({ key: "missing" }))).toThrow(
      /Missing control for key: missing.*buttons.*name.*id/is,
    );
  });
});
