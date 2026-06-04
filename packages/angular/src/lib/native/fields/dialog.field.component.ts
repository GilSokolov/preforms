import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { DialogField } from "@preforms/ts";
import { DynamicFormElement } from "../../core/decorators";
import { DynamicFormComponent } from "../../core/dynamic-form.component";
import { BaseFieldComponent } from "../../core/fields";

@DynamicFormElement({ component: "dialog" })
@Component({
  selector: "preforms-dialog-field",
  styles: `
    .preforms-dialog {
      border: 0;
      border-radius: 12px;
      padding: 0;
      max-width: min(90vw, 500px);
      max-height: 90vh;
      overflow: hidden;
    }

    .preforms-dialog-panel {
      display: flex;
      flex-direction: column;
      height: 100%;
      background: white;
    }

    .preforms-dialog-header {
      display: flex;
      justify-content: flex-end;
      padding: 0.5rem;
    }

    .preforms-dialog-close-btn {
      width: 2rem;
      height: 2rem;
      border: 0;
      border-radius: 999px;
      background: transparent;
      cursor: pointer;
      display: grid;
      place-items: center;
      font: inherit;
      line-height: 1;
    }

    .preforms-dialog-content {
      padding: 1rem;
      flex: 1;
      overflow: auto;
    }

    .preforms-dialog::backdrop {
      background: rgb(0 0 0 / 0.45);
    }
  `,
  template: `
    <dialog
      #dialog
      [id]="field.id"
      [class]="['preforms-dialog', field.className]"
      [ngStyle]="{
        minWidth: field.width || '500px',
        minHeight: field.height || '250px',
      }"
    >
      <div class="preforms-dialog-panel">
        @if (field.closeBtn) {
          <div class="preforms-dialog-header">
            <button
              type="button"
              class="preforms-dialog-close-btn"
              aria-label="Close dialog"
              (click)="dialog.close()"
            >
              ✕
            </button>
          </div>
        }

        <div class="preforms-dialog-content">
          <preforms-dynamic-form
            [fields]="field.fields"
            (submittedData)="control.patchValue($event); dialog.close()"
          />
        </div>
      </div>
    </dialog>
  `,
  imports: [ReactiveFormsModule, DynamicFormComponent, CommonModule],
})
export class DialogFieldComponent extends BaseFieldComponent<
  FormGroup,
  DialogField
> {}
