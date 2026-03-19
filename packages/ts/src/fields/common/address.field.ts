import { FieldGroup, FieldGroupConfig, FormField } from "../../core";
import { Country } from "./country.field";

import { Optional } from "../../core/interfaces/optional";
import { City } from "./city.field";
import { PostalCode } from "./postal-code.field";
import { State } from "./state.field";
import { Street } from "./street.field";

export interface AddressValue {
  street?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
}

/**
 * Represents an Address field composed of nested subfields.
 *
 * Extends `FormFieldGroup<AddressValue>` to manage a structured set of fields:
 * - Street
 * - City
 * - State
 * - Postal Code
 * - Country
 *
 * Provides a flexible constructor that accepts either:
 * 1. A raw `AddressValue` object.
 * 2. A full `FieldConfigForDerived<AddressValue>` configuration object.
 *
 * Default `key` is `"address"` and `required` defaults to `true` when using a raw value.
 *
 * @example
 * // Quick usage with raw values
 * const addressField1 = new Address({
 *   street: "123 Main St",
 *   city: "New York",
 *   state: "NY",
 *   postalCode: "10001",
 *   country: "USA",
 * });
 *
 * // Full configuration usage with custom triggers or labels
 * const addressField2 = new Address({
 *   value: {
 *     street: "123 Main St",
 *     city: "New York",
 *   },
 *   required: false,
 *   fields: [
 *     new Street("123 Main St"),
 *     new City("New York"),
 *   ],
 * });
 *
 * @param configOrValue - Either raw `AddressValue` or a `FieldConfigForDerived<AddressValue>`.
 * @param required - Whether the address field is required (default: true when using raw value).
 * @param key - Optional key for the form model (default: `"address"`).
 */
export class Address extends FieldGroup<AddressValue> {
  constructor(
    configOrValue?:
      | Optional<FieldGroupConfig<AddressValue>, "fields">
      | AddressValue,
    required = true,
    key = "address",
  ) {
    // Normalize config: raw value object → FieldConfigForDerived
    const config: Optional<
      FieldGroupConfig<AddressValue>,
      "fields"
    > = (configOrValue && "street" in configOrValue) ||
    (configOrValue && "city" in configOrValue)
      ? (configOrValue as FieldGroupConfig<AddressValue>)
      : {
          value: configOrValue as AddressValue,
          required,
          key,
        };
    // Define default nested subfields with optional chaining for safety
    const fields = (config.fields as FormField[]) ?? [
      new Street(config.value?.street),
      new City(config.value?.city),
      new State(config.value?.state),
      new PostalCode(config.value?.postalCode),
      new Country(config.value?.country),
    ];

    super({ fields, ...config, key });
  }
}
