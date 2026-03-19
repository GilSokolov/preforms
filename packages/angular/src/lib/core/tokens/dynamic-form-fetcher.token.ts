import { InjectionToken } from "@angular/core";
import { FieldArray, FormField } from "@preforms/ts";
import { Observable } from "rxjs";

export type DynamicFormFetcher = (
  url: string,
  // params: Record<string, any>,
) => Observable<(FormField | FieldArray)[]>;

export const DYNAMIC_FORM_FETCHER = new InjectionToken<DynamicFormFetcher>(
  "DYNAMIC_FORM_FETCHER",
);
