import { ComparisonOperator } from "../comparison-operator";

/**
 * Defines a cross-field validation rule that compares the current
 * control's value against the value of another field in the same form.
 *
 * ## Mental model
 * A CrossFieldValidation always evaluates a comparison in the following form:
 *
 *   currentValue <operator> compareToValue
 *
 * Where:
 * - `currentValue` is the value of the control being validated
 * - `compareToValue` is the value of the field referenced by `compareTo`
 *
 * ## Common use cases
 * - Confirming passwords
 * - Validating date ranges (endDate >= startDate)
 * - Comparing numeric thresholds
 * - Conditional validation based on another field’s value
 *
 * ## Examples
 *
 * ### Password confirmation
 * Ensures that the `confirmPassword` field matches `password`.
 *
 * ```ts
 * {
 *   compareTo: 'password',
 *   operator: ComparisonOperator.EQ,
 *   message: 'Passwords must match'
 * }
 * ```
 *
 * ### Date range validation
 * Ensures that `endDate` is greater than or equal to `startDate`.
 *
 * ```ts
 * {
 *   compareTo: 'startDate',
 *   operator: 'gte',
 *   message: 'End date must be after start date'
 * }
 * ```
 *
 * ### Numeric comparison
 * Ensures that a minimum value does not exceed a maximum value.
 *
 * ```ts
 * {
 *   compareTo: 'maxValue',
 *   operator: 'lte',
 *   message: 'Minimum value must be less than or equal to maximum value'
 * }
 * ```
 *
 * ### String pattern validation
 * Validates that the current value matches a regular expression
 * stored in another field.
 *
 * ```ts
 * {
 *   compareTo: 'emailPattern',
 *   operator: 'matches',
 *   message: 'Email does not match required format'
 * }
 * ```
 *
 * ### Empty / not-empty checks
 * These operators ignore the value of `compareTo` and operate only
 * on the current field’s value.
 *
 * ```ts
 * {
 *   compareTo: 'anyField',
 *   operator: 'empty',
 *   message: 'This field must be empty'
 * }
 * ```
 *
 * ## Operator behavior
 * - Comparison operators are evaluated using the current field value
 *   as the left-hand operand.
 * - String operators (`contains`, `startsWith`, `endsWith`, `matches`)
 *   apply only to string values.
 * - Numeric comparison operators (`gt`, `gte`, `lt`, `lte`)
 *   apply only to comparable values (e.g. numbers or dates).
 *
 * ## Error handling
 * When validation fails, an error entry is added to
 * `AbstractControl.errors` under the provided `errorKey`.
 *
 * This allows multiple cross-field validations to coexist on
 * the same control without collisions.
 */
export interface CrossFieldValidation {
  /**
   * Path to the field whose value will be compared against
   * the current field’s value.
   *
   * Supports nested paths using dot notation.
   *
   * Examples:
   * - "password"
   * - "address.zip"
   * - "dateRange.start"
   */
  compareTo: string;

  /**
   * Comparison operator used to evaluate the relationship
   * between the current field value and the related field value.
   *
   * Operators are evaluated as:
   *   operator(currentValue, compareToValue)
   */
  operator: ComparisonOperator | `${ComparisonOperator}`;

  /**
   * Error message exposed on the control when validation fails.
   * Typically displayed in the UI.
   *
   * @default "Validation failed"
   */
  message?: string;

  /**
   * Key under which the validation error will be stored in
   * `AbstractControl.errors`.
   *
   * Useful when multiple cross-field validations exist
   * on the same control.
   *
   * @default "crossField"
   */
  errorKey?: string;
}
