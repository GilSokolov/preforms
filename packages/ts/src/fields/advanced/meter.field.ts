import { FormField, FormFieldConfig } from "../../core";

/**
 * Configuration options for a `MeterField`.
 *
 * Extends `FieldConfigForDerived<number>` to inherit standard field properties
 * such as `key`, `label`, `value`, `required`, etc.
 *
 * Additional meter-specific properties:
 *
 * @property high - Upper bound of the meter (optional).
 * @property low - Lower bound of the meter (optional).
 * @property optimum - Ideal value within the range (optional).
 */
export interface MeterFieldConfig extends FormFieldConfig<string> {
  high?: number;
  low?: number;
  optimum?: number;
}

/**
 * A numeric meter field for displaying ranges, thresholds, or progress.
 *
 * Extends `FormField<number>` and enforces `component = "meter"`.
 *
 * @example
 * const cpuUsage = new MeterField({
 *   key: "cpu",
 *   label: "CPU Usage",
 *   value: 65,
 *   low: 0,
 *   high: 100,
 *   optimum: 50,
 * });
 */
export class MeterField extends FormField<string> {
  /** Upper bound of the meter (optional) */
  readonly high?: number;

  /** Lower bound of the meter (optional) */
  readonly low?: number;

  /** Ideal value within the range (optional) */
  readonly optimum?: number;

  /**
   * Constructs a new `MeterField`.
   *
   * @param config - Configuration options for the meter field.
   */
  constructor(config: MeterFieldConfig) {
    super({
      ...config,
      component: "meter",
    });

    this.high = config.high;
    this.low = config.low;
    this.optimum = config.optimum;
  }
}
