import { describe, expect, it } from "vitest";
import { DateField } from "./date.field";

describe("DateField", () => {
  it("sets component to 'input' and type to 'date'", () => {
    const field = new DateField("dateOfBirth");
    expect(field.component).toBe("input");
    expect(field.type).toBe("date");
  });

  it("supports the (key, value, required) constructor overload", () => {
    const field = new DateField("dateOfBirth", "1990-01-01", true);

    expect(field.key).toBe("dateOfBirth");
    expect(field.value).toBe("1990-01-01");
    expect(field.required).toBe(true);
  });

  it("supports the full config object overload", () => {
    const field = new DateField({
      key: "startDate",
      label: "Start Date",
      value: "2026-02-10",
      required: true,
    });

    expect(field.value).toBe("2026-02-10");
    expect(field.label).toBe("Start Date");
    expect(field.required).toBe(true);
  });
});
