import { describe, expect, it } from "vitest";
import { OutputField } from "./output-field";

describe("OutputField", () => {
  it("sets component to 'output'", () => {
    const field = new OutputField({
      key: "totalPrice",
      for: ["unitPrice", "quantity"],
      calculation: "unitPrice * quantity",
    });

    expect(field.component).toBe("output");
  });

  it("stores the dependent field keys and calculation expression", () => {
    const field = new OutputField({
      key: "totalPrice",
      for: ["unitPrice", "quantity"],
      calculation: "unitPrice * quantity",
    });

    expect(field.for).toEqual(["unitPrice", "quantity"]);
    expect(field.calculation).toBe("unitPrice * quantity");
  });
});
