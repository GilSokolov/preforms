import { describe, expect, it } from "vitest";
import { FormDivider } from "./divider.field";

describe("FormDivider", () => {
  it("sets component to 'form-divider'", () => {
    const field = new FormDivider();
    expect(field.component).toBe("form-divider");
  });

  it("accepts a custom className via config", () => {
    const field = new FormDivider({ className: "my-divider" });
    expect(field.className).toBe("my-divider");
  });
});
