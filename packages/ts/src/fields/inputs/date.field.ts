import { FormFieldConfig } from "../../core";
import { InputField, InputFieldConfigDerived } from "./input.field";

/**
 * Represents a single date input field.
 *
 * Extends `InputField<string>` and automatically enforces the HTML input type `"date"`.
 * Provides a flexible constructor that accepts either:
 * 1. A string representing the `key` of the field.
 * 2. A full configuration object (`FieldConfigForDerived<string>`).
 *
 * @example
 * // Quick usage with just a key
 * const dob = new DateField("dateOfBirth", "1990-01-01", true);
 *
 * // Full configuration object usage
 * const startDate = new DateField({
 *   key: "startDate",
 *   label: "Start Date",
 *   value: "2026-02-10",
 *   required: true,
 *   placeholder: "YYYY-MM-DD",
 *   hint: "Enter your start date",
 * });
 *
 * @param configOrKey - Either the field `key` as a string or a full field configuration object.
 * @param value - Optional initial value (only used if passing a string key).
 * @param required - Optional boolean indicating if the field is required (default: false). Only used if passing a string key.
 */
export class DateField extends InputField<string> {
  constructor(
    configOrKey: string | InputFieldConfigDerived,
    value?: string,
    required = false,
  ) {
    const config: InputFieldConfigDerived =
      typeof configOrKey === "string"
        ? { key: configOrKey, value, required }
        : configOrKey;

    super({
      ...config,
      key: config.key,
      type: "date",
    });
  }
}
