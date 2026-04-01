import { inject, Injectable } from "@angular/core";
import { FormArray, FormControl, FormGroup } from "@angular/forms";

import {
  FieldArray,
  FieldGroup,
  FieldWrapper,
  FormElement,
  FormField,
} from "@preforms/ts";
import { FormValidationService } from "./validation.service";
import { FormStateService } from "./state.service";

@Injectable({
  providedIn: "root",
})
export class FormFactoryService {
  private stateService = inject(FormStateService);
  private validationService = inject(FormValidationService);

  build(fields: FormElement[]) {
    const group: Record<string, FormArray | FormGroup | FormControl> = {};

    for (const field of fields) {
      if (field.kind === "decorative") {
        const control = new FormControl();
        if (field.key) {
          group[field.key] = control;
          this.stateService.set(field, control);
        } else {
          this.stateService.set(field, control);
        }

        continue;
      }

      if (field.kind === "button") {
        this.stateService.set(field, new FormControl());
        continue;
      }

      // handle container fields
      if (field.kind === "wrapper" && field.key === undefined) {
        const nested = this.build(field.fields);

        Object.assign(group, nested.controls);

        continue;
      }

      const control = this.getControl(field);

      if (field.disabled) {
        control.disable({ emitEvent: false });
      }

      if (field.key) {
        group[field.key] = control;
        this.stateService.set(field, control);
      }
    }
    return new FormGroup(group);
  }

  getControl(
    field: FormField | FieldGroup | FieldArray | FieldWrapper,
  ): FormArray<any> | FormGroup<any> | FormControl<unknown> {
    if (field.kind === "array") {
      return new FormArray(
        [] as any,
        this.validationService.getArrayValidators(field),
      );
    }

    if (field.kind === "group" || field.kind === "wrapper") {
      return this.build(field.fields);
    }

    return new FormControl(
      field.value,
      this.validationService.getValidators(field),
    );
  }
}
