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

  /**
   * Drops a field from the index and from every listener bucket.
   *
   * Array rows re-register under new ids when their position changes, so this
   * has to prune by object identity: the ids a field was filed under are
   * already stale by the time it is re-registered.
   */
  unregister(field: FormElement) {
    const current = this.index.get(field.id);

    if (current?.field === field) this.index.delete(field.id);

    for (const [source, listeners] of this.listeners) {
      const remaining = listeners.filter((l) => l.field !== field);

      if (remaining.length === listeners.length) continue;

      if (remaining.length) this.listeners.set(source, remaining);
      else this.listeners.delete(source);
    }
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
      if (!trigger.source) continue;

      const _sources = Array.isArray(trigger.source)
        ? trigger.source
        : [trigger.source];

      for (const source of _sources) {
        if (source) sources.push(source);
      }
    }

    for (const source of sources) {
      const listeners = this.listeners.get(source) ?? [];
      this.listeners.set(source, [...listeners, { field, control }]);
    }
  }
}
