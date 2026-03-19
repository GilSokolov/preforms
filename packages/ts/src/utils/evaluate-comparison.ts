import { ComparisonOperator } from "../core/comparison-operator";
import { coerceComparable } from "./coerce-comparable";
import { isEmpty } from "./is-empty";

/**
 * Compare a value against a target using a comparison operator.
 *
 * @param operator - The comparison operator to use.
 * @param value - The value to test.
 * @param target - The value or set of values to compare against.
 *
 * @returns `true` if the comparison succeeds, `false` otherwise.
 *
 * @example
 * ```ts
 * evaluateComparison(ComparisonOperator.EQ, 5, 5);           // true
 * evaluateComparison(ComparisonOperator.NEQ, "a", "b");     // true
 * evaluateComparison(ComparisonOperator.IN, 3, [1,2,3,4]); // true
 * evaluateComparison(ComparisonOperator.GT, 10, 5);         // true
 * evaluateComparison(ComparisonOperator.GTE, 5, 5);         // true
 * evaluateComparison(ComparisonOperator.LT, 3, 10);         // true
 * evaluateComparison(ComparisonOperator.LTE, 5, 5);         // true
 * evaluateComparison(ComparisonOperator.EMPTY, "", null);   // true (use isEmpty function)
 * evaluateComparison(ComparisonOperator.NOT_EMPTY, "a", null); // true
 * evaluateComparison(ComparisonOperator.STARTS_WITH, "hello", "he"); // true
 * evaluateComparison(ComparisonOperator.ENDS_WITH, "hello", "lo");   // true
 * evaluateComparison(ComparisonOperator.CONTAINS, "hello", "ell");   // true
 * evaluateComparison(ComparisonOperator.MATCHES, "abc123", /^[a-z]+\d+$/); // true
 * ```
 *
 * @remarks
 * - `EMPTY` and `NOT_EMPTY` rely on a utility function `isEmpty` that checks for
 *   `null`, `undefined`, empty strings, empty arrays, or empty objects.
 * - `IN` expects the `target` to be an array.
 * - `MATCHES` expects `target` to be a RegExp instance.
 * - Operators like `GT`, `GTE`, `LT`, `LTE` only work with numeric `value`s.
 * - This function is reusable anywhere you need to evaluate conditional logic
 *   with standardized comparison operators.
 */
export function evaluateComparison(
  operator: ComparisonOperator | `${ComparisonOperator}`,
  v: unknown,
  t: unknown,
): boolean {
  const value = coerceComparable(v);
  const target = coerceComparable(t);

  switch (operator) {
    case ComparisonOperator.EQ:
      return value === target;

    case ComparisonOperator.NEQ:
      return value !== target;

    case ComparisonOperator.IN:
      return Array.isArray(target) && target.includes(value as any);

    case ComparisonOperator.GT:
      return typeof value === "number" && value > (target as number);

    case ComparisonOperator.GTE:
      return typeof value === "number" && value >= (target as number);

    case ComparisonOperator.LT:
      return typeof value === "number" && value < (target as number);

    case ComparisonOperator.LTE:
      return typeof value === "number" && value <= (target as number);

    case ComparisonOperator.EMPTY:
      return isEmpty(value);

    case ComparisonOperator.NOT_EMPTY:
      return !isEmpty(value);

    case ComparisonOperator.STARTS_WITH:
      return typeof value === "string" && value.startsWith(String(target));

    case ComparisonOperator.ENDS_WITH:
      return typeof value === "string" && value.endsWith(String(target));

    case ComparisonOperator.CONTAINS:
      return typeof value === "string" && value.includes(String(target));

    case ComparisonOperator.MATCHES:
      return typeof value === "string" && target instanceof RegExp
        ? target.test(value)
        : false;

    default:
      return false;
  }
}
