// import { Component } from '@angular/core';
// import { FormControl, ReactiveFormsModule } from '@angular/forms';

// import { DynamicFormElement, FormFieldEvent } from '@preforms/angular/core/decorators';
// import { BaseFieldComponent } from '@preforms/angular/core/fields';
// import { FieldEventData, FormFieldEventType } from '@preforms/ts';
// import { PasswordStrengthField } from './PasswordStrengthField';

// @DynamicFormElement({
//   component: 'password-strength',
// })
// @Component({
//   selector: 'app-pass-stenght-field',
//   template: `
//     <div class="small" style="margin-top: 0.4rem">
//       Strength:
//       <meter
//         [min]="field.min"
//         [max]="field.max"
//         [value]="score"
//         [low]="field.low"
//         [high]="field.high"
//         [optimum]="field.optimum"
//       ></meter>
//       <span class="hint"> {{ hint }}</span>
//     </div>
//   `,
//   imports: [ReactiveFormsModule],
// })
// export class PasswordStenghtFieldComponent extends BaseFieldComponent<
//   FormControl<number>,
//   PasswordStrengthField
// > {
//   hint = '—';

//   // computed score from control value
//   get score(): number {
//     return this.control.value ?? 0;
//   }

//   // Listen to password field changes
//   @FormFieldEvent({ type: FormFieldEventType.INPUT, field: 'password' })
//   handlePasswordChange(e: FieldEventData) {
//     const score = this.calculateStrength(e.value);
//     this.control.setValue(score, { emitEvent: false }); // reactive, no circular trigger
//     this.hint = this.getHint(score);
//   }

//   private calculateStrength(p: string): number {
//     let score = 0;
//     if (!p) return 0;
//     if (p.length >= 8) score++;
//     if (/[0-9]/.test(p)) score++;
//     if (/[A-Z]/.test(p)) score++;
//     if (/[^A-Za-z0-9]/.test(p)) score++;
//     return Math.min(score, 4);
//   }

//   private getHint(score: number): string {
//     const labels = ['Very weak', 'Weak', 'Okay', 'Good', 'Strong'];
//     return labels[score];
//   }
// }
