import { describe, expect, it } from "vitest";
import { SelectField } from "./select.field";

describe("SelectField", () => {
  it("sets component to 'select'", () => {
    const field = new SelectField("country", ["USA", "Canada"]);
    expect(field.component).toBe("select");
  });

  it("supports the (key, options, value) constructor overload", () => {
    const field = new SelectField("country", ["USA", "Canada"], "USA");

    expect(field.key).toBe("country");
    expect(field.value).toBe("USA");
    expect(field.options).toHaveLength(2);
    expect(field.options?.[0].value).toBe("USA");
  });

  it("supports the full config object overload", () => {
    const field = new SelectField<number>({
      key: "rating",
      label: "Rating",
      value: 3,
      options: [1, 2, 3, 4, 5],
      required: true,
    });

    expect(field.key).toBe("rating");
    expect(field.label).toBe("Rating");
    expect(field.value).toBe(3);
    expect(field.required).toBe(true);
    expect(field.options).toHaveLength(5);
  });

  it("normalizes string and number options into FormFieldOption instances with title-case labels", () => {
    const field = new SelectField("status", ["activeUser", "pending"]);

    expect(field.options?.[0].label).toBe("Active User");
    expect(field.options?.[1].label).toBe("Pending");
  });
});
