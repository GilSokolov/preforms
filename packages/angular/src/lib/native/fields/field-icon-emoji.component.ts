import { Component } from "@angular/core";
import { FieldIcon } from "../../core/models";

@Component({
  selector: "preforms-field-icon-emoji",
  template: `
    @if (visible()) {
      @if (type === "button") {
        <button
          type="button"
          class="preforms-field-icon button"
          [attr.title]="icon.title"
          (click)="handler()"
        >
          {{ icon.name }}
        </button>
      } @else {
        <span class="preforms-field-icon" [attr.title]="icon.title">
          {{ icon.name }}
        </span>
      }
    }
  `,
})
export class FieldIconEmojiComponent extends FieldIcon {}
