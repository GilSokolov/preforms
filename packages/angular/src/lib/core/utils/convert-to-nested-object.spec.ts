import { describe, expect, it } from "vitest";
import { convertToNestedObject } from "./convertToNestedObject.util";

describe("convertToNestedObject", () => {
  it("returns flat primitives unchanged", () => {
    expect(convertToNestedObject({ a: 1, b: "x" })).toEqual({ a: 1, b: "x" });
  });

  it("converts a single-level nested object to bracket notation then back", () => {
    const input = { address: { city: "NYC", zip: "10001" } };
    expect(convertToNestedObject(input)).toEqual({
      address: { city: "NYC", zip: "10001" },
    });
  });

  it("rebuilds deeply nested objects", () => {
    const input = { a: { b: { c: 42 } } };
    expect(convertToNestedObject(input)).toEqual({ a: { b: { c: 42 } } });
  });

  it("handles null values", () => {
    expect(convertToNestedObject({ a: null })).toEqual({ a: null });
  });

  it("preserves array values without expanding them", () => {
    const input = { tags: ["x", "y"] };
    expect(convertToNestedObject(input)).toEqual({ tags: ["x", "y"] });
  });
});
