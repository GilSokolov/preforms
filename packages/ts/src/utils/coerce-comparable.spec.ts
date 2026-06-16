import { describe, expect, it } from "vitest";
import { coerceComparable } from "./coerce-comparable";

describe("coerceComparable", () => {
  it("passes through null and undefined unchanged", () => {
    expect(coerceComparable(null)).toBeNull();
    expect(coerceComparable(undefined)).toBeUndefined();
  });

  it("converts a Date object to its timestamp", () => {
    const date = new Date("2024-01-01T00:00:00.000Z");
    expect(coerceComparable(date)).toBe(date.getTime());
  });

  it("converts an ISO date string to its timestamp", () => {
    const result = coerceComparable("2024-01-01");
    expect(result).toBe(Date.parse("2024-01-01"));
  });

  it("converts a numeric string to a number", () => {
    expect(coerceComparable("42")).toBe(42);
    expect(coerceComparable("-3.5")).toBe(-3.5);
  });

  it("leaves a non-numeric string unchanged", () => {
    expect(coerceComparable("hello")).toBe("hello");
  });

  it("leaves an empty or whitespace-only string unchanged instead of coercing to 0", () => {
    expect(coerceComparable("")).toBe("");
    expect(coerceComparable("   ")).toBe("   ");
  });

  it("leaves a plain number unchanged", () => {
    expect(coerceComparable(42)).toBe(42);
  });

  it("leaves a boolean unchanged", () => {
    expect(coerceComparable(true)).toBe(true);
  });
});
