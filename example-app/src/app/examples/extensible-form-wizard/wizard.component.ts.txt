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
  templateUrl: './wizard.component.html',
  imports: [MatButtonModule, MatStepperModule, DynamicFieldGroupComponent],
})
export class WizardFieldComponent extends BaseFieldComponent<FormGroup, WizardField> {
  formGroup(key: string) {
    return this.control.get(key) as FormGroup;
  }
}
