import { AutocompleteFieldComponent } from "./autocomplete-field.component";
import { FieldButtonComponent } from "./button-field.component";
import { CheckboxGroupFieldComponent } from "./checkbox-group-field.component";
import { FormDescriptionComponent } from "@preforms/angular/core";
import { DetailsFieldComponent } from "./details.field.component";
import { DialogFieldComponent } from "./dialog.field.component";
import { FieldsetFieldComponent } from "./fieldset.field.component";
import { InputFieldComponent } from "./input-field.component";
import { RadioFieldComponent } from "./radio-field.component";
import { SelectFieldComponent } from "./select.field.component";
import { TextareaFieldComponent } from "./textarea.field.component";

import { FieldIconEmojiComponent } from "./field-icon-emoji.component";
import { CheckboxComponent } from "./checkbox-field.component";
import { NumberInputComponent } from "./number-field.component";
import { OutputFieldComponent } from "./output-field.component";

export const NATIVE_FORM_ELEMENTS = [
  CheckboxComponent,
  AutocompleteFieldComponent,
  InputFieldComponent,
  RadioFieldComponent,
  OutputFieldComponent,
  DialogFieldComponent,
  FieldButtonComponent,
  SelectFieldComponent,
  NumberInputComponent,
  DetailsFieldComponent,
  TextareaFieldComponent,
  FieldsetFieldComponent,
  FieldIconEmojiComponent,
  FormDescriptionComponent,
  CheckboxGroupFieldComponent,
];

export * from "./autocomplete-field.component";
export * from "./button-field.component";
export * from "./checkbox-field.component";
export * from "./checkbox-group-field.component";
export * from "./details.field.component";
export * from "./dialog.field.component";
export * from "./field-icon-emoji.component";
export * from "./fieldset.field.component";
export * from "./form-field.component";
export * from "./input-field.component";
export * from "./number-field.component";
export * from "./output-field.component";
export * from "./radio-field.component";
export * from "./select.field.component";
export * from "./textarea.field.component";
