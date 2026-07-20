import { describe, expect, it } from "vitest";
import { FormDescription } from "./form-description.field";

describe("FormDescription", () => {
  it("sets component to 'form-description'", () => {
    const field = new FormDescription("Please enter your full legal name.");
    expect(field.component).toBe("form-description");
  });

  it("supports the shorthand string constructor", () => {
    const field = new FormDescription("Please enter your full legal name.");
    expect(field.value).toBe("Please enter your full legal name.");
  });

  it("supports the full config object constructor", () => {
    const field = new FormDescription({
      value: "All fields marked with * are required.",
      className: "form-hint",
    });

    expect(field.value).toBe("All fields marked with * are required.");
    expect(field.className).toBe("form-hint");
  });
});
