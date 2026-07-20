import { describe, expect, it } from "vitest";
import { FileField } from "./file.field";

describe("FileField", () => {
  it("sets component to 'input' and forces type to 'file'", () => {
    const field = new FileField({ key: "resume" });
    expect(field.component).toBe("input");
    expect(field.type).toBe("file");
  });

  it("stores accept and multiple options", () => {
    const field = new FileField({
      key: "resume",
      accept: ".pdf,.docx",
      multiple: true,
    });

    expect(field.accept).toBe(".pdf,.docx");
    expect(field.multiple).toBe(true);
  });
});
