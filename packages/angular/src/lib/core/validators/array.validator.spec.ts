import { describe, expect, it } from "vitest";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import {
  buildUniqueByErrorMessage,
  maxItemsValidator,
  minItemsValidator,
  requiredArrayValidator,
  uniqueByValidator,
} from "./array.validator";

function arrayOf(...values: any[]) {
  return new FormArray(values.map((v) => new FormControl(v)));
}

function groupArray(...rows: Record<string, any>[]) {
  return new FormArray(
    rows.map(
      (row) =>
        new FormGroup(
          Object.fromEntries(
            Object.entries(row).map(([k, v]) => [k, new FormControl(v)]),
          ),
        ),
    ),
  );
}

describe("requiredArrayValidator", () => {
  it("passes when the array has items", () => {
    expect(requiredArrayValidator()(arrayOf("a"))).toBeNull();
  });

  it("fails when the array is empty", () => {
    expect(requiredArrayValidator()(arrayOf())).toEqual({ required: true });
  });

  it("returns null for non-FormArray controls", () => {
    expect(requiredArrayValidator()(new FormControl("x"))).toBeNull();
  });
});

describe("minItemsValidator", () => {
  it("passes when length meets the minimum", () => {
    expect(minItemsValidator(2)(arrayOf("a", "b"))).toBeNull();
  });

  it("fails when length is below the minimum", () => {
    expect(minItemsValidator(3)(arrayOf("a"))).toMatchObject({
      min: { requiredLength: 3, actualLength: 1 },
    });
  });
});

describe("maxItemsValidator", () => {
  it("passes when length is within the maximum", () => {
    expect(maxItemsValidator(3)(arrayOf("a", "b"))).toBeNull();
  });

  it("fails when length exceeds the maximum", () => {
    expect(maxItemsValidator(1)(arrayOf("a", "b"))).toMatchObject({
      max: { requiredLength: 1, actualLength: 2 },
    });
  });
});

describe("buildUniqueByErrorMessage", () => {
  it("uses the provided message", () => {
    expect(buildUniqueByErrorMessage("name", "custom msg")).toBe("custom msg");
  });

  it("builds a default message for a single field", () => {
    expect(buildUniqueByErrorMessage("email")).toBe("email must be unique");
  });

  it("builds a default message for multiple fields", () => {
    expect(buildUniqueByErrorMessage(["first", "last"])).toBe(
      "first, last must be unique",
    );
  });
});

describe("uniqueByValidator", () => {
  it("passes when all rows have distinct values", () => {
    const arr = groupArray({ name: "Alice" }, { name: "Bob" });
    expect(uniqueByValidator("name")(arr)).toBeNull();
  });

  it("returns an error when duplicate values exist", () => {
    const arr = groupArray({ name: "Alice" }, { name: "Alice" });
    const result = uniqueByValidator("name")(arr);
    expect(result).toMatchObject({ uniqueBy: { fields: "name" } });
  });

  it("supports composite keys", () => {
    const arr = groupArray(
      { first: "John", last: "Doe" },
      { first: "John", last: "Doe" },
    );
    const result = uniqueByValidator(["first", "last"])(arr);
    expect(result).toMatchObject({ uniqueBy: { fields: ["first", "last"] } });
  });

  it("passes for composite keys that differ in one field", () => {
    const arr = groupArray(
      { first: "John", last: "Doe" },
      { first: "Jane", last: "Doe" },
    );
    expect(uniqueByValidator(["first", "last"])(arr)).toBeNull();
  });
});
