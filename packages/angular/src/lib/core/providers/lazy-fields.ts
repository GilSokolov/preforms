import { DYNAMIC_FORM_LAZY_FIELDS } from '../tokens';
import { DynamicFormField } from '../models/lazy-field.model';

export function provideDynamicFormLazyFields(fields: DynamicFormField[]) {
  return {
    provide: DYNAMIC_FORM_LAZY_FIELDS,
    useValue: fields,
  };
}
