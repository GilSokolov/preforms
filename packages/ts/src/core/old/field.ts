// import { toTitleCase } from "../../utils";
// import { resolveFieldId } from "../../utils/resolve-field-id";
// import { FieldKind, FormFieldConfig } from "./field-config";
// import { FormFieldOption } from "./field-option";
// import { FormFieldTrigger } from "../interfaces/triggers";

// export type $FieldUIState = {
//   hidden?: boolean;
//   disabled?: boolean;
//   required?: boolean;
//   multiple?: boolean;
//   placeholder?: string;
//   description?: string;
//   hint?: string;
//   className?: string;
//   value?: unknown;
//   autofocus?: boolean;
//   checked?: boolean;
//   readonly?: boolean;
// };

// export class $FormField<T = unknown> {
//   /** Immutable identity */
//   readonly id: string;
//   readonly key?: string;
//   readonly kind: FieldKind;
//   readonly component: string;

//   /** Runtime state */
//   parent?: string;
//   type?: string;
//   name?: string;
//   label?: string;
//   value?: T;
//   options?: FormFieldOption<T>[];
//   fields?: FormField[];
//   triggers?: FormFieldTrigger<T>[];
//   hidden?: boolean;
//   disabled?: boolean;
//   required?: boolean;
//   multiple?: boolean;
//   placeholder?: string;
//   description?: string;
//   hint?: string;
//   className?: string;
//   readonly?: boolean;
//   cols?: number;
//   wrap?: "hard" | "soft";
//   spellcheck?: boolean;
//   autocapitalize?: "on" | "off" | "none" | "words" | "characters";

//   /** Other optional props */

//   order?: number;
//   min?: number;
//   max?: number;
//   step?: number;

//   maxLength?: number;
//   minLength?: number;
//   pattern?: RegExp;
//   rows?: number;
//   autocomplete?: string;
//   aria?: Record<string, string | number | boolean>;
//   data?: Record<string, string | number | boolean>;
//   tabIndex?: number;
//   autofocus?: boolean;
//   size?: number;
//   checked?: boolean;
//   form?: string;

//   constructor(config: FormFieldConfig<T> & { parent?: string }) {
//     Object.assign(this, config);

//     this.parent = config.parent;

//     this.component = config.component;

//     this.id = resolveFieldId(config);

//     this.key = config.key;

//     this.kind = config.kind || "field";

//     this.name = config.name || this.key;

//     this.label = config.label || toTitleCase(this.key);

//     this.className = config.className || this.component;

//     // Options normalization
//     if (config.options) {
//       this.options = config.options.map((opt) => {
//         if (opt instanceof FormFieldOption) return opt;

//         return new FormFieldOption(opt);
//       });
//     }

//     // Pattern normalization
//     if (config.pattern) {
//       this.pattern =
//         config.pattern instanceof RegExp
//           ? config.pattern
//           : new RegExp(config.pattern);
//     }

//     // Subfields
//     if (config.fields) {
//       this.fields = config.fields.map(
//         (f) =>
//           new FormField({
//             ...f,
//             id: f.id === f.key ? undefined : f.id,
//             parent: [this.parent, this.key].filter(Boolean).join("."),
//           }),
//       );
//     }

//     this.triggers = config.triggers;
//   }
// }
