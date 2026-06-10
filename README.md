# Preforms

**Define fields. Attach triggers. Let the form handle the rest.**

A **TypeScript-first** form engine for Angular that makes complex forms feel simple.

- Async validation? One trigger.
- Dependent selects from an API? One projection.
- Dynamic cart validation? One aggregate.
- Lazy-loaded custom fields? Built in.
- A Pokémon battle powered by form state? Somehow, yes.

**[Full docs and examples →](https://preforms.dev/)**

## Quick Start

```sh
npm i @preforms/ts @preforms/angular
```

Install both packages for Angular apps: `@preforms/ts` defines the field models and trigger types, while `@preforms/angular` renders them.

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
      target: "options", // field prop to patch
      source: "results", // API returns { results: [...] }
      select: {
        // shape each result however you need
        value: "url",
        label: "name",
      },
    },
  },
];
```

Fetch remote data on init, project it into the shape the field needs,
and patch the form before the user touches anything.

## Dynamic Arrays Can Validate Themselves

```ts
new FieldArray({
  key: "items",
  addButton: true,
  removeButton: true,
  fields: [
    new NumberField({ key: "price" }),
    new NumberField({ key: "qty" }),
    new OutputField({
      key: "subtotal",
      calculation: "Number(items[$index].price) * Number(items[$index].qty)",
      for: ["price[$index]", "qty[$index]"],
    }),
  ],
  aggregates: [
    // Multiplies price * qty for each row, then validates the cart total.
    Aggregate.product({
      field: ["price", "qty"],
      operator: "lte",
      value: 2000,
      message: "total cannot exceed $2000",
    }),
    Aggregate.unique("name"),
  ],
});
```

Rows can be added and removed, subtotals recalculate per row, and aggregate rules
still validate the whole array.

## Extensible When You Need It

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

## What You Get

- Typed field models from `@preforms/ts`
- Angular renderer from `@preforms/angular/core`
- Native form controls from `@preforms/angular/native`
- Material form controls from `@preforms/angular/material`
- Triggers for validation, async validation, fetching, patching, toggling, dialogs, submit, and reset
- Projection helpers for turning API responses into field state
- Calculated `OutputField`s that react to other fields
- Aggregate validation for dynamic arrays
- Field icons that can run actions, commands, or expressions
- Custom Angular field components
- Lazy-loaded field components

`@preforms/ts` can also be used outside Angular when you only need typed form models, schemas, triggers, and transformation utilities.

## Entry Points

```ts
import { Preforms } from "@preforms/angular/core";
import { NATIVE_FORM_ELEMENTS } from "@preforms/angular/native";
import { MATERIAL_FORM_ELEMENTS } from "@preforms/angular/material";
import { TextField, TriggerAction } from "@preforms/ts";
```

For Material components:

```sh
npm i @angular/material @angular/cdk
```

## Development

```sh
pnpm build
pnpm lint
```

## License

MIT
