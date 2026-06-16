import { describe, expect, it } from "vitest";
import { RadioField } from "./radio.field";

describe("RadioField", () => {
  it("sets component to 'radio'", () => {
    const field = new RadioField("gender", ["male", "female"]);
    expect(field.component).toBe("radio");
  });

  it("supports the (key, options, value) constructor overload", () => {
    const field = new RadioField("gender", ["male", "female"], "male");

    expect(field.key).toBe("gender");
    expect(field.value).toBe("male");
    expect(field.options).toHaveLength(2);
  });

  it("supports the full config object overload", () => {
    const field = new RadioField({
      key: "gender",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
      ],
      value: "female",
    });

    expect(field.key).toBe("gender");
    expect(field.value).toBe("female");
    expect(field.options?.map((o) => o.label)).toEqual(["Male", "Female"]);
  });
});
