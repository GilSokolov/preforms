import { FormField } from '@preforms/ts';

export class EditorField extends FormField<string> {
  constructor(
    key = 'data',
    public language?: string,
  ) {
    super({ component: 'editor', key });
  }
}
