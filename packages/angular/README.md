# @preforms/angular

**Define fields. Attach triggers. Let the form handle the rest.**

Angular renderer and field components for Preforms, a TypeScript-first form
engine that makes complex forms feel simple.

- Async validation? One trigger.
- Dependent selects from an API? One projection.
- Dynamic cart validation? One aggregate.
- Lazy-loaded custom fields? Built in.
- A Pokemon battle powered by form state? Somehow, yes.

**[Full docs and examples ->](https://preforms.dev/)**

## Quick Start

```sh
npm i @preforms/ts @preforms/angular @angular/cdk
```

`@preforms/ts` defines the field models and trigger types, while
`@preforms/angular` renders them. `@angular/cdk` powers drag-and-drop array
fields.

```ts
import { Component } from "@angular/core";
import { Preforms } from "@preforms/angular/core";
import { NATIVE_FORM_ELEMENTS } from "@preforms/angular/native";
import { EmailField, PasswordField, SubmitButton } from "@preforms/ts";

@Component({
  selector: "app-login",
  imports: [Preforms],
  providers: [NATIVE_FORM_ELEMENTS],
  template: `<preforms [fields]="fields" />`,
})
export class LoginComponent {
  fields = [new EmailField(), new PasswordField(), new SubmitButton("Sign in")];
}
```

## Why It Feels Different

A field can declare behavior, not just shape:

```ts
new UserName({
  required: true,
  triggers: [
    {
      on: FormFieldEventType.CHANGE,
      action: TriggerAction.VALIDATE_ASYNC,
      fetchUrl: "/api/check-username/$value",
    },
  ],
});
```

That field validates itself through the form engine. No component subscription,
no custom validator class, no state glue.

## API Data Becomes Form State

```ts
triggers: [
  {
    on: FormFieldEventType.INIT,
    action: TriggerAction.FETCH,
    fetchUrl: "https://pokeapi.co/api/v2/type/", // yes, really
    mode: "patch",
    projection: {
      target: "options",
      source: "results",
      select: {
        value: "url",
        label: "name",
      },
    },
  },
];
```

Fetch remote data on init, project it into the shape the field needs, and patch
the form before the user touches anything.

## Lazy Custom Fields

Custom fields are just field models plus Angular components:

```ts
export class EditorField extends FormField<string> {
  constructor(key: string) {
    super({ component: "editor", key });
  }
}
```

```ts
provideDynamicFormLazyFields([
  {
    type: "editor",
    loader: () => import("./editor.component").then((m) => m.EditorComponent),
  },
]);
```

Heavy controls, editors, pickers, and custom UI can load only when the form
actually needs them.

## Entry Points

```ts
import { Preforms } from "@preforms/angular/core";
import { NATIVE_FORM_ELEMENTS } from "@preforms/angular/native";
import { MATERIAL_FORM_ELEMENTS } from "@preforms/angular/material";
```

Native controls are included. For Material components, install Angular Material:

```sh
npm i @angular/material
```

## Row sizing

`FormRow` shares the available width equally between text fields by default.
Selects use a shrinkable `11rem` basis; buttons, checkboxes and toggles keep
their natural size. These layout styles ship with the renderer and work with
native and Material fields, including rows nested in arrays. Compact items
can wrap when the row is too narrow.

Configure select sizing through the row's `style` option:

```ts
new FormRow([methodField, urlField], {
  style: { "--preforms-row-select-flex": "0 1 9rem" },
});
```

Use `"1 1 0"` for equally growing selects. `--preforms-row-field-flex`
controls the other growing fields (default `1 1 0`). Field `className` values
are also applied to the row item wrapper for individual sizing overrides.
Existing `gap` and `position` options still apply; justification distributes
space only when the fields have not already consumed it.

## Theming

Native fields read a set of `--preforms-*` custom properties. Every token has a
system-colour fallback, so a form with no tokens set follows `color-scheme`
(light or dark). The library never declares the tokens itself: set them on any
ancestor, so one form can be themed differently from another.

| Token | Used for | Fallback |
| --- | --- | --- |
| `--preforms-border` | control/fieldset borders, array item outlines, dividers | `color-mix(in srgb, currentColor 25%, transparent)` |
| `--preforms-radius` | inputs, buttons, array items | `0.5rem` |
| `--preforms-field` | recessed background of input/select/textarea | `Field` |
| `--preforms-surface` | raised areas: dialog panel, details body | `Canvas` |
| `--preforms-muted` | labels, hints, descriptions, divider labels, array drag handle | `color-mix(in srgb, currentColor 60%, transparent)` |
| `--preforms-danger` | `.preforms-field-error`, invalid borders | `#dc2626` |
| `--preforms-accent` | focus ring, primary button, checked controls | `AccentColor` |
| `--preforms-on-accent` | text on accent | `AccentColorText` |
| `--preforms-gap` | space between fields, inside groups and rows | `1rem` |
| `--preforms-control-pad` | padding inside inputs | `0.5rem` |
| `--preforms-dialog-radius` | dialog corners | `var(--preforms-radius)` |
| `--preforms-dialog-width` | dialog max-width | `min(90vw, 500px)` |
| `--preforms-shadow` | dialog and array drag preview | `0 8px 24px rgb(0 0 0 / 0.2)` |
| `--preforms-backdrop` | dialog `::backdrop` | `rgb(0 0 0 / 0.45)` |
| `--preforms-pill-radius` | dialog close button | `999px` |
| `--preforms-array-pad` | padding inside array items | `0.5rem` |
| `--preforms-font-size-sm` | hints, descriptions, labels, divider labels | `0.85rem` |
| `--preforms-line-height` | hints, descriptions | `1.4` |

The array drag preview renders inside the form (`cdkDragPreviewContainer="parent"`)
so it inherits the tokens. It is `position: fixed`, so an ancestor with `transform`,
`filter` or `contain` makes it position relative to that ancestor instead.

```html
<div class="checkout-theme">
  <preforms [fields]="fields" />
</div>
```

```css
.checkout-theme {
  --preforms-accent: #7c3aed;
  --preforms-on-accent: white;
  --preforms-radius: 0.25rem;
  --preforms-field: #f5f3ff;
}
```

`demo/theming.html` shows light, dark and overridden themes side by side,
including an open dialog and an array item mid-drag.

## License

MIT
