# Preforms

Type-safe dynamic form models for TypeScript, with Angular renderers for native
and Material-style form controls.

## Packages

```sh
pnpm add @preforms/ts @preforms/angular
```

For Material components, also install Angular Material:

```sh
pnpm add @angular/material @angular/cdk
```

## Basic Angular Usage

```ts
import { Component } from "@angular/core";
import { Preforms } from "@preforms/angular/core";
import { NATIVE_FORM_ELEMENTS } from "@preforms/angular/native";
import { EmailField, PasswordField, SubmitButton } from "@preforms/ts";

@Component({
  selector: "app-login-form",
  imports: [Preforms],
  providers: [NATIVE_FORM_ELEMENTS],
  template: `
    <preforms
      [fields]="fields"
      (submittedData)="onSubmit($event)"
    />
  `,
})
export class LoginFormComponent {
  fields = [
    new EmailField({ key: "email", required: true }),
    new PasswordField({ key: "password", required: true }),
    new SubmitButton("Sign in"),
  ];

  onSubmit(data: unknown) {
    console.log(data);
  }
}
```

## Mental Model

Preforms is built around a few small concepts:

- Fields define structure: inputs, buttons, groups, arrays, and decorative UI.
- Triggers define behavior: update state, fetch data, validate, submit, or reset.
- Validation defines correctness: required fields, patterns, ranges, arrays, and cross-field checks.
- Renderers define UI: native controls by default, with Material components available separately.

## Entry Points

```ts
import { Preforms } from "@preforms/angular/core";
import { NATIVE_FORM_ELEMENTS } from "@preforms/angular/native";
import { MATERIAL_FORM_ELEMENTS } from "@preforms/angular/material";
import { TextField, TriggerAction } from "@preforms/ts";
```

## Build

```sh
pnpm build
pnpm lint
```

## License

MIT
