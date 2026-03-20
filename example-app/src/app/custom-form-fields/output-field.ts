import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormElement, FormFieldEvent } from '@preforms/angular/core/decorators';
import { BaseFieldComponent } from '@preforms/angular/core/fields';
import { FormService } from '@preforms/angular/core/services';
import { FieldEventData, FormFieldEventType, OutputField } from '@preforms/ts';

@DynamicFormElement({ component: 'output' })
@Component({
  selector: 'app-output-field',
  template: `
    <div class="small">
      <label>
        {{ field.label }}
        <output [for]="field.for.join(',')">{{ score }}</output>
      </label>
      <span class="form-field-hint">{{ field.hint }}</span>
    </div>
  `,
  imports: [ReactiveFormsModule],
})
export class OutputFieldComponent
  extends BaseFieldComponent<FormControl, OutputField>
  implements OnInit
{
  score: unknown = null;

  private readonly formService = inject(FormService);

  ngOnInit() {
    this.calculate();
  }

  @FormFieldEvent({ type: FormFieldEventType.INPUT, field: '*' })
  onInput(e: FieldEventData): void {
    // ignore if not related to this output

    if (this.field.for && !this.field.for.includes(e.id)) return;

    this.calculate();
  }

  private calculate() {
    const formValue = this.formService.getValues();

    if (!this.field.calculation) return;

    try {
      // create function with keys as arguments
      const fn = new Function(
        'data', // single argument
        `with(data){ return ${this.field.calculation}; }`,
      );

      // call function passing values
      const result = fn(formValue);

      // update control and reactive score
      this.control.setValue(result, { emitEvent: false });
      this.score = result;
    } catch (err) {
      console.error('Error evaluating output calculation', err);
      this.score = null;
    }
  }
}
