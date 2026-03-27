import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BaseFieldComponent } from '@preforms/angular/core/fields';
import { FormField } from '@preforms/ts';
import { QuillModule } from 'ngx-quill';

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
export class EditorComponent
  extends BaseFieldComponent<FormControl<string>, EditorField>
  implements OnInit
{
  ngOnInit() {
    const id = 'quill-theme';

    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = 'https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css';
      document.head.appendChild(link);
    }
  }
}
