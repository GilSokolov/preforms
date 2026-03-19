import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { FormArray, FormGroup, ReactiveFormsModule } from "@angular/forms";

import {
  CdkDrag,
  CdkDragDrop,
  CdkDragHandle,
  CdkDropList,
  moveItemInArray,
} from "@angular/cdk/drag-drop";

import {
  FieldArray,
  FieldEventData,
  FormFieldEventType,
  instantiateArrayRow,
} from "@preforms/ts";
import { DynamicFormElement, FormFieldEvent } from "../../../decorators";
import { FormFactoryService } from "../../../services/form-factory.service";
import { BaseFieldComponent } from "../../base/base-field.component";
import { DynamicFieldGroupComponent } from "../../base/dynamic-field-group.component";
import { HandleComponent } from "./handle.component";

@DynamicFormElement({ component: "array" })
@Component({
  selector: "preforms-array-field",
  standalone: true,
  imports: [
    CdkDrag,
    CdkDropList,
    CommonModule,
    CdkDragHandle,
    HandleComponent,
    ReactiveFormsModule,
    DynamicFieldGroupComponent,
  ],
  templateUrl: "./form-array.component.html",
  styleUrl: "./form-array.component.scss",
})
export class FieldArrayComponent
  extends BaseFieldComponent<FormArray, FieldArray>
  implements OnInit
{
  private factoryService = inject(FormFactoryService);
  /** Parent form group */
  get group(): FormGroup {
    return this.control.parent as FormGroup;
  }

  /** FormArray of FormGroups */
  get array(): FormArray<FormGroup> {
    return this.control as FormArray<FormGroup>;
  }

  get addBtnDisabled() {
    if (this.array.disabled) return true;
    if (this.field.maxItems === undefined) return false;
    return this.array.length >= this.field.maxItems;
  }

  get removeBtnDisabled() {
    if (this.array.disabled) return true;
    if (this.field.minItems === undefined) return false;
    return this.array.length <= this.field.minItems;
  }

  ngOnInit(): void {
    this.field.value = Array.isArray(this.field.value) ? this.field.value : [];
    this.field.value.forEach(() => this.add());
    this.array.patchValue(this.field.value);
  }

  /** Adds a new group to the array */
  add(): void {
    if (!this.field.fields) throw new Error("Missing template configuration");
    const row = instantiateArrayRow(this.field.fields, this.array.length);

    const group = this.factoryService.build(row);
    this.array.push(group);

    this.array.markAsTouched();
  }

  /** Deletes a group and its config entry */
  remove(index: number): void {
    this.array.removeAt(index);
  }

  fields(index: number) {
    return instantiateArrayRow(this.field.fields, index);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.array.controls,
      event.previousIndex,
      event.currentIndex,
    );

    moveItemInArray(this.array.value, event.previousIndex, event.currentIndex);
  }
}
