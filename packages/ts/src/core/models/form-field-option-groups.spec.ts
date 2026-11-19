import { describe, expect, it } from "vitest";
import { SelectField } from "../../fields/inputs/select.field";
import { isOptionGroup, normalizeOptions } from "../../utils/form-field-option";
import { FormFieldOption } from "./field-option";
import { FormFieldOptionGroup } from "./field-option-group";

// Regression: groups passed through a constructor used to be rebuilt as a
// FormFieldOption whose label was String(group), i.e. "[object Object]".
describe("option groups passed through the constructor", () => {
  it("keeps a FormFieldOptionGroup instance with its label and options", () => {
    const group = new FormFieldOptionGroup("Fruits", ["apple", "banana"]);
    const field = new SelectField("food", [group]);

    expect(field.options?.[0]).toBe(group);
    expect(isOptionGroup(field.options![0])).toBe(true);
    expect((field.options![0] as FormFieldOptionGroup).label).toBe("Fruits");
  });

  it("keeps groups through the config-object constructor", () => {
    const field = new SelectField({
      key: "food",
      options: [new FormFieldOptionGroup("Fruits", ["apple"])],
    });

    expect((field.options![0] as FormFieldOptionGroup).label).toBe("Fruits");
  });

  it("converts plain-object groups (as built from JSON) into groups", () => {
    const field = new SelectField({
      key: "food",
      options: [
        { label: "Fruits", options: ["apple", { value: "b", label: "Banana" }] },
      ],
    });
    const group = field.options![0] as FormFieldOptionGroup;

    expect(group).toBeInstanceOf(FormFieldOptionGroup);
    expect(group.label).toBe("Fruits");
    expect(group.options.map((o) => o.label)).toEqual(["Apple", "Banana"]);
  });

  it("supports ungrouped options mixed with groups", () => {
    const field = new SelectField({
      key: "food",
      options: [
        "none",
        new FormFieldOptionGroup("Fruits", ["apple"]),
        { label: "Veg", options: ["kale"], disabled: true },
      ],
    });

    expect(field.options![0]).toBeInstanceOf(FormFieldOption);
    expect(field.options![1]).toBeInstanceOf(FormFieldOptionGroup);
    expect((field.options![2] as FormFieldOptionGroup).disabled).toBe(true);
  });

  it("never produces a [object Object] label", () => {
    const field = new SelectField({
      key: "food",
      options: [
        new FormFieldOptionGroup("Fruits", ["apple"]),
        { label: "Veg", options: ["kale"] },
      ],
    });

    expect(JSON.stringify(field.options)).not.toContain("[object Object]");
  });
});

describe("normalizeOptions", () => {
  it("passes groups through, as its docs promise", () => {
    const group = new FormFieldOptionGroup("Fruits", ["apple"]);
    const result = normalizeOptions([group, "none"]);

    expect(result[0]).toBe(group);
    expect(result[1]).toBeInstanceOf(FormFieldOption);
  });

  it("converts plain-object groups", () => {
    const [group] = normalizeOptions([{ label: "Fruits", options: ["apple"] }]);

    expect(group).toBeInstanceOf(FormFieldOptionGroup);
  });
});
