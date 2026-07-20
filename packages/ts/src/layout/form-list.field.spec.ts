import { describe, expect, it } from "vitest";
import { List } from "./form-list.field";

describe("List", () => {
  it("sets component to 'form-list' and a default className", () => {
    const field = new List(["one", "two"]);
    expect(field.component).toBe("form-list");
    expect(field.className).toBe("form-list");
  });

  it("supports the shorthand string-array constructor", () => {
    const field = new List(["one", "two"]);
    expect(field.options).toEqual(["one", "two"]);
  });

  it("supports the full config object constructor", () => {
    const field = new List({
      options: ["a", "b", "c"],
      className: "custom-list",
    });

    expect(field.options).toEqual(["a", "b", "c"]);
    expect(field.className).toBe("custom-list");
  });
});
