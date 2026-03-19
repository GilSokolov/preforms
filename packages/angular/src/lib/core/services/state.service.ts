import { AbstractControl } from "@angular/forms";

import { Injectable } from "@angular/core";
import { FormElement, FormFieldTrigger } from "@preforms/ts";

export interface FieldLookupResult {
  field: FormElement;
  control: AbstractControl;
}

@Injectable()
export class FormStateService {
  private index = new Map<string, FieldLookupResult>();
  private listeners = new Map<string, FieldLookupResult[]>();

  setValue(id: string, value: unknown) {
    const res = this.get(id);

    res?.control?.setValue(value);
  }

  patchValue(id: string, value: unknown) {
    const res = this.get(id);

    res?.control?.patchValue(value);
  }

  set(field: FormElement, control: AbstractControl) {
    this.index.set(field.id, { field, control });
    this.setListeners(field, control);
  }

  get(id: string) {
    return this.index.get(id);
  }

  getListeners(id: string) {
    return this.listeners.get(id);
  }

  clear() {
    this.index.clear();
    this.listeners.clear();
  }

  private setListeners(field: FormElement, control: AbstractControl): void {
    if (!field.triggers?.length) return;

    const sources: string[] = [];

    for (const trigger of field.triggers) {
      if (!trigger.sourceField) continue;

      const sourceFields = Array.isArray(trigger.sourceField)
        ? trigger.sourceField
        : [trigger.sourceField];

      for (const source of sourceFields) {
        if (source) sources.push(source);
      }
    }

    for (const source of sources) {
      const listeners = this.listeners.get(source) ?? [];
      this.listeners.set(source, [...listeners, { field, control }]);
    }
  }
}
