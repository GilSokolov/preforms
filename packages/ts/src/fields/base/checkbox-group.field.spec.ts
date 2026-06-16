import { describe, expect, it } from "vitest";
import { CheckboxGroupField } from "./checkbox-group.field";

describe("CheckboxGroupField", () => {
  it("sets component to 'checkbox-group'", () => {
    const field = new CheckboxGroupField("interests", ["music", "sports"]);
    expect(field.component).toBe("checkbox-group");
  });

  it("supports the (key, options, value) constructor overload and builds one CheckboxField per option", () => {
    const field = new CheckboxGroupField("interests", ["music", "sports"], [
      "music",
    ]);

    expect(field.key).toBe("interests");
    expect(field.fields).toHaveLength(2);
    expect(field.fields[0].component).toBe("checkbox");
    expect(field.fields.map((f) => f.key)).toEqual(["music", "sports"]);
  });

  it("supports the full config object overload", () => {
    const field = new CheckboxGroupField({
      key: "interests",
      options: [
        { value: "music", label: "Music" },
        { value: "sports", label: "Sports" },
      ],
    });

    expect(field.fields).toHaveLength(2);
    expect(field.fields.map((f) => f.key)).toEqual(["music", "sports"]);
  });
});
