import { FieldArray } from "../models/field-array";
import { FieldButton } from "../models/field-button";

import { FieldGroup } from "../models/field-group";
import { FormField } from "../models/form-field";
import { FieldWrapper } from "../models/field-wrapper";
import { FieldArrayConfig } from "./field-array-config";
import { AbstractFormElementConfig } from "./base-field-config";
import { FieldGroupConfig } from "./field-group-config";
import { FieldDecorative } from "../models";
import { FormFieldConfig } from "./form-field-config";

export type FormElement<T = any> =
  | FormField<T>
  | FieldGroup<T>
  | FieldArray<T>
  | FieldButton<T>
  | FieldWrapper
  | FieldDecorative;

export type FormElementConfig<T = any> = AbstractFormElementConfig<T> &
  FormFieldConfig<T> &
  FieldGroupConfig<T> &
  FieldArrayConfig<T>;
