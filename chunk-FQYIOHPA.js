import"./chunk-7DXB7J77.js";var o=`import { Component } from '@angular/core';\r
import { FormGroup } from '@angular/forms';\r
import { MatButtonModule } from '@angular/material/button';\r
import { MatStepperModule } from '@angular/material/stepper';\r
\r
import { WizardField } from './wizard.field';\r
import { DynamicFormElement } from '@preforms/angular/core/decorators';\r
import { BaseFieldComponent, DynamicFieldGroupComponent } from '@preforms/angular/core/fields';\r
\r
@DynamicFormElement({\r
  component: 'wizard',\r
})\r
@Component({\r
  selector: 'app-wizard-field',\r
  template: \` <mat-stepper #stepper [linear]="true" orientation="vertical">\r
    @for (field of field.fields; track $index; let i = $index) {\r
      <mat-step [stepControl]="formGroup(field.key)" [label]="field.label">\r
        <preforms-dynamic-field-group [fields]="field.fields" [control]="formGroup(field.key)" />\r
\r
        <div>\r
          @if (i) {\r
            <button matButton matStepperPrevious>Back</button>\r
          }\r
          <button matButton matStepperNext>Next</button>\r
        </div>\r
      </mat-step>\r
    }\r
\r
    <mat-step>\r
      <ng-template matStepLabel>Done</ng-template>\r
      <p>You are now done.</p>\r
      <div>\r
        <button matButton matStepperPrevious>Back</button>\r
        <button matButton (click)="stepper.reset()">Reset</button>\r
      </div>\r
    </mat-step>\r
  </mat-stepper>\`,\r
  imports: [MatButtonModule, MatStepperModule, DynamicFieldGroupComponent],\r
})\r
export class WizardFieldComponent extends BaseFieldComponent<FormGroup, WizardField> {\r
  formGroup(key: string) {\r
    return this.control.get(key) as FormGroup;\r
  }\r
}\r
`;export{o as default};
