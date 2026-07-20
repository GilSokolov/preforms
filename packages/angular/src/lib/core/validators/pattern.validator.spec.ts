import { describe, expect, it } from "vitest";
import { FormControl } from "@angular/forms";
import { buildPatternValidators } from "./pattern.validator";

describe("buildPatternValidators", () => {
  it("returns an empty array when no patterns provided", () => {
    expect(buildPatternValidators()).toHaveLength(0);
    expect(buildPatternValidators(undefined)).toHaveLength(0);
  });

  it("returns one validator per pattern", () => {
    const validators = buildPatternValidators([
      { rule: /^\d+$/, message: "digits only" },
      { rule: /^[a-z]+$/, message: "lowercase only" },
    ]);
    expect(validators).toHaveLength(2);
  });

  it("passes when the value matches the pattern", () => {
    const [validator] = buildPatternValidators([
      { rule: /^\d+$/, message: "digits only" },
    ]);
    expect(validator(new FormControl("123"))).toBeNull();
  });

  it("returns a pattern error when the value does not match", () => {
    const [validator] = buildPatternValidators([
      { rule: /^\d+$/, message: "digits only" },
    ]);
    expect(validator(new FormControl("abc"))).toEqual({
      pattern: { message: "digits only" },
    });
  });

  it("passes for an empty value (no validation on empty)", () => {
    const [validator] = buildPatternValidators([
      { rule: /^\d+$/, message: "digits only" },
    ]);
    expect(validator(new FormControl(""))).toBeNull();
    expect(validator(new FormControl(null))).toBeNull();
  });
});
