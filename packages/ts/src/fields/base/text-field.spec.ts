import { describe, expect, it } from "vitest";
import { TextField } from "./text-field";

describe("TextField", () => {
  it("defaults the input type to 'text'", () => {
    const field = new TextField("firstName");
    expect(field.type).toBe("text");
    expect(field.component).toBe("input");
  });

  it("supports the (key, value, required) constructor overload", () => {
    const field = new TextField("firstName", "John", true);

    expect(field.key).toBe("firstName");
    expect(field.value).toBe("John");
    expect(field.required).toBe(true);
  });

  it("supports the full config object overload", () => {
    const field = new TextField({
      key: "lastName",
      value: "Doe",
      required: true,
      placeholder: "Enter your last name",
    });

    expect(field.key).toBe("lastName");
    expect(field.value).toBe("Doe");
    expect(field.required).toBe(true);
    expect(field.placeholder).toBe("Enter your last name");
  });

  it("defaults required to false when not given via the key overload", () => {
    const field = new TextField("firstName", "John");
    expect(field.required).toBe(false);
  });
});
