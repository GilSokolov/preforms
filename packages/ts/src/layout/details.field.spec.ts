import { describe, expect, it } from "vitest";
import { DetailsField } from "./details.field";
import { TextField } from "../fields/inputs/text-field";

describe("DetailsField", () => {
  it("sets component to 'details'", () => {
    const field = new DetailsField({
      key: "personalInfo",
      fields: [new TextField("name")],
    });

    expect(field.component).toBe("details");
  });

  it("stores the nested fields", () => {
    const fields = [new TextField("name")];
    const field = new DetailsField({ key: "personalInfo", fields });

    expect(field.fields).toBe(fields);
  });
});
