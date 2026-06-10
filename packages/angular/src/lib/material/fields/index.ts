import { AutocompleteFieldComponent } from "./autocomplete-field.component";
import { FieldButtonComponent } from "./button-field.component";
import { CheckboxFieldComponent } from "./checkbox-field.component";
import { DateRangeFieldComponent } from "./date-range-field.component";
import { DatepickerFieldComponent } from "./datepicker-field.component";
import { DetailsFieldComponent } from "./details-field.component";
import { DialogFieldComponent } from "./dialog.field.component";
import { MatFieldIconComponent } from "./field-icon.component";
import { MatInputFieldComponent } from "./input-field.component";
import { SelectFieldComponent } from "./select-field.component";
import { TextareaFieldComponent } from "./textarea-field.component";
import { ToggleFieldComponent } from "./toggle-field.component";

export const MATERIAL_FORM_ELEMENTS = [
  DialogFieldComponent,
  FieldButtonComponent,
  ToggleFieldComponent,
  SelectFieldComponent,
  DetailsFieldComponent,
  MatFieldIconComponent,
  TextareaFieldComponent,
  CheckboxFieldComponent,
  MatInputFieldComponent,
  DateRangeFieldComponent,
  DatepickerFieldComponent,
  AutocompleteFieldComponent,
];

export * from "./autocomplete-field.component";
export * from "./button-field.component";
export * from "./checkbox-field.component";
export * from "./checkbox-group-field.component";
export * from "./datepicker-field.component";
export * from "./date-range-field.component";
export * from "./default-field.component";
export * from "./details-field.component";
export * from "./dialog.field.component";
export * from "./field-icon.component";
export * from "./fieldset.field.component";
export * from "./input-field.component";
export * from "./number-field.component";
export * from "./radio-field.component";
export * from "./select-field.component";
export * from "./textarea-field.component";
export * from "./toggle-field.component";
