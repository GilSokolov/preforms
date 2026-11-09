import { Component, ViewEncapsulation } from '@angular/core';
import { Preforms } from '@preforms/angular/core';
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native';
import { FieldArray, Fieldset, SelectField, TextField } from '@preforms/ts';

/**
 * Scratch page: the same "select toggles a sibling" trigger, outside and inside
 * a FieldArray. Each change of the select flips `hidden` on Amount and
 * `disabled` on Note. Not part of the docs site.
 */
@Component({
  selector: 'app-array-trigger-bug',
  template: `
    <main class="demo">
      <h1>Select trigger: outside vs inside an array</h1>

      <section>
        <h2>1. Outside an array — works</h2>
        <p>Pick <code>timestamp</code>: Amount hides, Note disables.</p>
        <preforms [fields]="plain" />
      </section>

      <section>
        <h2>2. Inside an array row — hidden is lost</h2>
        <p>
          Pick <code>timestamp</code>: Amount hides and Note disables, same as above.
        </p>
        <preforms [fields]="inArray" />
      </section>

      <section>
        <h2>4. A real multi-select</h2>
        <p>Its value should still be an array of the selected options.</p>
        <preforms [fields]="multi" />
      </section>

      <section>
        <h2>3. Keyed wrapper inside an array row — target never resolves</h2>
        <p>Pick <code>timestamp</code>: the Timestamp fieldset hides.</p>
        <preforms [fields]="wrapperInArray" />
      </section>
    </main>
  `,
  styles: `
    .demo {
      margin: 0 auto;
      max-width: 60rem;
      padding: 2rem;
      font-family: system-ui, sans-serif;
    }
    .demo section {
      margin-block: 2rem;
      border: 1px solid #ccc;
      border-radius: 0.5rem;
      padding: 1rem 1.5rem;
    }
    .demo h2 {
      margin-top: 0;
    }
    .demo label {
      display: block;
      margin-block: 0.25rem;
    }
    .demo input,
    .demo select {
      padding: 0.25rem;
    }
    .demo fieldset {
      margin-block: 0.5rem;
    }
  `,
  imports: [Preforms],
  encapsulation: ViewEncapsulation.None,
  providers: [NATIVE_FORM_ELEMENTS],
})
export class ArrayTriggerBugComponent {
  /** Conditional on the select's value, addressed without an index. */
  private plainTriggers = [
    { on: 'change', do: 'update', state: { hidden: true }, target: 'amount', condition: 'timestamp' },
    { on: 'change', do: 'update', state: { disabled: true }, target: 'note', condition: 'timestamp' },
    { on: 'change', do: 'update', state: { hidden: false }, target: 'amount', condition: 'value' },
    { on: 'change', do: 'update', state: { disabled: false }, target: 'note', condition: 'value' },
  ];

  /** Identical, but addressed per row. */
  private rowTriggers = [
    { on: 'change', do: 'update', state: { hidden: true }, target: 'amount[$index]', condition: 'timestamp' },
    { on: 'change', do: 'update', state: { disabled: true }, target: 'note[$index]', condition: 'timestamp' },
    { on: 'change', do: 'update', state: { hidden: false }, target: 'amount[$index]', condition: 'value' },
    { on: 'change', do: 'update', state: { disabled: false }, target: 'note[$index]', condition: 'value' },
  ];

  plain = [
    new SelectField({
      key: 'type',
      label: 'Type',
      value: 'value',
      options: ['value', 'timestamp'],
      triggers: this.plainTriggers as any,
    }),
    new TextField({ key: 'amount', label: 'Amount' }),
    new TextField({ key: 'note', label: 'Note' }),
  ];

  inArray = [
    new FieldArray({
      key: 'rows',
      label: 'Rows',
      addButton: true,
      removeButton: true,
      value: [{ type: 'value' }],
      fields: [
        new SelectField({
          key: 'type',
          label: 'Type',
          value: 'value',
          options: ['value', 'timestamp'],
          triggers: this.rowTriggers as any,
        }),
        new TextField({ key: 'amount', label: 'Amount' }),
        new TextField({ key: 'note', label: 'Note' }),
      ],
    }),
  ];

  multi = [
    new SelectField({
      key: 'tags',
      label: 'Tags',
      multiple: true,
      options: ['red', 'green', 'blue'],
    }),
  ];

  wrapperInArray = [
    new FieldArray({
      key: 'rows2',
      label: 'Rows',
      addButton: true,
      removeButton: true,
      value: [{ type: 'value' }],
      fields: [
        new SelectField({
          key: 'type',
          label: 'Type',
          value: 'value',
          options: ['value', 'timestamp'],
          triggers: [
            {
              on: 'change',
              do: 'update',
              state: { hidden: true },
              target: 'tsConfig[$index]',
              condition: 'timestamp',
            },
            {
              on: 'change',
              do: 'update',
              state: { hidden: false },
              target: 'tsConfig[$index]',
              condition: 'value',
            },
          ] as any,
        }),
        new Fieldset({
          key: 'tsConfig',
          label: 'Timestamp',
          fields: [new TextField({ key: 'unit', label: 'Unit' })],
        }),
      ],
    }),
  ];
}
