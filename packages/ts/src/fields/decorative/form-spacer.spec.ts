import { describe, expect, it } from "vitest";
import { FormSpacer } from "./form-spacer";

describe("FormSpacer", () => {
  it("sets component to 'form-spacer'", () => {
    const field = new FormSpacer();
    expect(field.component).toBe("form-spacer");
  });

  it("accepts a custom className via config", () => {
    const field = new FormSpacer({ className: "my-spacer" });
    expect(field.className).toBe("my-spacer");
  });
});
