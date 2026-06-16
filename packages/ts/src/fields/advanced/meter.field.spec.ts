import { describe, expect, it } from "vitest";
import { MeterField } from "./meter.field";

describe("MeterField", () => {
  it("sets component to 'meter'", () => {
    const field = new MeterField({ key: "cpu", value: "65" });
    expect(field.component).toBe("meter");
  });

  it("stores low, high, and optimum bounds", () => {
    const field = new MeterField({
      key: "cpu",
      value: "65",
      low: 0,
      high: 100,
      optimum: 50,
    });

    expect(field.low).toBe(0);
    expect(field.high).toBe(100);
    expect(field.optimum).toBe(50);
  });
});
