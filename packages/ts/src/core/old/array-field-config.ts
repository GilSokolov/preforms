// import { ArrayAggregate } from "./interfaces/array-aggregate";
// import { FieldBaseConfig, FormFieldConfig } from "./field-config";

// export interface $FieldArrayConfig<T> extends Omit<
//   FieldBaseConfig<T[]>,
//   "component"
// > {
//   component?: string;
//   /**
//    * Template that defines the structure of each item in the array.
//    *
//    * Each FormField should correspond to a property of `T`
//    * and use the appropriate value type.
//    */

//   /**
//    * Aggregation/validation rules applied to the array.
//    * Examples: sum, count, avg, uniqueness constraints.
//    */
//   aggregates?: ArrayAggregate[];

//   /** Minimum number of items allowed in the array */
//   minItems?: number;

//   /** Maximum number of items allowed in the array */
//   maxItems?: number;

//   /**
//    * Property key of `T` used to enforce uniqueness
//    * across array items.
//    */
//   uniqueBy?: keyof T & string;

//   addButton?: boolean;
//   removeButton?: boolean;

//   fields: FormFieldConfig[];
// }
