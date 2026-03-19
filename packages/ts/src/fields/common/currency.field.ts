import { FormFieldOption } from "../../core";
import ISO_CURRENCIES from "../../../../data/iso-currencies.json";
import { SelectField } from "../base/select.field";
import { TextFieldConfigDerived } from "../base";

export interface CurrencyOption {
  code: string; // ISO 4217 code (e.g. USD)
  name: string; // Currency name (e.g. US Dollar)
  symbol?: string; // Optional symbol ($, €, ¥)
}

export interface CurrencyFieldConfig extends TextFieldConfigDerived {
  /**
   * Optional list of currency options.
   * Defaults to full ISO 4217 list.
   */
  currencies?: CurrencyOption[];

  /**
   * Label format strategy.
   *
   * - "code" → USD
   * - "name" → US Dollar
   * - "code-name" → USD — US Dollar
   * - "symbol-code" → $ USD
   */
  labelFormat?: "code" | "name" | "code-name" | "symbol-code";
}

/**
 * CurrencyField
 *
 * A SelectField preconfigured with ISO 4217 currency codes.
 *
 * ## Value
 * The field value is always the ISO currency code (e.g. "USD").
 *
 * ## Default behavior
 * - Uses ISO 4217 currency list
 * - Displays "CODE — Name" labels
 *
 * ## Examples
 *
 * ### Basic usage
 * ```ts
 * new CurrencyField();
 * ```
 *
 * ### Required with default value
 * ```ts
 * new CurrencyField({
 *   required: true,
 *   value: "EUR",
 * });
 * ```
 *
 * ### Limited currency set
 * ```ts
 * new CurrencyField({
 *   currencies: [
 *     { code: "USD", name: "US Dollar" },
 *     { code: "EUR", name: "Euro" },
 *   ],
 * });
 * ```
 *
 * ### Custom label format
 * ```ts
 * new CurrencyField({
 *   labelFormat: "symbol-code",
 * });
 * ```
 */
export class CurrencyField extends SelectField<string> {
  constructor(config: CurrencyFieldConfig = {}) {
    const {
      currencies = ISO_CURRENCIES,
      labelFormat = "code-name",
      ...rest
    } = config;

    const options = currencies.map(
      (c) => new FormFieldOption(c.code, formatCurrencyLabel(c, labelFormat)),
    );

    super({
      key: "currency",
      label: "Currency",
      options,
      ...rest,
    });
  }
}

/** Internal label formatter */
function formatCurrencyLabel(
  currency: CurrencyOption,
  format: CurrencyFieldConfig["labelFormat"],
): string {
  switch (format) {
    case "code":
      return currency.code;
    case "name":
      return currency.name;
    case "symbol-code":
      return currency.symbol
        ? `${currency.symbol} ${currency.code}`
        : currency.code;
    case "code-name":
    default:
      return `${currency.code} — ${currency.name}`;
  }
}
