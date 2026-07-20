import { describe, expect, it } from "vitest";
import { Title, FormTitleLevel } from "./form-title.field";

describe("Title", () => {
  it("sets component to 'form-title'", () => {
    const field = new Title("User Information");
    expect(field.component).toBe("form-title");
  });

  it("defaults the level to H1", () => {
    const field = new Title("User Information");
    expect(field.level).toBe(FormTitleLevel.H1);
  });

  it("supports the (value, level) shorthand constructor", () => {
    const field = new Title("Address Details", FormTitleLevel.H2);
    expect(field.value).toBe("Address Details");
    expect(field.level).toBe(FormTitleLevel.H2);
  });

  it("supports the full config object constructor, including level", () => {
    const field = new Title({
      value: "Address Details",
      level: FormTitleLevel.H3,
    });

    expect(field.value).toBe("Address Details");
    expect(field.level).toBe(FormTitleLevel.H3);
  });

  it("derives the default className from the level given via config, not just the shorthand arg", () => {
    const field = new Title({
      value: "Address Details",
      level: FormTitleLevel.H3,
    });

    expect(field.className).toBe(`form-title ${FormTitleLevel.H3}`);
  });
});
