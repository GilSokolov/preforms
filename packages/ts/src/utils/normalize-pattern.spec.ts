import { describe, expect, it } from "vitest";
import { normalizePattern } from "./normalize-pattern";

describe("normalizePattern", () => {
  it("returns an empty array when no input is given", () => {
    expect(normalizePattern()).toEqual([]);
  });

  it("normalizes a single [pattern, message] tuple with a string pattern", () => {
    const result = normalizePattern(["^[a-z]+$", "letters only"]);
    expect(result).toHaveLength(1);
    expect(result[0].rule).toBeInstanceOf(RegExp);
    expect(result[0].rule.source).toBe("^[a-z]+$");
    expect(result[0].message).toBe("letters only");
  });

  it("normalizes a single [pattern, message] tuple with a RegExp pattern", () => {
    const regex = /^\d+$/;
    const result = normalizePattern([regex, "digits only"]);
    expect(result[0].rule).toBe(regex);
    expect(result[0].message).toBe("digits only");
  });

  it("normalizes a single PatternRule object with a string rule", () => {
    const result = normalizePattern({ rule: "^abc$", message: "must be abc" });
    expect(result).toHaveLength(1);
    expect(result[0].rule).toBeInstanceOf(RegExp);
    expect(result[0].rule.source).toBe("^abc$");
  });

  it("normalizes an array of three tuples", () => {
    const result = normalizePattern([
      ["^a$", "a only"],
      ["^b$", "b only"],
      ["^c$", "c only"],
    ]);

    expect(result).toHaveLength(3);
    expect(result.map((r) => r.message)).toEqual(["a only", "b only", "c only"]);
  });

  it("throws for an invalid pattern input", () => {
    expect(() => normalizePattern([{ foo: "bar" } as any, "x", "y"])).toThrow(
      "Invalid pattern input",
    );
  });
});
