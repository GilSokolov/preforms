import { describe, expect, it } from "vitest";
import { isEmpty } from "./is-empty";

describe("isEmpty", () => {
  it("treats undefined and null as empty", () => {
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty(null)).toBe(true);
  });

  it("treats empty and whitespace-only strings as empty", () => {
    expect(isEmpty("")).toBe(true);
    expect(isEmpty("   ")).toBe(true);
  });

  it("treats a non-empty string as not empty", () => {
    expect(isEmpty("hello")).toBe(false);
  });

  it("treats an empty array as empty", () => {
    expect(isEmpty([])).toBe(true);
  });

  it("treats a non-empty array as not empty", () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  it("treats an empty plain object as empty", () => {
    expect(isEmpty({})).toBe(true);
  });

  it("treats a non-empty plain object as not empty", () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  it("treats class instances as not empty even with no own properties", () => {
    class Foo {}
    expect(isEmpty(new Foo())).toBe(false);
  });

  it("treats numbers and booleans as not empty", () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(false)).toBe(false);
  });
});
