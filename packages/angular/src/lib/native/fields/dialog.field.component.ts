import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { DialogField } from "@preforms/ts";
import { DynamicFormElement } from "../../core/decorators";
import { DynamicFormComponent } from "../../core/dynamic-form.component";
import { BaseFieldComponent } from "../../core/fields";
import { DynamicFormSubmitEvent } from "../../core/models";
import { untilDestroyed } from "../../core/utils";
import { CommonModule } from "@angular/common";

@DynamicFormElement({ component: "dialog" })
@Component({
  selector: "preforms-dialog-field",
  styles: `
    .close-btn {
      display: flex;
      justify-content: end;

      button {
        background: none;
        border: none;
        padding: 0;
        color: inherit;
        font: inherit;
        cursor: pointer;
      }
    }
  `,
  template: `
    <dialog
      #dialog
      [id]="field.id"
      [class]="field.className"
      [ngStyle]="{ width: field.width || '500px' }"
    >
      @if (field.closeBtn) {
        <form class="close-btn" method="dialog">
          <button class="dialog-close-btn" style="none">✖️</button>
        </form>
      }

      <preforms-dynamic-form
        [fields]="field.fields"
        (submitted)="setValue($event)"
      />
    </dialog>
  `,
  imports: [ReactiveFormsModule, DynamicFormComponent, CommonModule],
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
