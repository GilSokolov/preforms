// import {
//   ArrayAggregate,
//   FieldArrayConfig,
//   FormField,
//   FormFieldConfig,
// } from "..";

// /**
//  * Represents an array field in a form.
//  *
//  * Each item in the array follows the structure defined in the `template`.
//  * Supports validation constraints (`minItems`, `maxItems`) and aggregate actions
//  * such as uniqueness checks.
//  *
//  * @template T - Type of each item in the array.
//  */
// export class $FieldArray<T = unknown> extends FormField<T[]> {
//   declare fields: FormField<T[keyof T]>[];
//   declare key: string;
//   /**
//    * Template defining the structure of each array item.
//    *
//    * Each property of `T` should have a corresponding `FormField` with the matching type.
//    * Example:
//    * ```ts
//    * type User = { name: string; age: number };
//    * template = [
//    *   new FormField<string>({ key: "name", component: "input" }),
//    *   new FormField<number>({ key: "age", component: "input" }),
//    * ];
//    * ```
//    */
//   /** Optional aggregation rules (e.g., uniqueness checks) */

//   aggregates?: ArrayAggregate[];

//   /** Minimum number of items allowed in the array */
//   minItems?: number;

//   /** Maximum number of items allowed in the array */
//   maxItems?: number;

//   addButton?: boolean;

//   removeButton?: boolean;

//   /**
//    * Constructs an FieldArray.
//    *
//    * @param config - Configuration object
//    * @param config.aggregates - Optional aggregation rules
//    * @param config.minItems - Minimum number of items allowed
//    * @param config.maxItems - Maximum number of items allowed
//    * @param config.uniqueBy - Optional field key to enforce uniqueness
//    * @param config.value - Initial array value
//    */
//   constructor(config: FieldArrayConfig<T>) {
//     super({ component: "array", ...config, kind: "array" });
//     this.aggregates = config.aggregates || [];
//     this.minItems = config.minItems;
//     this.maxItems = config.maxItems;
//     this.addButton = config.addButton;
//     this.removeButton = config.removeButton;

//     this.value = config.value || [];

//     if (config.uniqueBy) {
//       this.aggregates.push({
//         field: config.uniqueBy,
//         action: "unique",
//       });
//     }
//   }
// }
