import { inject, Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { FIELD_ACTIONS } from "../tokens/field-icon-action.tokens";

export interface FieldActionContext {
  field: any; // your AbstractFormElement
  control: AbstractControl;
  icon?: any; // optional icon metadata
}

@Injectable({ providedIn: "root" })
export class FieldActionService {
  private readonly customActions = inject(FIELD_ACTIONS, { optional: true });
  /**
   * Execute an action on a field
   * Can be overridden or extended by developers
   */
  execute(action: string, ctx: FieldActionContext) {
    // 1. Check custom actions first
    if (this.customActions && this.customActions[action]) {
      this.customActions[action](ctx);
      return;
    }

    switch (action) {
      case "clear":
        ctx.control.setValue(null);
        break;

      case "copy":
        navigator.clipboard.writeText(ctx.control.value ?? "");
        break;

      case "togglePassword":
        ctx.field.type = ctx.field.type === "password" ? "text" : "password";
        break;

      default:
        console.warn(`Unknown action: ${action}`);
        break;
    }
  }
}
