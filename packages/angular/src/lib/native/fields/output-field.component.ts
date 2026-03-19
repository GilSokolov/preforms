import { Component, inject, OnInit } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

import { FieldEventData, FormFieldEventType, OutputField } from "@preforms/ts";
import { DynamicFormElement, FormFieldEvent } from "../../core/decorators";
import { BaseFieldComponent } from "../../core/fields";
import { FormService } from "../../core/services";

function matchesFieldPattern(pattern: string, id: string): boolean {
  // exact match
  if (pattern === id) return true;

  // wildcard array support: price[*]
  if (pattern.includes("[*]")) {
    const base = pattern.replace("[*]", "");

    return id.startsWith(base + "[");
  }

  return false;
}

@DynamicFormElement({ component: "output" })
@Component({
  selector: "preforms-output-field",
  template: `
    <label>
      {{ field.label }}
      <output [for]="field.for.join(',')">{{ output }}</output>
    </label>
  `,
  imports: [ReactiveFormsModule],
})
export class OutputFieldComponent
  extends BaseFieldComponent<FormControl, OutputField>
  implements OnInit
{
  output: unknown = null;

  private readonly formService = inject(FormService);

  ngOnInit() {
    this.calculate();
  }

  @FormFieldEvent({ type: FormFieldEventType.INPUT, field: "*" })
  onInput(e: FieldEventData): void {
    // ignore if not related to this output

    const shouldReact = this.field.for.some((pattern) =>
      matchesFieldPattern(pattern, e.id),
    );

    if (!shouldReact) return;

    this.calculate();
  }

  private calculate() {
    const formValue = this.formService.getValues();

    if (!this.field.calculation) return;

    try {
      // create function with keys as arguments
      const fn = new Function(
        "data", // single argument
        `with(data){ return (${this.field.calculation}); }`,
      );

      // call function passing values
      const result = fn(formValue);

      // update control and reactive output
      this.control.setValue(result, { emitEvent: false });
      this.output = result;
    } catch (err) {
      console.error("Error evaluating output calculation", err);
      this.output = null;
    }
  }
}
