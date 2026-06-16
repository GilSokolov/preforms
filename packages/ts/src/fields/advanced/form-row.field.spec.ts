import { describe, expect, it } from "vitest";
import { FormRow } from "./form-row.field";
import { TextField } from "../base/text-field";

describe("FormRow", () => {
  it("sets component to 'form-row'", () => {
    const field = new FormRow([new TextField("a")]);
    expect(field.component).toBe("form-row");
  });

  it("defaults gap to '5px' and position to 'start'", () => {
    const field = new FormRow([new TextField("a")]);
    expect(field.gap).toBe("5px");
    expect(field.position).toBe("start");
  });

  it("supports the (fields, config) constructor overload", () => {
    const fields = [new TextField("a"), new TextField("b")];
    const field = new FormRow(fields, { gap: "10px", position: "end" });

    expect(field.fields).toBe(fields);
    expect(field.gap).toBe("10px");
    expect(field.position).toBe("end");
  });

  it("supports the full config object overload", () => {
    const fields = [new TextField("a")];
    const field = new FormRow({ fields, position: "space-between" });

    expect(field.fields).toBe(fields);
    expect(field.position).toBe("space-between");
  });
});
