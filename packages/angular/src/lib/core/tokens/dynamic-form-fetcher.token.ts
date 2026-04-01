import { InjectionToken } from "@angular/core";
import { FormElement } from "@preforms/ts";
import { Observable } from "rxjs";

export type DynamicFormFetcher = (
  url: string,
  params?: Record<string, any>,
) => Observable<Partial<FormElement> | Partial<FormElement>[]>;

export const DYNAMIC_FORM_FETCHER = new InjectionToken<DynamicFormFetcher>(
  "DYNAMIC_FORM_FETCHER",
);
