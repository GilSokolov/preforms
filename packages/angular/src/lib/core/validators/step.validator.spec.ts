import { describe, expect, it } from "vitest";
import { FormControl } from "@angular/forms";
import { stepValidator } from "./step.validator";

function ctrl(value: any) {
  return new FormControl(value);
}

describe("stepValidator", () => {
  it("passes when control has no value", () => {
    expect(stepValidator(5, "number")(ctrl(null))).toBeNull();
    expect(stepValidator(5, "number")(ctrl(undefined))).toBeNull();
    expect(stepValidator(5, "number")(ctrl(""))).toBeNull();
  });

  it("passes when type is not 'number'", () => {
    expect(stepValidator(5)(ctrl(7))).toBeNull();
    expect(stepValidator(5, "text")(ctrl(7))).toBeNull();
  });

  it("returns an error when value is not a multiple of step", () => {
    const result = stepValidator(5, "number")(ctrl(7));
    expect(result).toMatchObject({ step: { valid: false } });
  });

  it("passes when value is an exact multiple of step", () => {
    expect(stepValidator(5, "number")(ctrl(10))).toBeNull();
    expect(stepValidator(5, "number")(ctrl(0))).toBeNull();
  });

  it("handles decimal steps correctly", () => {
    expect(stepValidator(0.5, "number")(ctrl(1.5))).toBeNull();
    expect(stepValidator(0.5, "number")(ctrl(1.3))).toMatchObject({
      step: { valid: false },
    });
  });

  it("returns an error for non-numeric string values", () => {
    const result = stepValidator(5, "number")(ctrl("abc"));
    expect(result).toMatchObject({ step: { valid: false } });
  });
});
