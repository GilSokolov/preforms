import { Component } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { DynamicFormElement, BaseFieldComponent } from "@preforms/angular/core";
import { MatRadioModule } from "@angular/material/radio";
import { RadioField } from "@preforms/ts";

@DynamicFormElement({ component: "radio" })
@Component({
  selector: "preforms-mat-radio",
  template: `
    <mat-radio-group [formControl]="control">
      @for (option of field.options; track $index) {
        <mat-radio-button [value]="option.value">
          {{ option.label }}
        </mat-radio-button>
      }
    </mat-radio-group>
  `,
  imports: [ReactiveFormsModule, MatRadioModule],
})
export class RadioFieldComponent extends BaseFieldComponent<
  FormControl,
  RadioField
> {}
