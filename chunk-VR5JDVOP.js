import"./chunk-7DXB7J77.js";var r=`import { Component } from '@angular/core';\r
import { FormControl, ReactiveFormsModule } from '@angular/forms';\r
\r
import { DynamicFormElement, FormFieldEvent } from '@preforms/angular/core/decorators';\r
import { BaseFieldComponent } from '@preforms/angular/core/fields';\r
import { FieldEventData, FormFieldEventType } from '@preforms/ts';\r
import { PasswordStrengthField } from './PasswordStrengthField';\r
\r
@DynamicFormElement({\r
  component: 'password-strength',\r
})\r
@Component({\r
  selector: 'app-pass-stenght-field',\r
  template: \`\r
    <div class="small" style="margin-top: 0.4rem">\r
      Strength:\r
      <meter\r
        [min]="field.min"\r
        [max]="field.max"\r
        [value]="score"\r
        [low]="field.low"\r
        [high]="field.high"\r
        [optimum]="field.optimum"\r
      ></meter>\r
      <span class="hint"> {{ hint }}</span>\r
    </div>\r
  \`,\r
  imports: [ReactiveFormsModule],\r
})\r
export class PasswordStenghtFieldComponent extends BaseFieldComponent<\r
  FormControl<number>,\r
  PasswordStrengthField\r
> {\r
  hint = '\u2014';\r
\r
  // computed score from control value\r
  get score(): number {\r
    return this.control.value ?? 0;\r
  }\r
\r
  // Listen to password field changes\r
  @FormFieldEvent({ type: FormFieldEventType.INPUT, field: 'password' })\r
  handlePasswordChange(e: FieldEventData) {\r
    const score = this.calculateStrength(e.value);\r
    this.control.setValue(score, { emitEvent: false }); // reactive, no circular trigger\r
    this.hint = this.getHint(score);\r
  }\r
\r
  private calculateStrength(p: string): number {\r
    let score = 0;\r
    if (!p) return 0;\r
    if (p.length >= 8) score++;\r
    if (/[0-9]/.test(p)) score++;\r
    if (/[A-Z]/.test(p)) score++;\r
    if (/[^A-Za-z0-9]/.test(p)) score++;\r
    return Math.min(score, 4);\r
  }\r
\r
  private getHint(score: number): string {\r
    const labels = ['Very weak', 'Weak', 'Okay', 'Good', 'Strong'];\r
    return labels[score];\r
  }\r
}\r
`;export{r as default};
