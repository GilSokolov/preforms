export interface DynamicFormSubmitEvent<T = unknown> {
  data: FormData;
  raw: T;
  action?: string | null;
  method?: string | null;
}
