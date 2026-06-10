import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Preforms } from '@preforms/angular/core';
import { DYNAMIC_FORM_FETCHER } from '@preforms/angular/core';
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native';
import {
  DialogField,
  FieldButton,
  FieldGroup,
  FieldWrapper,
  FormDivider,
  FormFieldEventType,
  FormImage,
  FormTitle,
  InputField,
  NumberField,
  OutputField,
  SelectField,
  TriggerAction,
} from '@preforms/ts';

import { from } from 'rxjs';

function randomIntBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createPlayer(playerName: string, url = '$value', showdown = 'back_default') {
  return new FieldGroup({
    key: playerName,
    hidden: true,
    fields: [
      new FormImage({
        src: '',
        key: 'image',
      }),
      new InputField({
        type: 'number',
        key: 'hp',
        value: 0,
        className: 'indicator',
        readonly: true,
      }),
      new InputField({
        type: 'number',
        key: 'attack',
        value: 0,
        className: 'indicator',
        readonly: true,
      }),
      new InputField({
        type: 'number',
        key: 'defense',
        value: 0,
        className: 'indicator',
        readonly: true,
      }),
      new NumberField({
        key: 'hit',
        readonly: true,
        className: 'hit',
      }),
      new OutputField({
        key: 'damage',
        calculation: `
        ${playerName}.hit ? Number(${playerName}.defense) - Number(${playerName}.hit) : 0`,
        for: ['p1', 'p2'],
        // hidden: true,
      }),
    ],
    triggers: [
      {
        on: FormFieldEventType.SELECT,
        action: TriggerAction.FETCH,
        fetchUrl: url,
        source: 'pokemon',
        mode: 'patch',
        projection: {
          target: 'value',
          select: {
            hp: 'stats[0].base_stat',
            attack: 'stats[1].base_stat',
            defense: 'stats[2].base_stat',
            image: `sprites.other.showdown.${showdown}`,
          },
        },
      },
      {
        on: FormFieldEventType.SELECT,
        action: TriggerAction.UPDATE,
        state: {
          hidden: false,
        },
      },
    ],
  });
}

@Component({
  selector: 'app-dynamic-form-fetch-remote',
  template: `<preforms (submittedData)="logData($event)" [fields]="fields" className="pokemon" />`,
  imports: [Preforms],
  styles: [
    `
      .pokemon {
        .grid {
          max-width: 400px;
          padding: 20px;
          display: grid;
          grid-template-areas: 'a a' 'b b';
          gap: 10px;
          grid-auto-rows: 40px 300px;
          align-items: end;
        }

        .hit {
          .preforms-input-field {
            all: unset;
          }
        }

        .indicator {
          .preforms-input-field {
            max-width: 100%;
          }
        }

        .primary {
          background-color: rgb(255, 187, 0);
          padding: 0.6rem 2rem;
          border: 1px solid #cfd6e3;
          border-radius: 25px;
          font-weight: 700;
          margin-top: 30px;
          display: inline-block;
        }
      }
    `,
  ],
  providers: [
    NATIVE_FORM_ELEMENTS,
    {
      provide: DYNAMIC_FORM_FETCHER,
      useValue: (url: string) => {
        return from(fetch(url).then((res) => res.json()));
      },
    },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class DynamicFormFetchRemoteComponent {
  @Output() formChange = new EventEmitter<any>();

  fields = [
    new OutputField({
      key: 'score',
      calculation: 'Number(p1.damage) > Number(p2.damage)',
      for: ['p1', 'p2'],
      hidden: true,
    }),
    new DialogField({
      key: 'popup',
      fields: [],
      triggers: [
        {
          on: 'change',
          action: 'update',
          state: {
            fields: [new FormTitle('You win!')],
          },
          condition: true,
          source: 'score',
        },
        {
          on: 'change',
          action: 'update',
          state: {
            fields: [new FormTitle('You lose!')],
          },
          condition: false,
          source: 'score',
        },
      ],
    }),

    new FieldWrapper({
      className: 'grid',
      fields: [
        new FormDivider({ label: 'Player' }),
        new FormDivider({ label: 'Enemy' }),
        createPlayer('p1'),
        createPlayer(
          'p2',
          'https://pokeapi.co/api/v2/pokemon/' + randomIntBetween(1, 151),
          'front_default',
        ),
      ],
    }),
    new FormDivider({ label: 'Play!' }),
    new SelectField({
      key: 'type',
      label: 'Select Pokemon Type',
      options: [],
      triggers: [
        {
          on: FormFieldEventType.INIT,
          action: TriggerAction.FETCH,
          fetchUrl: 'https://pokeapi.co/api/v2/type/',
          mode: 'patch',
          projection: {
            target: 'options',
            select: {
              value: 'url',
              label: 'name',
            },
            source: 'results',
          },
        },
      ],
    }),
    new SelectField({
      key: 'pokemon',
      label: 'Select Pokemon',
      hidden: true,
      options: [],
      triggers: [
        {
          on: FormFieldEventType.CHANGE,
          source: 'type',
          action: TriggerAction.FETCH,
          fetchUrl: '$value',
          mode: 'patch',
          projection: {
            target: 'options',
            select: {
              value: 'pokemon.url',
              label: 'pokemon.name',
            },
            source: 'pokemon',
          },
        },
        {
          on: FormFieldEventType.SELECT,
          source: 'type',
          action: TriggerAction.UPDATE,
          state: {
            hidden: false,
          },
        },
      ],
    }),
    new FieldButton({
      type: 'button',
      label: 'Attack!',
      hidden: true,
      className: 'primary',
      triggers: [
        {
          on: 'select',
          source: 'pokemon',
          action: 'update',
          state: {
            hidden: false,
          },
        },
        {
          on: 'click',
          action: 'update',
          state: {
            value: {
              hit: 'p1.attack',
            },
          },
          target: ['p2'],
        },
        {
          on: 'click',
          action: 'update',
          state: {
            value: {
              hit: 'p2.attack',
            },
          },
          target: ['p1'],
        },
        {
          on: 'click',
          action: TriggerAction.OPEN_DIALOG,
          target: 'popup',
          debounce: 500,
        },
      ],
    }),
  ];

  logData(data: any) {
    console.log(data);

    // this.formChange.emit(data);
  }
}
