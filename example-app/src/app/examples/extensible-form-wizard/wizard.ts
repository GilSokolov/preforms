import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';

import { WizardField } from './wizard.field';
import { DynamicFormElement } from '@preforms/angular/core/decorators';
import { BaseFieldComponent, DynamicFieldGroupComponent } from '@preforms/angular/core/fields';

@DynamicFormElement({
  component: 'wizard',
})
@Component({
  selector: 'app-wizard-field',
  template: ` <mat-stepper #stepper [linear]="true" orientation="vertical">
    @for (field of field.fields; track $index; let i = $index) {
      <mat-step [stepControl]="formGroup(field.key)" [label]="field.label">
        <preforms-dynamic-field-group [fields]="field.fields" [control]="formGroup(field.key)" />

        <div>
          @if (i) {
            <button matButton matStepperPrevious>Back</button>
          }
          <button matButton matStepperNext>Next</button>
        </div>
      </mat-step>
    }

    <mat-step>
      <ng-template matStepLabel>Done</ng-template>
      <p>You are now done.</p>
      <div>
        <button matButton matStepperPrevious>Back</button>
        <button matButton (click)="stepper.reset()">Reset</button>
      </div>
    </mat-step>
  </mat-stepper>`,
  imports: [MatButtonModule, MatStepperModule, DynamicFieldGroupComponent],
})
export class WizardFieldComponent extends BaseFieldComponent<FormGroup, WizardField> {
  formGroup(key: string) {
    return this.control.get(key) as FormGroup;
  }
}
