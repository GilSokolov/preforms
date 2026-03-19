import { SelectField } from "../base/select.field";

import COUNTRY_LIST from "../../../../data/countries.json";
import { TextFieldConfigDerived } from "../base";

/**
 * A pre-configured select field for choosing a country.
 *
 * Extends `SelectField<string>` and enforces:
 * - `key = "country"`
 * - Options defaulting to a predefined `COUNTRY_LIST`
 *
 * @example
 * // Using a default value
 * const countryField = new Country("USA", true);
 *
 * // Using a full configuration
 * const countryFieldConfig = new Country({
 *   value: "Canada",
 *   label: "Select Country",
 *   required: true,
 *   options: ["Canada", "USA", "Mexico"],
 * });
 *
 * @remarks
 * The field value is a string representing the selected country code or name.
 * You can override the default `COUNTRY_LIST` by providing your own `options`.
 */
export class Country extends SelectField<string> {
  constructor(
    configOrValue: string | TextFieldConfigDerived = "",
    required = true,
  ) {
    const config: TextFieldConfigDerived =
      typeof configOrValue === "string"
        ? { value: configOrValue, required }
        : configOrValue;

    super({
      ...config,
      key: "country",
      options: config.options ?? COUNTRY_LIST,
    });
  }
}
