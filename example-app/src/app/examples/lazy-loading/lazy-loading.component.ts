import { Component, EventEmitter, Output } from '@angular/core';
import { Preforms } from '@preforms/angular/core';
import { SubmitButton } from '@preforms/ts';
import { EditorField } from './editor';

@Component({
  selector: 'app-lazy-loading',
  template: ` <preforms (submittedData)="logData($event)" [fields]="fields" /> `,
  imports: [Preforms],
})
export class LazyLoadingFieldsComponent {
  @Output() formChange = new EventEmitter<any>();
  fields = [new EditorField('blogContent'), new SubmitButton('Save')];
  logData(data: any) {
    this.formChange.emit(data);
  }
}
