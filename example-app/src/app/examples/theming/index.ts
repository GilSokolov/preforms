import { ExampleDefinition } from 'src/app/example-registry';
import { ThemingComponent } from './theming.component';
import ts from './theming.component.ts.txt';

export const THEMING_EXAMPLE: ExampleDefinition = {
  id: 'theming',
  title: 'Theming',
  description: `Native fields read a set of \`--preforms-*\` CSS custom properties. Every token has a
system-colour fallback, so a form with no tokens set follows \`color-scheme\` (light or dark).
Tokens are never declared by the library: set them on any ancestor, so one form can be themed
differently from another. Try the presets below, or edit individual tokens.

| Token | Used for | Fallback |
| --- | --- | --- |
| \`--preforms-border\` | control/fieldset borders, array item outlines, dividers | \`color-mix(in srgb, currentColor 25%, transparent)\` |
| \`--preforms-radius\` | inputs, buttons, array items | \`0.5rem\` |
| \`--preforms-field\` | recessed background of input/select/textarea | \`Field\` |
| \`--preforms-surface\` | raised areas: dialog panel, details body | \`Canvas\` |
| \`--preforms-muted\` | labels, hints, descriptions, divider labels, drag handle | \`color-mix(in srgb, currentColor 60%, transparent)\` |
| \`--preforms-danger\` | \`.preforms-field-error\`, invalid borders | \`#dc2626\` |
| \`--preforms-accent\` | focus ring, primary button, checked controls | \`AccentColor\` |
| \`--preforms-on-accent\` | text on accent | \`AccentColorText\` |
| \`--preforms-gap\` | space between fields, inside groups and rows | \`1rem\` |
| \`--preforms-control-pad\` | padding inside inputs | \`0.5rem\` |
| \`--preforms-array-pad\` | padding inside array items | \`0.5rem\` |
| \`--preforms-dialog-radius\` | dialog corners | \`var(--preforms-radius)\` |
| \`--preforms-dialog-width\` | dialog max-width | \`min(90vw, 500px)\` |
| \`--preforms-pill-radius\` | dialog close button | \`999px\` |
| \`--preforms-backdrop\` | dialog \`::backdrop\` | \`rgb(0 0 0 / 0.45)\` |
| \`--preforms-shadow\` | dialog and array drag preview | \`0 8px 24px rgb(0 0 0 / 0.2)\` |
| \`--preforms-font-size-sm\` | hints, descriptions, labels, divider labels | \`0.85rem\` |
| \`--preforms-line-height\` | hints, descriptions | \`1.4\` |`,
  category: 'Extensibility',
  component: ThemingComponent,
  assets: [{ label: 'TS', language: 'typescript', content: ts }],
};
