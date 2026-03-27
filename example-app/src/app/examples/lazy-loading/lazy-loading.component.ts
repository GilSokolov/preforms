import { Component, EventEmitter, Output } from '@angular/core';
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';
import { SubmitButton } from '@preforms/ts';
import { EditorField } from './editor';

@Component({
  selector: 'app-lazy-loading',
  template: ` <preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" /> `,
  imports: [DynamicFormComponent],
})
export class LazyLoadingFieldsComponent {
  @Output() formChange = new EventEmitter<any>();
  fields = [new EditorField('blogContent'), new SubmitButton('Save')];
  logData(data: any) {
    this.formChange.emit(data);
  }
}
