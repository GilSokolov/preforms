import { FieldButtonComponent } from "./button-field.component";
import { CheckboxGroupFieldComponent } from "./checkbox-group-field.component";
import { FormDescriptionComponent } from "../../core/fields/decorative/form-description.component";
import { DetailsFieldComponent } from "./details.field.component";
import { DialogFieldComponent } from "./dialog.field.component";
import { FieldsetFieldComponent } from "./fieldset.field.component";
import { InputFieldComponent } from "./input-field.component";
import { RadioFieldComponent } from "./radio-field.component";
import { SelectFieldComponent } from "./select.field.component";
import { TextareaFieldComponent } from "./texarea.field.component";

import { FieldIconEmojiComponent } from "./field-icon-emoji.component";
import { CheckboxComponent } from "./checkbox-field.component";
import { NumberInputComponent } from "./number-field.component";
import { OutputFieldComponent } from "./output-field.component";

export const NATIVE_FORM_ELEMENTS = [
  CheckboxComponent,
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
