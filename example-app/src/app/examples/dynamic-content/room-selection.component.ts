import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Preforms } from '@preforms/angular/core';
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native';
import {
  SelectField,
  Divider,
  Title,
  FormTitleLevel,
  FormDescription,
  SubmitButton,
} from '@preforms/ts';

@Component({
  selector: 'app-room-selection',
  template: `<preforms (submittedData)="logData($event)" [fields]="fields" />`,
  imports: [Preforms],
  encapsulation: ViewEncapsulation.None,
  providers: [NATIVE_FORM_ELEMENTS],
})
export class RoomSelectionComponent {
  @Output() formChange = new EventEmitter<any>();

  fields = [
    new SelectField({
      key: 'room',
      value: 'king',
      label: 'Choose a room',
      options: ['king', 'queen', 'junior'],
      required: true,
      triggers: [
        {
          on: 'change',
          do: 'update',
          state: { hidden: true },
          target: [
            'king-title',
            'queen-title',
            'junior-title',
            'king-description',
            'queen-description',
            'junior-description',
          ],
        },
        {
          on: 'change',
          do: 'update',
          state: { hidden: false },
          target: ['$value-title', '$value-description'],
        },
      ],
    }),

    new Divider({ label: 'Room Details' }),

    new Title({ value: 'King Room', id: 'king-title' }, FormTitleLevel.H2),
    new Title({ value: 'Queen Room', hidden: true, id: 'queen-title' }, FormTitleLevel.H2),
    new Title({ value: 'Junior Room', hidden: true, id: 'junior-title' }, FormTitleLevel.H2),

    new FormDescription({
      value: `A majestic retreat designed for travelers who appreciate space and elegance. 
The King Room features a sprawling bed fit for royalty, panoramic city views, 
and an oversized lounge area perfect for relaxing after a day of adventure.`,
      id: 'king-description',
    }),

    new FormDescription({
      value: `Comfort meets sophistication in the Queen Room. Cozy yet stylish, 
it boasts a plush queen-sized bed, ambient lighting, and curated decor.`,
      hidden: true,
      id: 'queen-description',
    }),

    new FormDescription({
      value: `The Junior Room is compact but clever. Smart furniture and quirky 
design touches make it perfect for travelers who want efficiency with style.`,
      hidden: true,
      id: 'junior-description',
    }),

    new SubmitButton('Book Room'),
  ];

  logData(data: any) {
    this.formChange.emit(data);
  }
}
