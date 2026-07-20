import { describe, expect, it } from "vitest";
import { DateRangeField } from "./date-renge.field";
import { DateField } from "../base";

describe("DateRangeField", () => {
  it("sets component to 'date-range'", () => {
    const field = new DateRangeField();
    expect(field.component).toBe("date-range");
  });

  it("creates default start/end DateField children", () => {
    const field = new DateRangeField();

    expect(field.fields).toHaveLength(2);
    expect(field.fields[0].key).toBe("start");
    expect(field.fields[1].key).toBe("end");
  });

  it("seeds the default fields from a DateRangeValue", () => {
    const start = new Date("2026-01-01");
    const end = new Date("2026-01-10");
    const field = new DateRangeField({ value: { start, end } });

    expect(field.fields[0].value).toBe(start);
    expect(field.fields[1].value).toBe(end);
  });

  it("attaches a cross-field validation trigger to the end date", () => {
    const field = new DateRangeField();
    expect(field.fields[1].triggers).toHaveLength(1);
    expect(field.fields[1].triggers?.[0].do).toBe("validate");
  });

  it("allows overriding the default fields with custom DateField instances", () => {
    const customFields: [DateField, DateField] = [
      new DateField({ key: "from" }),
      new DateField({ key: "to" }),
    ];

    const field = new DateRangeField({ fields: customFields });

    expect(field.fields).toBe(customFields);
  });
});
