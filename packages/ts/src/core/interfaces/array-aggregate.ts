import { ComparisonOperator } from "../comparison-operator";

export type ArrayAggregateOperator =
  | ComparisonOperator.EQ
  | ComparisonOperator.GT
  | ComparisonOperator.GTE
  | ComparisonOperator.LT
  | ComparisonOperator.LTE;
/**
 * Defines an aggregation or validation rule for an FieldArray.
 *
 * Used to enforce constraints, compute totals, counts, averages, or uniqueness
 * over the items in an array.
 *
 * Example usage:
 * ```ts
 * aggregates: [
 *   { field: 'price', action: 'sum', value: 1000, operator: 'lte', message: 'Total cannot exceed $1000' },
 *   { field: 'name', action: 'unique', message: 'Names must be unique' },
 * ]
 * ```
 */
export type BaseArrayAggregate =
  | {
      /**
       * The key of the field inside each array item to aggregate.
       * For nested structures, use the field key relative to the item template.
       */
      field: string;

      /**
       * The type of aggregation to perform.
       * - `"sum"` → sums numeric values across all items
       * - `"count"` → counts items matching a condition (optional `value` can filter)
       * - `"avg"` → computes the average of numeric values
       * - `"unique"` → ensures all values are unique
       */
      action: "sum" | "count" | "avg";

      /**
       * Threshold value to compare the aggregation result against.
       * For example, with `sum` + `operator: 'lte'` + `value: 1000`, ensures total ≤ 1000.
       */
      value: number;

      /**
       * Comparison operator used to validate the aggregation result.
       * Example: 'eq', 'neq', 'lt', 'lte', 'gt', 'gte', 'in'
       * If omitted, the action may just compute without validation (e.g., `unique` enforces uniqueness automatically)
       */
      operator?: ArrayAggregateOperator | `${ArrayAggregateOperator}`;

      /**
       * Optional human-readable message displayed when the validation fails.
       * Can be shown in UI or form errors.
       */
      message?: string;
    }
  | {
      // Product action must have array of fields
      field: [string, ...string[]]; // at least 2 fields
      action: "product";
      value: number;
      operator?: ArrayAggregateOperator | `${ArrayAggregateOperator}`;
      message?: string;
    };

export type ArrayAggregate =
  | BaseArrayAggregate
  | {
      field: string | string[];
      action: "unique";
      value?: number;
      operator?: ArrayAggregateOperator | `${ArrayAggregateOperator}`;
      message?: string;
    };
