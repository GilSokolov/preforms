import { FormFieldTrigger } from "../core";
import { evaluateComparison } from "./evaluate-comparison";

/**
 * Evaluates whether a trigger should fire based on the current field value
 * and the trigger's optional condition.
 *
 * This function is the central decision point for all field triggers
 * (validation, visibility, dialog control, submission requests, etc.).
 *
 * If no condition is provided, the trigger is considered active by default.
 *
 * Supported condition styles:
 *
 * 1. Simple equality:
 * ```ts
 * condition: true
 * condition: "yes"
 * ```
 *
 * 2. Operator-based condition:
 * ```ts
 * condition: {
 *   operator: ComparisonOperator.GT,
 *   value: 10
 * }
 * ```
 *
 * The function is runtime-safe and defensive by design, as form values
 * often originate from user input, DOM events, or async data sources.
 *
 * @template T - The expected value type of the field
 *
 * @param trigger - The trigger definition containing an optional condition
 * @param value - The current value of the field being evaluated
 *
 * @returns `true` if the trigger should fire, otherwise `false`
 *
 * @example
 * ```ts
 * shouldTrigger(
 *   { action: "validate", condition: true },
 *   "hello"
 * ); // true
 * ```
 *
 * @example
 * ```ts
 * shouldTrigger(
 *   {
 *     action: "toggle",
 *     condition: {
 *       operator: ComparisonOperator.EMPTY
 *     }
 *   },
 *   ""
 * ); // true
 * ```
 *
 * @example
 * ```ts
 * shouldTrigger(
 *   {
 *     action: "dialogOpen",
 *     condition: {
 *       operator: ComparisonOperator.GTE,
 *       value: 18
 *     }
 *   },
 *   21
 * ); // true
 * ```
 */
export function shouldTrigger<T>(
  trigger: FormFieldTrigger<T>,
  value: unknown,
): boolean {
  if (trigger?.condition == null) return true;

  if (
    typeof trigger.condition === "object" &&
    "operator" in trigger.condition
  ) {
    const { operator, value: target } = trigger.condition;

    return evaluateComparison(operator, value, target);
  }

  // simple equality fallback
  return value === trigger.condition;
}
