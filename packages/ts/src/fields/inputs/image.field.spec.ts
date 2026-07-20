import { describe, expect, it } from "vitest";
import { ImageField } from "./image.field";

describe("ImageField", () => {
  it("sets component to 'input' and forces type to 'image'", () => {
    const field = new ImageField({ key: "submitImage", src: "/btn.png" });
    expect(field.component).toBe("input");
    expect(field.type).toBe("image");
  });

  it("stores a click-coordinate value", () => {
    const field = new ImageField({
      key: "submitImage",
      value: { x: 34, y: 12 },
    });

    expect(field.value).toEqual({ x: 34, y: 12 });
  });

  it("stores the image-specific display and form-override attributes", () => {
    const field = new ImageField({
      key: "submitImage",
      alt: "Click to submit",
      src: "/images/button.png",
      width: 100,
      height: 50,
      formaction: "/submit",
      formmethod: "POST",
      formenctype: "multipart/form-data",
      formtarget: "_blank",
    });

    expect(field.alt).toBe("Click to submit");
    expect(field.src).toBe("/images/button.png");
    expect(field.width).toBe(100);
    expect(field.height).toBe(50);
    expect(field.formaction).toBe("/submit");
    expect(field.formmethod).toBe("POST");
    expect(field.formenctype).toBe("multipart/form-data");
    expect(field.formtarget).toBe("_blank");
  });
});
