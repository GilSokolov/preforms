import { CommonModule } from "@angular/common";
import { Component, ElementRef, ViewChild } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { DialogField, FormEventData, FormEventType } from "@preforms/ts";
import { DynamicFormElement, FormEvent } from "../../core/decorators";
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
        width: field.width || '350px',
        height: field.height || '250px',
      }"
    >
      <div class="preforms-dialog-panel">
        @if (field.closeBtn) {
          <div class="preforms-dialog-header">
            <button
              type="button"
              class="preforms-dialog-close-btn"
              aria-label="Close dialog"
              (click)="closeDialog()"
            >
              ✕
            </button>
          </div>
        }

        <div class="preforms-dialog-content">
          <preforms-dynamic-form
            [fields]="field.fields"
            (submittedData)="submit($event)"
          />
        </div>
      </div>
    </dialog>
  `,
  imports: [ReactiveFormsModule, DynamicFormComponent, CommonModule],
  host: { ngSkipHydration: "true" },
})
export class DialogFieldComponent extends BaseFieldComponent<
  FormGroup,
  DialogField
> {
  @ViewChild("dialog") dialog!: ElementRef<HTMLDialogElement>;

  closeDialog(): void {
    this.dialog.nativeElement.close();
  }

  submit(data: { [key: string]: any }): void {
    this.control.patchValue(data);
    this.closeDialog();
  }

  @FormEvent(FormEventType.OPEN_DIALOG)
  private handleOpen(event: FormEventData): void {
    this.handleDialogEvent(event, "open");
  }

  @FormEvent(FormEventType.CLOSE_DIALOG)
  private handleClose(event: FormEventData): void {
    this.handleDialogEvent(event, "close");
  }

  private handleDialogEvent(
    event: FormEventData,
    action: "open" | "close",
  ): void {
    if (!("target" in event) || event.target !== this.field.id) return;

    const dialog = this.dialog.nativeElement;

    if (action === "open" && !dialog.open) {
      dialog.showModal();
    }

    if (action === "close" && dialog.open) {
      dialog.close();
    }
  }
}
