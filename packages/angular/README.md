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

## License

MIT
