import { AbstractControl } from "@angular/forms";
import {
  FieldButton,
  FormField,
  FormFieldIcon,
  SelectField,
} from "@preforms/ts";

/**
 * Check if a dot-path is allowed in the field object.
 * E.g., 'iconLeft.name' -> field.iconLeft exists and is object or leaf
 */
function isAllowedPath(path: string, ctx: Record<string, any>) {
  const parts = path.split(".");
  let obj: Record<string, any> = ctx;
  for (const part of parts) {
    if (obj && part in obj) {
      obj = obj[part];
    } else {
      return false;
    }
  }
  return true;
}

export function safeEval(
  field: FormField | FieldButton | SelectField,
  icon: FormFieldIcon,
  control: AbstractControl,
  expr: string,
) {
  // Simple validator: check for forbidden characters
  const forbidden =
    /[\[\]\(\){};`]|constructor|__proto__|this|window|globalThis/;
  if (forbidden.test(expr)) {
    throw new Error("Expression contains unsafe tokens");
  }

  const proxy = new Proxy(field, {
    set(target: any, prop, value) {
      if (prop === "value") {
        control.setValue(value, { emitEvent: false });
        control.markAllAsTouched();
        control.updateValueAndValidity();
      }
      target[prop] = value;
      return true;
    },

    get(target, prop) {
      if (prop === "value") return control.value;
      return target[prop];
    },
  });

  // 1️⃣ Extract string literals
  const strings: string[] = [];
  const exprWithoutStrings = expr.replace(/(['"])(.*?)\1/g, (match) => {
    strings.push(match);
    return `__STRING_${strings.length - 1}__`;
  });

  // 2️⃣ Replace identifiers ONLY outside strings
  const replaced = exprWithoutStrings.replace(
    /\b[a-zA-Z_]\w*(\.\w+)?\b/g,
    (word) => {
      if (word.startsWith("__STRING_")) return word;

      if (word === "null") return word;

      return isAllowedPath(word, { field, icon, control }) ? word : `"${word}"`;
    },
  );

  // 3️⃣ Restore strings
  const finalExpr = replaced.replace(
    /__STRING_(\d+)__/g,
    (_, index) => strings[Number(index)],
  );

  return new Function(
    "field",
    "icon", // single argument
    `with(field, icon){ return ${finalExpr} }`,
  )(proxy, icon);
}
