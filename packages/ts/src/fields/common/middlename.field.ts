import { TextField, TextFieldConfigDerived } from "../base";

/**
 * Middle name field.
 *
 * Pre-configured TextField for a user's middle name.
 *
 * @example
 * const middleName = new MiddleName("Alan");
 * console.log(middleName.value); // "Alan"
 */
export class MiddleName extends TextField {
  constructor(
    configOrValue: string | TextFieldConfigDerived = "",
    required = false,
  ) {
    const config: TextFieldConfigDerived =
      typeof configOrValue === "string"
        ? { value: configOrValue, required }
        : configOrValue;

    super({
      key: "middleName",
      aria: { "aria-label": "Middle Name" },
      ...config,
    });
  }
}
