import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { DialogField } from "@preforms/ts";
import { DynamicFormElement } from "../../core/decorators";
import { DynamicFormComponent } from "../../core/dynamic-form.component";
import { BaseFieldComponent } from "../../core/fields";
import { DynamicFormSubmitEvent } from "../../core/models";
import { untilDestroyed } from "../../core/utils";

import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@DynamicFormElement({ component: "dialog" })
@Component({
  selector: "preforms-dialog-field",
  styles: `
    .mat-like-dialog {
      border: none;
      border-radius: 12px;
      max-width: 90vw;
      box-shadow:
        0 11px 15px -7px rgba(0, 0, 0, 0.2),
        0 24px 38px 3px rgba(0, 0, 0, 0.14),
        0 9px 46px 8px rgba(0, 0, 0, 0.12);
      font-family: Roboto, sans-serif;
    }

    .mat-like-dialog::backdrop {
      background: rgba(0, 0, 0, 0.32);
    }

    .dialog-container {
      padding: 24px;
    }

    .dialog-title {
      margin: 0 0 16px 0;
      font-size: 20px;
      font-weight: 500;
    }

    .dialog-content {
      margin-bottom: 24px;
      color: rgba(0, 0, 0, 0.87);
    }

    .dialog-actions {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .mat-like-dialog[open] {
      animation: dialogFadeIn 150ms ease-out;
    }

    @keyframes dialogFadeIn {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    .close-btn {
      display: flex;
    }
    .dialog-close-btn {
      margin-left: auto;
    }
  `,
  template: `
    <dialog
      #dialog
      [id]="field.id"
      [class]="[field.className, 'mat-like-dialog']"
      [ngStyle]="{ width: field.width || '500px' }"
    >
      @if (field.closeBtn) {
        <form class="close-btn" method="dialog">
          <button matIconButton class="dialog-close-btn">
            <mat-icon>close</mat-icon>
          </button>
        </form>
      }
      <div class="dialog-container">
        <preforms-dynamic-form
          [fields]="field.fields"
          (submitted)="setValue($event)"
        />
      </div>
    </dialog>
  `,
  imports: [
    ReactiveFormsModule,
    DynamicFormComponent,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class DialogFieldComponent
  extends BaseFieldComponent<FormGroup, DialogField>
  implements AfterViewInit
{
  @ViewChild("dialog", { static: true })
  dialogRef!: ElementRef<HTMLDialogElement>;

  untilDestroyed = untilDestroyed();

  ngAfterViewInit() {
    this.control.statusChanges.pipe(this.untilDestroyed()).subscribe(() => {
      const dialog = this.dialogRef.nativeElement;
      this.control.disabled ? dialog.close() : dialog.showModal();
    });
  }

  setValue(data: DynamicFormSubmitEvent) {
    if (this.dialogRef.nativeElement.returnValue) {
      this.control.patchValue(data.data);
    }

    this.dialogRef.nativeElement.close();
  }
}
