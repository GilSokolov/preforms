import { describe, expect, it } from "vitest";
import { Fieldset } from "./fieldset.field";
import { TextField } from "../fields/inputs/text-field";

describe("Fieldset", () => {
  it("sets component to 'fieldset'", () => {
    const field = new Fieldset({ fields: [new TextField("name")] });
    expect(field.component).toBe("fieldset");
  });

  it("supports the (label, fields) constructor overload", () => {
    const fields = [new TextField("name")];
    const field = new Fieldset("Billing", fields);

    expect(field.label).toBe("Billing");
    expect(field.fields).toBe(fields);
  });

  it("supports the full config object overload", () => {
    const fields = [new TextField("name")];
    const field = new Fieldset({ key: "billing", fields });

    expect(field.key).toBe("billing");
    expect(field.fields).toBe(fields);
  });

  it("throws when no fields are provided", () => {
    expect(() => new Fieldset({} as any)).toThrow("Missing fields");
  });
});
