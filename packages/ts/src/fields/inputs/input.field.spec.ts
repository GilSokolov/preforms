import { describe, expect, it } from "vitest";
import { InputField } from "./input.field";

describe("InputField", () => {
  it("sets component to 'input' and stores the given type", () => {
    const field = new InputField({ key: "themeColor", type: "color" });

    expect(field.component).toBe("input");
    expect(field.type).toBe("color");
  });

  it("propagates key, value, and label", () => {
    const field = new InputField({
      key: "volume",
      label: "Volume",
      value: 5,
      type: "range",
    });

    expect(field.key).toBe("volume");
    expect(field.value).toBe(5);
    expect(field.label).toBe("Volume");
  });

  it("auto-generates a title-case label from the key when none is given", () => {
    const field = new InputField({ key: "themeColor", type: "color" });

    expect(field.label).toBe("Theme Color");
  });
});
