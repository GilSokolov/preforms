import { describe, expect, it } from "vitest";
import { CheckboxField } from "./checkbox";

describe("CheckboxField", () => {
  it("sets component and type to 'checkbox'", () => {
    const field = new CheckboxField("acceptTerms");
    expect(field.component).toBe("checkbox");
    expect(field.type).toBe("checkbox");
  });

  it("supports the (key, value) constructor overload", () => {
    const field = new CheckboxField("acceptTerms", true);

    expect(field.key).toBe("acceptTerms");
    expect(field.value).toBe(true);
  });

  it("supports the full config object overload", () => {
    const field = new CheckboxField({ key: "acceptTerms", value: true });

    expect(field.key).toBe("acceptTerms");
    expect(field.value).toBe(true);
  });

  it("auto-generates a title-case label from the key string overload", () => {
    const field = new CheckboxField("acceptTerms");
    expect(field.label).toBe("Accept Terms");
  });
});
