import { describe, expect, it } from "vitest";
import { AutocompleteField } from "./autocomplete.field";

describe("AutocompleteField", () => {
  it("sets component to 'autocomplete'", () => {
    const field = new AutocompleteField("country", ["Cyprus", "France"]);
    expect(field.component).toBe("autocomplete");
  });

  it("normalizes string options into FormFieldOption instances", () => {
    const field = new AutocompleteField("country", ["Cyprus", "France"]);
    expect(field.options).toHaveLength(2);
    expect(field.options?.[0].value).toBe("Cyprus");
  });

  it("defaults value to an empty string", () => {
    const field = new AutocompleteField("country", ["Cyprus"]);
    expect(field.value).toBe("");
  });

  it("defaults maxSuggestions to 5", () => {
    const field = new AutocompleteField("country", ["Cyprus"]);
    expect(field.maxSuggestions).toBe(5);
  });

  it("respects a custom maxSuggestions and initial value", () => {
    const field = new AutocompleteField("country", ["Cyprus"], {
      maxSuggestions: 10,
      value: "Cyprus",
    });

    expect(field.maxSuggestions).toBe(10);
    expect(field.value).toBe("Cyprus");
  });
});
