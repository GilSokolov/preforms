import { RadioField, TextFieldConfigDerived } from "../base";

/**
 * Gender field.
 *
 * Pre-configured RadioField for user's gender.
 * Default options: "male", "female".
 *
 * @example
 * const gender = new Gender("male");
 * console.log(gender.value); // "male"
 */
export class Gender extends RadioField {
  static OPTIONS = ["male", "female"];

  constructor(
    configOrValue: string | TextFieldConfigDerived = "",
    required = false,
  ) {
    const config: TextFieldConfigDerived =
      typeof configOrValue === "string"
        ? { value: configOrValue, required }
        : configOrValue;

    super({
      ...config,
      key: "gender",
      options: Gender.OPTIONS,
      aria: { "aria-label": "Gender" },
    });
  }
}
