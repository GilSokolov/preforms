import { InjectionToken } from "@angular/core";
import { DynamicFormField } from "../models";

export const DYNAMIC_FORM_LAZY_FIELDS = new InjectionToken<DynamicFormField[]>(
  "DYNAMIC_FORM_LAZY_FIELDS",
);
