import { FormField } from '@preforms/ts';

export class EditorField extends FormField<string> {
  constructor(key: string) {
    super({ component: 'editor', key });
  }
}
