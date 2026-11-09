import { NgTemplateOutlet } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { DynamicFormElement } from "@preforms/angular/core";
import { BaseFieldComponent } from "@preforms/angular/core";
import { isOptionGroup, SelectField } from "@preforms/ts";
import { FormFieldComponent } from "./form-field.component";

/**
 * Angular picks a select's ControlValueAccessor from the template statically:
 * `select[multiple][formControl]` matches SelectMultipleControlValueAccessor,
 * which reads and writes arrays. A `[multiple]` binding counts as that
 * attribute being present, so a binding would hand every single select the
 * multiple accessor and turn its value into a one-element array. Hence the two
 * branches below: one carries a static `multiple`, the other carries none.
 */
@DynamicFormElement({ component: "select" })
@Component({
  selector: "preforms-select",
  template: `
    <preforms-form-field [field]="field" [control]="control" [error]="error">
      @if (field.multiple) {
        <select
          multiple
          [id]="field.id"
          [attr.name]="field.name"
          [attr.size]="field.size"
          [formControl]="control"
          class="preforms-select-field"
          [autofocus]="field.autofocus"
          [attr.autocomplete]="field.autocomplete"
        >
          <ng-container [ngTemplateOutlet]="options" />
        </select>
      } @else {
        <select
          [id]="field.id"
          [attr.name]="field.name"
          [attr.size]="field.size"
          [formControl]="control"
          class="preforms-select-field"
          [autofocus]="field.autofocus"
          [attr.autocomplete]="field.autocomplete"
        >
          <ng-container [ngTemplateOutlet]="options" />
        </select>
      }
    </preforms-form-field>

    <ng-template #options>
      @for (item of field.options; track $index) {
        @if (isOptionGroup(item)) {
          <optgroup [label]="item.label" [disabled]="item.disabled">
            @for (option of item.options; track $index) {
              <option [value]="option.value">{{ option.label }}</option>
            }
          </optgroup>
        } @else {
          <option [value]="item.value">{{ item.label }}</option>
        }
      }
    </ng-template>
  `,
  imports: [ReactiveFormsModule, FormFieldComponent, NgTemplateOutlet],
})
export class SelectFieldComponent extends BaseFieldComponent<
  FormControl,
  SelectField
> {
  isOptionGroup = isOptionGroup;
}
