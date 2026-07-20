import { describe, expect, it } from "vitest";
import { Divider } from "./divider.field";

describe("Divider", () => {
  it("sets component to 'form-divider'", () => {
    const field = new Divider();
    expect(field.component).toBe("form-divider");
  });

  it("accepts a custom className via config", () => {
    const field = new Divider({ className: "my-divider" });
    expect(field.className).toBe("my-divider");
  });
});
