import { describe, expect, it } from "vitest";
import { NumberField } from "./number-field";

describe("NumberField", () => {
  it("sets component and type to 'number'", () => {
    const field = new NumberField("age");
    expect(field.component).toBe("number");
    expect(field.type).toBe("number");
  });

  it("supports the (key, value, required) constructor overload", () => {
    const field = new NumberField("age", 30, true);

    expect(field.key).toBe("age");
    expect(field.value).toBe(30);
    expect(field.required).toBe(true);
  });

  it("supports the full config object overload, including min/max", () => {
    const field = new NumberField({
      key: "price",
      value: 100,
      min: 0,
      max: 1000,
    });

    expect(field.value).toBe(100);
    expect(field.min).toBe(0);
    expect(field.max).toBe(1000);
  });
});
