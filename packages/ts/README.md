# @preforms/ts

TypeScript models, field classes, schema helpers, and trigger utilities for
Preforms dynamic forms.

```ts
import { EmailField, PasswordField, SubmitButton } from "@preforms/ts";

export const fields = [
  new EmailField({ key: "email" }),
  new PasswordField({ key: "password" }),
  new SubmitButton("Submit"),
];
```

## License

MIT
