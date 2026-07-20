import { describe, expect, it } from "vitest";
import { Spacer } from "./form-spacer";

describe("Spacer", () => {
  it("sets component to 'form-spacer'", () => {
    const field = new Spacer();
    expect(field.component).toBe("form-spacer");
  });

  it("accepts a custom className via config", () => {
    const field = new Spacer({ className: "my-spacer" });
    expect(field.className).toBe("my-spacer");
  });
});
