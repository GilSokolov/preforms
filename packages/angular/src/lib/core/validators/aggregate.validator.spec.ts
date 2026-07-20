import { describe, expect, it } from "vitest";
import { FormArray, FormControl, FormGroup } from "@angular/forms";
import {
  computeAggregate,
  formatAggregateErrorMessage,
  hasDuplicates,
  operators,
} from "./aggregate.validator";

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

describe("computeAggregate", () => {
  it("computes sum", () => {
    expect(computeAggregate([1, 2, 3], "sum")).toBe(6);
  });

  it("computes avg", () => {
    expect(computeAggregate([4, 6], "avg")).toBe(5);
  });

  it("computes count", () => {
    expect(computeAggregate([10, 20, 30], "count")).toBe(3);
  });

  it("returns 0 avg for an empty array", () => {
    expect(computeAggregate([], "avg")).toBe(0);
  });
});

describe("operators", () => {
  it("eq uses rounded comparison", () => {
    expect(operators["eq"](0.1 + 0.2, 0.3)).toBe(true);
  });

  it("gt, gte, lt, lte work correctly", () => {
    expect(operators["gt"](5, 3)).toBe(true);
    expect(operators["gte"](3, 3)).toBe(true);
    expect(operators["lt"](2, 4)).toBe(true);
    expect(operators["lte"](4, 4)).toBe(true);
  });
});

describe("formatAggregateErrorMessage", () => {
  it("returns the custom message when provided", () => {
    expect(
      formatAggregateErrorMessage("qty", "sum", "gt", 10, "custom error"),
    ).toBe("custom error");
  });

  it("builds a default message", () => {
    expect(formatAggregateErrorMessage("qty", "sum", "gt", 10)).toBe(
      "qty sum must be greater than 10",
    );
  });
});

describe("hasDuplicates", () => {
  it("returns false when all rows are distinct (single field)", () => {
    const arr = groupArray({ code: "A" }, { code: "B" });
    expect(hasDuplicates(arr, "code")).toBe(false);
  });

  it("returns true when a duplicate exists (single field)", () => {
    const arr = groupArray({ code: "A" }, { code: "A" });
    expect(hasDuplicates(arr, "code")).toBe(true);
  });

  it("returns true when a composite-key duplicate exists", () => {
    const arr = groupArray(
      { first: "J", last: "D" },
      { first: "J", last: "D" },
    );
    expect(hasDuplicates(arr, ["first", "last"])).toBe(true);
  });

  it("returns false when composite keys differ", () => {
    const arr = groupArray(
      { first: "J", last: "D" },
      { first: "J", last: "X" },
    );
    expect(hasDuplicates(arr, ["first", "last"])).toBe(false);
  });
});
