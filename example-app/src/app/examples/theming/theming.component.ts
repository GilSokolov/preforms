import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { Preforms } from '@preforms/angular/core';
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native';
import {
  CheckboxField,
  DialogField,
  Divider,
  FieldButton,
  Fieldset,
  FormFieldOption,
  FormRow,
  SelectField,
  SubmitButton,
  TextareaField,
  TextField,
} from '@preforms/ts';

type Tokens = Record<string, string>;

interface Preset {
  label: string;
  scheme: 'light' | 'dark';
  tokens: Tokens;
}

// Tokens are only read by the components. Setting none follows color-scheme.
const PRESETS: Preset[] = [
  { label: 'System dark', scheme: 'dark', tokens: {} },
  { label: 'System light', scheme: 'light', tokens: {} },
  {
    label: 'Violet',
    scheme: 'light',
    tokens: {
      '--preforms-accent': '#7c3aed',
      '--preforms-on-accent': '#ffffff',
      '--preforms-field': '#f5f3ff',
      '--preforms-border': '#c4b5fd',
      '--preforms-muted': '#6d28d9',
      '--preforms-surface': '#ede9fe',
    },
  },
  {
    label: 'Compact, square',
    scheme: 'dark',
    tokens: {
      '--preforms-radius': '0',
      '--preforms-gap': '0.5rem',
      '--preforms-control-pad': '0.25rem',
      '--preforms-pill-radius': '0',
    },
  },
];

const TOKENS: { name: string; fallback: string }[] = [
  { name: '--preforms-border', fallback: 'currentColor 25%' },
  { name: '--preforms-radius', fallback: '0.5rem' },
  { name: '--preforms-field', fallback: 'Field' },
  { name: '--preforms-surface', fallback: 'Canvas' },
  { name: '--preforms-muted', fallback: 'currentColor 60%' },
  { name: '--preforms-danger', fallback: '#dc2626' },
  { name: '--preforms-accent', fallback: 'AccentColor' },
  { name: '--preforms-on-accent', fallback: 'AccentColorText' },
  { name: '--preforms-gap', fallback: '1rem' },
  { name: '--preforms-control-pad', fallback: '0.5rem' },
  { name: '--preforms-array-pad', fallback: '0.5rem' },
  { name: '--preforms-dialog-radius', fallback: 'var(--preforms-radius)' },
  { name: '--preforms-dialog-width', fallback: 'min(90vw, 500px)' },
  { name: '--preforms-pill-radius', fallback: '999px' },
  { name: '--preforms-backdrop', fallback: 'rgb(0 0 0 / 0.45)' },
  { name: '--preforms-shadow', fallback: '0 8px 24px rgb(0 0 0 / 0.2)' },
  { name: '--preforms-font-size-sm', fallback: '0.85rem' },
  { name: '--preforms-line-height', fallback: '1.4' },
];

