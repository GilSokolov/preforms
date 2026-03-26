import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BaseFieldComponent } from '@preforms/angular/core/fields';
import { FormField } from '@preforms/ts';
import { QuillModule } from 'ngx-quill';
import 'quill/dist/quill.snow.css';

export class EditorField extends FormField<string> {
  constructor(key: string) {
    super({ component: 'editor', key });
  }
}

@Component({
  selector: 'app-editor',
  imports: [QuillModule, ReactiveFormsModule],
  template: '<quill-editor [formControl]="control" />',
})
export class EditorComponent extends BaseFieldComponent<FormControl<string>, EditorField> {}
