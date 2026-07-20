import { describe, expect, it } from "vitest";
import { ToggleField } from "./toggle.field";

describe("ToggleField", () => {
  it("sets component to 'toggle'", () => {
    const field = new ToggleField("enableNotifications");
    expect(field.component).toBe("toggle");
  });

  it("defaults value to false when not provided", () => {
    const field = new ToggleField("enableNotifications");
    expect(field.value).toBe(false);
  });

  it("supports the (key, value) constructor overload", () => {
    const field = new ToggleField("enableNotifications", true);

    expect(field.key).toBe("enableNotifications");
    expect(field.value).toBe(true);
  });

  it("supports the full config object overload", () => {
    const field = new ToggleField({
      key: "darkMode",
      label: "Dark mode",
      value: true,
    });

    expect(field.key).toBe("darkMode");
    expect(field.label).toBe("Dark mode");
    expect(field.value).toBe(true);
  });
});
