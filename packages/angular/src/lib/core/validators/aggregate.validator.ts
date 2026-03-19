import {
  AbstractControl,
  FormArray,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from "@angular/forms";

import {
  ArrayAggregate,
  ArrayAggregateOperator,
  BaseArrayAggregate,
  ComparisonOperator,
} from "@preforms/ts";

// --- Aggregate computation ---
export function computeAggregate(
  values: number[],
  action: BaseArrayAggregate["action"],
): number {
  const count = values.length;
  const sum = values.reduce((acc, v) => acc + v, 0);
  const avg = count ? sum / count : 0;

  return { sum, avg, count, product: sum }[action] ?? sum;
}

// --- Operators ---
export const operators: Record<string, (a: number, b: number) => boolean> = {
  eq: (a, b) => Math.round(a * 100) / 100 === Math.round(b * 100) / 100,
  gt: (a, b) => a > b,
  gte: (a, b) => a >= b,
  lt: (a, b) => a < b,
  lte: (a, b) => a <= b,
};

export const operatorLabels: Record<string, string> = {
  eq: "equal to",
  gt: "greater than",
  gte: "greater than or equal to",
  lt: "less than",
  lte: "less than or equal to",
};

// --- Error messages ---
export function formatAggregateErrorMessage(
  field: string,
  action: string,
  operator: string,
  value: number,
  message?: string,
): string {
  return (
    message ||
    `${field} ${action} must be ${operatorLabels[operator] || operator} ${value}`
  );
}

// --- Duplicate check ---
export function hasDuplicates(
  formArray: FormArray,
  fields: string | string[],
): boolean {
  const seen = new Set<string>();

  for (const group of formArray.controls) {
    const fg = group as FormGroup;

    let key: string;
    if (Array.isArray(fields)) {
      // combine all field values into a string key
      key = fields
        .map((f) => {
          const val = fg.get(f)?.value;
          return val != null ? val : "";
        })
        .join("|");
    } else {
      const val = fg.get(fields)?.value;
      key = val != null ? String(val) : "";
    }

    if (seen.has(key)) return true;
    seen.add(key);
  }

  return false;
}

function computeFieldAggregate(
  formArray: FormArray,
  fields: string | string[],
  action: BaseArrayAggregate["action"],
): number {
  const values = formArray.controls.map((child) => {
    const group = child as FormGroup;

    if (Array.isArray(fields)) {
      // multiply the values of all fields
      const product = fields.reduce((acc, f) => {
        const val = group.get(f)?.value;
        return acc * (typeof val === "number" ? val : 0);
      }, 1);
      return product;
    } else {
      const val = group.get(fields)?.value;
      return typeof val === "number" ? val : 0;
    }
  });

  return computeAggregate(values, action);
}

// --- Type-safe error interfaces ---
export interface AggregateError {
  field: string;
  action?: ArrayAggregate["action"];
  operator?: ArrayAggregateOperator | `${ArrayAggregateOperator}`;
  expected?: number;
  actual?: number;
  message: string;
}

export interface ArrayAggregateValidationErrors extends ValidationErrors {
  [key: string]: AggregateError;
}

export function arrayAggregateValidator(rules: ArrayAggregate[]): ValidatorFn {
  return (
    formArray: AbstractControl,
  ): ArrayAggregateValidationErrors | null => {
    if (!(formArray instanceof FormArray)) return null;

    const errors: ArrayAggregateValidationErrors = {};

    for (const rule of rules) {
      const {
        field,
        action = "sum",
        operator = ComparisonOperator.EQ,
        value = 0,
        message,
      } = rule;

      // --- Unique check ---
      if (action === "unique") {
        if (hasDuplicates(formArray, field)) {
          const key = `unique_${Array.isArray(field) ? field.join("_") : field}`;
          errors[key] = {
            field: Array.isArray(field) ? field.join(", ") : field,
            action,
            message:
              message ||
              `${Array.isArray(field) ? field.join(", ") : field} must be unique`,
          };
        }
        continue;
      }

      // --- Aggregate check ---
      const computed = computeFieldAggregate(formArray, field, action);

      const isValid = operators[operator]?.(computed, value);
      if (!isValid) {
        const key = `${action}_${Array.isArray(field) ? field.join("_") : field}_${operator}`;
        errors[key] = {
          field: Array.isArray(field) ? field.join(", ") : field,
          action,
          operator,
          expected: value,
          actual: computed,
          message: formatAggregateErrorMessage(
            Array.isArray(field) ? field.join(", ") : field,
            action,
            operator,
            value,
            message,
          ),
        };
      }
    }

    return Object.keys(errors).length ? errors : null;
  };
}
