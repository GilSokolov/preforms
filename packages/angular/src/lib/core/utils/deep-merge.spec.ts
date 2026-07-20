import { describe, expect, it } from "vitest";
import { deepMerge } from "./deep-merge";

describe("deepMerge", () => {
  it("merges flat properties", () => {
    const result = deepMerge({ a: 1, b: 2 }, { b: 3 });
    expect(result).toEqual({ a: 1, b: 3 });
  });

  it("recursively merges nested objects", () => {
    const result = deepMerge({ a: { x: 1, y: 2 } }, { a: { y: 99 } });
    expect(result).toEqual({ a: { x: 1, y: 99 } });
  });

  it("replaces non-object target value with nested source", () => {
    const result = deepMerge({ a: 42 } as any, { a: { x: 1 } } as any);
    expect(result).toEqual({ a: { x: 1 } });
  });

  it("skips undefined source values", () => {
    const result = deepMerge({ a: 1 }, { a: undefined });
    expect(result).toEqual({ a: 1 });
  });

  it("overwrites with null", () => {
    const result = deepMerge({ a: 1 } as any, { a: null } as any);
    expect(result).toEqual({ a: null });
  });

  it("overwrites with arrays instead of merging them", () => {
    const result = deepMerge({ a: [1, 2] }, { a: [3] });
    expect(result).toEqual({ a: [3] });
  });

  it("mutates and returns the target", () => {
    const target = { a: 1 };
    const result = deepMerge(target, { a: 2 });
    expect(result).toBe(target);
  });
});
