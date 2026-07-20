import { describe, expect, it } from "vitest";
import { Country } from "./country.field";

describe("Country", () => {
  it("sets the key to 'country' and component to 'select'", () => {
    const field = new Country();
    expect(field.key).toBe("country");
    expect(field.component).toBe("select");
  });

  it("defaults required to true and loads the built-in country list", () => {
    const field = new Country();
    expect(field.required).toBe(true);
    expect(field.options?.length).toBeGreaterThan(0);
  });

  it("accepts a raw string value via the shorthand constructor", () => {
    const field = new Country("USA");
    expect(field.value).toBe("USA");
  });

  it("allows overriding the option list via config", () => {
    const field = new Country({
      options: ["Canada", "USA", "Mexico"],
    });

    expect(field.options).toHaveLength(3);
    expect(field.options?.map((o) => o.value)).toEqual([
      "Canada",
      "USA",
      "Mexico",
    ]);
  });
});
