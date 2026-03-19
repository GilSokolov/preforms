// import { FieldConfigForDerived, FormField, FormFieldConfig } from "..";

// /**
//  * Represents a logical grouping of multiple fields within a form.
//  *
//  * Extends `FormField<T>` to provide a container for nested fields.
//  * Automatically sets `component` to `"form-group"`.
//  *
//  * @example
//  * const addressGroup = new FormFieldGroup({
//  *   fields: [
//  *     new StreetField(),
//  *     new CityField(),
//  *     new StateField(),
//  *     new PostalCodeField(),
//  *   ],
//  *   label: "Address",
//  * });
//  *
//  * @typeparam T - The shape of the grouped value object.
//  */
// export class $FormFieldGroup<T = unknown> extends FormField<T> {
//   declare fields: FormField<T[keyof T]>[];
//   /**
//    * Constructs a new `FormFieldGroup`.
//    *
//    * @param fields - Array of field configurations to include in the group.
//    * @param config - Optional configuration object for field group properties.
//    * @param key - Optional key for the group in the form model.
//    */
//   constructor(
//     fields: FormFieldConfig[],
//     config: FieldConfigForDerived<T> = {},
//     key?: string,
//   ) {
//     super({
//       ...config,
//       fields,
//       component: "form-group",
//       key: key || config.key,
//       kind: "group",
//     });
//   }
// }
