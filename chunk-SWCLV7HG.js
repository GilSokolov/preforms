import"./chunk-7DXB7J77.js";var i=`import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import {\r
  SelectField,\r
  FormDivider,\r
  FormTitle,\r
  FormTitleLevel,\r
  FormDescription,\r
  SubmitButton,\r
} from '@preforms/ts';\r
\r
@Component({\r
  selector: 'app-room-selection',\r
  template: \`<preforms-dynamic-form (submittedData)="logData($event)" [fields]="fields" />\`,\r
  imports: [DynamicFormComponent],\r
  encapsulation: ViewEncapsulation.None,\r
  providers: [NATIVE_FORM_ELEMENTS],\r
})\r
export class RoomSelectionComponent {\r
  @Output() formChange = new EventEmitter<any>();\r
\r
  fields = [\r
    new SelectField({\r
      key: 'room',\r
      value: 'king',\r
      label: 'Choose a room',\r
      options: ['king', 'queen', 'junior'],\r
      required: true,\r
      triggers: [\r
        {\r
          on: 'change',\r
          action: 'update_state',\r
          applyState: { hidden: true },\r
          targetField: [\r
            'king-title',\r
            'queen-title',\r
            'junior-title',\r
            'king-description',\r
            'queen-description',\r
            'junior-description',\r
          ],\r
        },\r
        {\r
          on: 'change',\r
          action: 'update_state',\r
          applyState: { hidden: false },\r
          targetField: ['$value-title', '$value-description'],\r
        },\r
      ],\r
    }),\r
\r
    new FormDivider({ label: 'Room Details' }),\r
\r
    new FormTitle({ value: 'King Room', id: 'king-title' }, FormTitleLevel.H2),\r
    new FormTitle({ value: 'Queen Room', hidden: true, id: 'queen-title' }, FormTitleLevel.H2),\r
    new FormTitle({ value: 'Junior Room', hidden: true, id: 'junior-title' }, FormTitleLevel.H2),\r
\r
    new FormDescription({\r
      value: \`A majestic retreat designed for travelers who appreciate space and elegance. \r
The King Room features a sprawling bed fit for royalty, panoramic city views, \r
and an oversized lounge area perfect for relaxing after a day of adventure.\`,\r
      id: 'king-description',\r
    }),\r
\r
    new FormDescription({\r
      value: \`Comfort meets sophistication in the Queen Room. Cozy yet stylish, \r
it boasts a plush queen-sized bed, ambient lighting, and curated decor.\`,\r
      hidden: true,\r
      id: 'queen-description',\r
    }),\r
\r
    new FormDescription({\r
      value: \`The Junior Room is compact but clever. Smart furniture and quirky \r
design touches make it perfect for travelers who want efficiency with style.\`,\r
      hidden: true,\r
      id: 'junior-description',\r
    }),\r
\r
    new SubmitButton('Book Room'),\r
  ];\r
\r
  logData(data: any) {\r
    this.formChange.emit(data);\r
  }\r
}\r
`;export{i as default};
