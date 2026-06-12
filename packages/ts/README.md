# @preforms/ts

TypeScript field models, schemas, trigger types, and transformation utilities
for Preforms.

This is the form engine package behind `@preforms/angular`. Use it to define
forms as plain TypeScript models, share those definitions across apps, or build
your own renderer around the same field and trigger primitives.

**[Full docs and examples ->](https://preforms.dev/)**

## Quick Start

```ts
import { EmailField, PasswordField, SubmitButton } from "@preforms/ts";

export const fields = [
  new EmailField(),
  new PasswordField(),
  new SubmitButton("Submit"),
];
```

## Why Use It Directly

- Typed field models without Angular imports
- Trigger definitions for validation, fetching, patching, toggling, submit, and reset
- Projection helpers for shaping API responses into field state
- Calculated output fields and aggregate rules for dynamic arrays
- Shared form definitions that can be rendered by `@preforms/angular`

For Angular apps, install this package with the renderer:

```sh
npm i @preforms/ts @preforms/angular @angular/cdk
```

## License

MIT
