// import { FormField, FormFieldConfig } from "..";

// /**
//  * Configuration object for {@link FieldWrapper}.
//  *
//  * Extends {@link FormFieldConfig} while enforcing:
//  *
//  * - `fields` is required
//  * - `kind` cannot be provided (it is internally fixed to `"wrapper"`)
//  */
// type WrapperConfig = Omit<FormFieldConfig, "fields" | "kind"> & {
//   /**
//    * Child fields contained inside this wrapper.
//    *
//    * This property is required and guarantees that a `FieldWrapper`
//    * always contains one or more nested {@link FormField} instances.
//    */
//   fields: FormField[];
// };

// /**
//  * A composite form field that groups multiple child fields under
//  * a single logical wrapper.
//  *
//  * Unlike {@link FormField}, this class guarantees that:
//  *
//  * - `fields` is always defined
//  * - `kind` is always `"wrapper"`
//  *
//  * This makes it safe to treat instances of `FieldWrapper`
//  * as structural/container fields in rendering and processing logic.
//  *
//  * @example
//  * ```ts
//  * const wrapper = new FieldWrapper({
//  *   component: "form-group",
//  *   fields: [
//  *     new FormField({ component: "input", key: "firstName" }),
//  *     new FormField({ component: "input", key: "lastName" }),
//  *   ],
//  * });
//  *
//  * wrapper.fields; // FormField[] (always defined)
//  * wrapper.kind;   // "wrapper"
//  * ```
//  */
// export class $FieldWrapper extends FormField {
//   // /**
//   //  * Child fields contained within this wrapper.
//   //  *
//   //  * This property is guaranteed to exist.
//   //  */
//   override readonly fields: FormField[];

//   /**
//    * Creates a new `FieldWrapper`.
//    *
//    * @param config - Wrapper configuration.
//    * - `fields` is required.
//    * - `kind` is automatically set to `"wrapper"` and cannot be overridden.
//    */
//   constructor(config: WrapperConfig) {
//     super({
//       ...config,
//       kind: "wrapper",
//     });

//     this.fields = config.fields;
//   }
// }

// new FieldWrapper({ fields: [], component: "" }).fields;
