import { FormField, FormFieldConfig } from "../../core";
/**
 * Configuration options for an `OutputField`.
 *
 * Extends `FieldConfigForDerived<string>` to inherit standard field properties
 * such as `key`, `label`, `value`, `required`, etc.
 *
 * Additional output-specific properties:
 *
 * @property for - Array of field keys that this output depends on.
 *                   Changes in any of these fields trigger a re-evaluation.
 * @property calculation - The expression or formula used to compute the output value.
 */
export interface OutputFieldConfig extends Omit<
  FormFieldConfig<string>,
  "component"
> {
  for: string[];
  calculation: string;
}

/**
 * A read-only field whose value is calculated from other fields.
 *
 * Extends `FormField<string>` and enforces `component = "output"`.
 * Automatically reacts to changes in dependent fields and updates the value.
 *
 * @example
 * const totalPrice = new OutputField({
 *   key: "totalPrice",
 *   label: "Total Price",
 *   for: ["unitPrice", "quantity"],
 *   calculation: "unitPrice * quantity",
 * });
 *
 * @remarks
 * The `calculation` logic should be evaluated in the renderer or form controller.
 * This class only stores the configuration; it does not execute the calculation itself.
 */
export class OutputField extends FormField<string> {
  /** Keys of the fields this output depends on */
  readonly for: string[];

  /** The calculation or expression used to derive the value */
  readonly calculation: string;

  /**
   * Constructs a new `OutputField`.
   *
   * @param config - Configuration options for the output field.
   */
  constructor(config: OutputFieldConfig) {
    super({
      ...config,
      component: "output",
    });

    this.for = config.for;
    this.calculation = config.calculation;
  }
}
