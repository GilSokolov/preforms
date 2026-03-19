import { Component } from "@angular/core";
import { FormTitle, FormTitleLevel } from "@preforms/ts";
import { DynamicFormElement } from "../../decorators";
import { BaseFieldComponent } from "..";

@DynamicFormElement({ component: "form-title" })
@Component({
  selector: "preforms-form-title",
  template: `
    @switch (field.level) {
      @case (FormTitleLevel.H1) {
        <h1 [class]="field.className">{{ field.value }}</h1>
      }
      @case (FormTitleLevel.H2) {
        <h2 [class]="field.className">{{ field.value }}</h2>
      }
      @case (FormTitleLevel.H3) {
        <h3 [class]="field.className">{{ field.value }}</h3>
      }
      @case (FormTitleLevel.H4) {
        <h4 [class]="field.className">{{ field.value }}</h4>
      }
      @case (FormTitleLevel.H5) {
        <h5 [class]="field.className">{{ field.value }}</h5>
      }
      @case (FormTitleLevel.H6) {
        <h6 [class]="field.className">{{ field.value }}</h6>
      }
      @default {
        <span>{{ field.value }}</span>
      }
    }
  `,
})
export class FormTitleComponent extends BaseFieldComponent<never, FormTitle> {
  FormTitleLevel = FormTitleLevel;
}
