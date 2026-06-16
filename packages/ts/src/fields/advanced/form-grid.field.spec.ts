import { describe, expect, it } from "vitest";
import { FormGrid } from "./form-grid.field";
import { TextField } from "../base/text-field";

describe("FormGrid", () => {
  it("sets component to 'form-grid'", () => {
    const field = new FormGrid([new TextField("a")]);
    expect(field.component).toBe("form-grid");
  });

  it("defaults columns, rows, and gap when not provided", () => {
    const field = new FormGrid([new TextField("a")]);
    expect(field.columns).toBe("1fr");
    expect(field.rows).toBe("1fr");
    expect(field.gap).toBe("1rem");
  });

  it("supports the (fields, config) constructor overload", () => {
    const fields = [new TextField("a"), new TextField("b")];
    const field = new FormGrid(fields, { columns: "1fr 2fr", gap: "1.5rem" });

    expect(field.fields).toBe(fields);
    expect(field.columns).toBe("1fr 2fr");
    expect(field.gap).toBe("1.5rem");
  });

  it("supports the full config object overload", () => {
    const fields = [new TextField("a")];
    const field = new FormGrid({ fields, columns: "1fr 2fr" });

    expect(field.fields).toBe(fields);
    expect(field.columns).toBe("1fr 2fr");
  });
});
