import { Component } from "@angular/core";
import { FieldIcon } from "@preforms/angular/core";

@Component({
  selector: "preforms-icon",
  styles: `
    button.preforms-icon {
      border: 0;
      background: transparent;
      color: inherit;
      font: inherit;
      cursor: pointer;
    }
  `,
  template: `
    @if (visible()) {
      @if (type === "button") {
        <button
          type="button"
          class="preforms-icon"
          [attr.title]="icon.title"
          [attr.command]="icon.command"
          [attr.commandfor]="icon.commandfor"
          (click)="handler()"
        >
          {{ icon.name }}
        </button>
      } @else {
        <span class="preforms-icon" [attr.title]="icon.title">
          {{ icon.name }}
        </span>
      }
    }
  `,
})
export class FieldIconEmojiComponent extends FieldIcon {}
