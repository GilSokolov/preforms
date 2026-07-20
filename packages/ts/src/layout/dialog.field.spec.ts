import { describe, expect, it } from "vitest";
import { DialogField } from "./dialog.field";
import { TextField } from "../fields/inputs/text-field";

describe("DialogField", () => {
  it("sets component to 'dialog'", () => {
    const field = new DialogField({
      key: "confirmDialog",
      fields: [new TextField("note")],
    });

    expect(field.component).toBe("dialog");
  });

  it("defaults closeBtn to true", () => {
    const field = new DialogField({ key: "confirmDialog", fields: [] });
    expect(field.closeBtn).toBe(true);
  });

  it("respects an explicit closeBtn, width, and height", () => {
    const field = new DialogField({
      key: "confirmDialog",
      fields: [],
      closeBtn: false,
      width: "400px",
      height: "200px",
    });

    expect(field.closeBtn).toBe(false);
    expect(field.width).toBe("400px");
    expect(field.height).toBe("200px");
  });
});
