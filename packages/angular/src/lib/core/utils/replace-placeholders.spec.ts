import { describe, expect, it } from "vitest";
import { replacePlaceholders } from "./replace-placeholders.util";

describe("replacePlaceholders", () => {
  it("replaces a simple placeholder", () => {
    expect(replacePlaceholders("Hello {name}", { name: "World" })).toBe(
      "Hello World",
    );
  });

  it("replaces a nested placeholder using dot notation", () => {
    expect(
      replacePlaceholders("Hi {user.name}", { user: { name: "Alice" } }),
    ).toBe("Hi Alice");
  });

  it("leaves the placeholder intact when the key is missing", () => {
    expect(replacePlaceholders("Hi {missing}", {})).toBe("Hi {missing}");
  });

  it("replaces multiple placeholders", () => {
    expect(
      replacePlaceholders("{a} and {b}", { a: "foo", b: "bar" }),
    ).toBe("foo and bar");
  });

  it("coerces numeric values to strings", () => {
    expect(replacePlaceholders("count: {n}", { n: 42 })).toBe("count: 42");
  });
});
