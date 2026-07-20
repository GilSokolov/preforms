import { describe, expect, it } from "vitest";
import { FormImage } from "./form-image";

describe("FormImage", () => {
  it("sets component to 'form-image' and a default className", () => {
    const field = new FormImage("/logo.png");
    expect(field.component).toBe("form-image");
    expect(field.className).toBe("form-image");
  });

  it("supports the shorthand string-src constructor", () => {
    const field = new FormImage("/logo.png");
    expect(field.src).toBe("/logo.png");
  });

  it("supports the full config object constructor", () => {
    const field = new FormImage({
      src: "/logo.png",
      alt: "Company logo",
      width: "200px",
      height: "100px",
      className: "custom-image",
    });

    expect(field.src).toBe("/logo.png");
    expect(field.alt).toBe("Company logo");
    expect(field.width).toBe("200px");
    expect(field.height).toBe("100px");
    expect(field.className).toBe("custom-image");
  });
});
