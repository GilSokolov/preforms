import {
  ComparisonOperator,
  FormFieldEventType,
  FieldWrapper,
  FieldWrapperConfig,
} from "../../core";
import { DateField } from "../base";

export interface DateRangeValue {
  start?: Date;
  end?: Date;
}

export interface DateRangeFieldConfig extends Omit<
  FieldWrapperConfig<DateRangeValue>,
  "fields"
> {
  /**
   * Optional override for internal fields.
   * Must contain only DateField instances.
   */
  fields?: [DateField, DateField];
} //

/**
 * DateRangeField represents a semantic date range composed of two DateField children.
 *
 * ## Default fields
 * - `start` → Start date
 * - `end` → End date (automatically validated to be greater than start)
 *
 * Resulting value shape:
 * ```ts
 * {
 *   start?: Date;
 *   end?: Date;
 * }
 * ```
 *
 * ## Key behavior
 * - `config.key` provided → value nested under that key in parent form
 * - `config.key` omitted → value attaches directly to parent form value
 *
 * new DateRangeField({ key: "vacation" });
 *  // value in parent form: { vacation: { start: "...", end: "..." } }
 *
 * ## Field overrides
 * You can override the default DateFields by providing `config.fields`.
 * All custom fields **must be instances of DateField**.
 *
 * ## Example
 * ```ts
 * new DateRangeField({
 *   key: "vacation",
 *   required: true,
 *   fields: [
 *     new DateField({ key: "from" }),
 *     new DateField({ key: "to" }),
 *   ],
 * });
 * ```
 * value in parent form: { vacation: { from: "...", to: "..." } }
 */

export class DateRangeField<T = unknown> extends FieldWrapper<T> {
  override fields: [DateField, DateField];
  constructor(config?: DateRangeFieldConfig) {
    const dateRangeValue = config?.value;
    const fields = config?.fields ?? [
      new DateField({
        key: "start",
        label: "Start date",
        value: dateRangeValue?.start,
        required: config?.required,
      }),
      new DateField({
        key: "end",
        label: "End date",
        value: dateRangeValue?.end,
        required: config?.required,
        triggers: [
          {
            on: FormFieldEventType.BLUR,
            action: "validate",
            validation: {
              compareTo: "start",
              operator: ComparisonOperator.GT,
              message: "End date must be after start date",
            },
          },
        ],
      }),
    ];

    super({ ...config, fields, component: "date-range" } as any);

    this.fields = fields;
  }
}
