import { TextFieldConfigDerived } from "../base";
import { DateField } from "../base/date.field";
/**
 * Represents a "Date of Birth" input field.
 *
 * Extends `DateField` and enforces a consistent `key` of "dateOfBirth".
 * Provides a convenient constructor that accepts either a raw string value
 * or a full field configuration object.
 *
 * @example
 * // Quick usage with a date string
 * const dobField1 = new DateOfBirth("1990-01-01");
 *
 * // Usage with a full configuration object
 * const dobField2 = new DateOfBirth({
 *   value: "1990-01-01",
 *   label: "Date of Birth",
 *   required: true,
 *   placeholder: "YYYY-MM-DD",
 * });
 *
 * @param configOrValue - Either a string representing the date, or a configuration object.
 * @param required - Optional boolean indicating if the field is required (default: true). Only used if passing a string as `configOrValue`.
 */
export class DateOfBirth extends DateField {
  constructor(
    configOrValue: string | TextFieldConfigDerived = "",
    required = true,
  ) {
    const config: TextFieldConfigDerived =
      typeof configOrValue === "string"
        ? { value: configOrValue, required }
        : configOrValue;

    super({ key: "dateOfBirth", ...config });
  }
}
