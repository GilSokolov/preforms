import { describe, expect, it } from "vitest";
import { evaluateComparison } from "./evaluate-comparison";
import { ComparisonOperator } from "../core/comparison-operator";

describe("evaluateComparison", () => {
  it("EQ returns true for equal coerced values", () => {
    expect(evaluateComparison(ComparisonOperator.EQ, "5", 5)).toBe(true);
    expect(evaluateComparison(ComparisonOperator.EQ, 5, 6)).toBe(false);
  });

  it("NEQ returns true for different values", () => {
    expect(evaluateComparison(ComparisonOperator.NEQ, "a", "b")).toBe(true);
    expect(evaluateComparison(ComparisonOperator.NEQ, "a", "a")).toBe(false);
  });

  it("IN checks membership in an array target", () => {
    expect(evaluateComparison(ComparisonOperator.IN, 3, [1, 2, 3, 4])).toBe(true);
    expect(evaluateComparison(ComparisonOperator.IN, 9, [1, 2, 3, 4])).toBe(false);
  });

  it("IN returns false when target is not an array", () => {
    expect(evaluateComparison(ComparisonOperator.IN, 3, 3)).toBe(false);
  });

  it("GT/GTE/LT/LTE compare numeric values", () => {
    expect(evaluateComparison(ComparisonOperator.GT, 10, 5)).toBe(true);
    expect(evaluateComparison(ComparisonOperator.GT, 5, 10)).toBe(false);
    expect(evaluateComparison(ComparisonOperator.GTE, 5, 5)).toBe(true);
    expect(evaluateComparison(ComparisonOperator.LT, 3, 10)).toBe(true);
    expect(evaluateComparison(ComparisonOperator.LTE, 5, 5)).toBe(true);
  });

  it("GT/GTE/LT/LTE return false when the value is not numeric", () => {
    expect(evaluateComparison(ComparisonOperator.GT, "hello", 5)).toBe(false);
  });

  it("EMPTY and NOT_EMPTY delegate to isEmpty", () => {
    expect(evaluateComparison(ComparisonOperator.EMPTY, "", null)).toBe(true);
    expect(evaluateComparison(ComparisonOperator.EMPTY, "a", null)).toBe(false);
    expect(evaluateComparison(ComparisonOperator.NOT_EMPTY, "a", null)).toBe(true);
    expect(evaluateComparison(ComparisonOperator.NOT_EMPTY, "", null)).toBe(false);
  });

  it("STARTS_WITH/ENDS_WITH/CONTAINS operate on strings", () => {
    expect(evaluateComparison(ComparisonOperator.STARTS_WITH, "hello", "he")).toBe(true);
    expect(evaluateComparison(ComparisonOperator.ENDS_WITH, "hello", "lo")).toBe(true);
    expect(evaluateComparison(ComparisonOperator.CONTAINS, "hello", "ell")).toBe(true);
    expect(evaluateComparison(ComparisonOperator.STARTS_WITH, "hello", "lo")).toBe(false);
  });

  it("STARTS_WITH/ENDS_WITH/CONTAINS return false for non-string values", () => {
    expect(evaluateComparison(ComparisonOperator.CONTAINS, 12345, "23")).toBe(false);
  });

  it("MATCHES tests a string against a RegExp target", () => {
    expect(evaluateComparison(ComparisonOperator.MATCHES, "abc123", /^[a-z]+\d+$/)).toBe(true);
    expect(evaluateComparison(ComparisonOperator.MATCHES, "abc", /^\d+$/)).toBe(false);
  });

  it("MATCHES returns false when target is not a RegExp", () => {
    expect(evaluateComparison(ComparisonOperator.MATCHES, "abc123", "abc")).toBe(false);
  });

  it("returns false for an unknown operator", () => {
    expect(evaluateComparison("unknown" as ComparisonOperator, 1, 1)).toBe(false);
  });
});