@Component({
  selector: 'app-theming',
  template: `
    <div class="presets">
      @for (p of presets; track p.label) {
        <button type="button" (click)="apply(p)" [class.active]="p === active">
          {{ p.label }}
        </button>
      }
    </div>

    <!-- The tokens are set on this wrapper only; nothing is declared on :root. -->
    <div class="scope" [style]="scopeStyle()">
      <preforms (submittedData)="logData($event)" [fields]="fields" />
    </div>

    <details class="editor">
      <summary>Edit tokens ({{ setCount() }} set)</summary>
      <div class="grid">
        @for (t of tokens; track t.name) {
          <label>
            <code>{{ t.name }}</code>
            <input
              [placeholder]="t.fallback"
              [value]="values[t.name] || ''"
              (input)="set(t.name, $any($event.target).value)"
            />
          </label>
        }
      </div>
    </details>

    <pre class="css">{{ css() }}</pre>
  `,
  styles: `
    app-theming {
      display: block;
    }
    app-theming .presets {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1rem;
    }
    app-theming .presets button {
      padding: 0.35rem 0.75rem;
      border: 1px solid var(--border);
      border-radius: 6px;
      background: transparent;
      color: var(--body);
      font: inherit;
      cursor: pointer;
    }
    app-theming .presets button.active {
      border-color: var(--indigo);
      color: var(--indigo);
    }
    app-theming .scope {
      padding: 1.25rem;
      border: 1px solid var(--border);
      border-radius: 10px;
      background: Canvas;
      color: CanvasText;
    }
    app-theming .scope .preforms-input,
    app-theming .scope .preforms-textarea {
      width: 100%;
      min-width: 0;
    }
    app-theming .editor {
      margin-top: 1rem;
    }
    app-theming .editor .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
      gap: 0.5rem 1rem;
      margin-top: 0.75rem;
    }
    app-theming .editor label {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      font-size: 0.8rem;
      color: var(--muted);
    }
    app-theming .editor input {
      padding: 0.35rem 0.5rem;
      border: 1px solid var(--border);
      border-radius: 6px;
      background: var(--ink);
      color: var(--body);
      font: inherit;
    }
    app-theming .css {
      margin: 1rem 0 0;
      padding: 0.75rem 1rem;
      border-radius: 8px;
      background: var(--ink);
      color: var(--body);
      font-family: var(--mono);
      font-size: 0.8rem;
      white-space: pre-wrap;
    }
  `,
  imports: [Preforms],
  encapsulation: ViewEncapsulation.None,
  providers: [NATIVE_FORM_ELEMENTS],
})
export class ThemingComponent {
  @Output() formChange = new EventEmitter<any>();

  presets = PRESETS;
  tokens = TOKENS;
  active: Preset | undefined = PRESETS[0];
  scheme: 'light' | 'dark' = 'dark';
  values: Tokens = {};

  fields = [
    new Fieldset({
      label: 'Account',
      fields: [
        new FormRow([
          new TextField({
            key: 'name',
            label: 'Name',
            description: 'As shown on your profile',
            required: true,
          }),
          new SelectField({
            key: 'plan',
            label: 'Plan',
            options: [
              new FormFieldOption({ value: 'free', label: 'Free' }),
              new FormFieldOption({ value: 'pro', label: 'Pro' }),
            ],
          }),
        ]),
        new TextField({
          key: 'email',
          label: 'Email',
          hint: 'Required: leave it empty and submit to see the invalid state',
          required: true,
        }),
        new TextareaField({ key: 'notes', label: 'Notes', rows: 3 }),
        new CheckboxField({ key: 'news', label: 'Send me product news' }),
      ],
    }),
    new Divider({ label: 'Actions' }),
    new FormRow([
      new FieldButton({
        type: 'button',
        label: 'Open dialog',
        command: 'show-modal',
        commandfor: 'theme-dialog',
      }),
      new SubmitButton('Save'),
    ]),
    new DialogField({
      id: 'theme-dialog',
      width: '420px',
      height: '240px',
      closeBtn: true,
      fields: [
        new TextareaField({ key: 'comment', label: 'Comment', rows: 3 }),
        new FormRow([new SubmitButton('Save')]),
      ],
    }),
  ];

  apply(p: Preset) {
    this.active = p;
    this.scheme = p.scheme;
    this.values = { ...p.tokens };
  }

  set(name: string, value: string) {
    const next = { ...this.values, [name]: value };
    if (!value.trim()) delete next[name];
    this.values = next;
    this.active = undefined;
  }

  setCount() {
    return Object.keys(this.values).length;
  }

  scopeStyle() {
    return { 'color-scheme': this.scheme, ...this.values };
  }

  css() {
    const lines = Object.entries(this.values).map(([k, v]) => `  ${k}: ${v};`);
    return `.my-theme {\n  color-scheme: ${this.scheme};${lines.length ? '\n' + lines.join('\n') : ''}\n}`;
  }

  logData(data: any) {
    this.formChange.emit(data);
  }
}
