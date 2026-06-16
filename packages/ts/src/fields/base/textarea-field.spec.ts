import { describe, expect, it } from "vitest";
import { TextareaField } from "./textarea-field";

describe("TextareaField", () => {
  it("sets component to 'textarea' and type to 'text'", () => {
    const field = new TextareaField("bio");
    expect(field.component).toBe("textarea");
    expect(field.type).toBe("text");
  });

  it("supports the (key, value, required) constructor overload", () => {
    const field = new TextareaField("bio", "This is my bio.", true);

    expect(field.key).toBe("bio");
    expect(field.value).toBe("This is my bio.");
    expect(field.required).toBe(true);
  });

  it("supports the full config object overload, including rows", () => {
    const field = new TextareaField({
      key: "description",
      value: "Enter a detailed description",
      rows: 5,
    });

    expect(field.value).toBe("Enter a detailed description");
    expect(field.rows).toBe(5);
  });
});
