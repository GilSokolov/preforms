import { CommonModule } from "@angular/common";
import { Component, inject, OnDestroy, OnInit } from "@angular/core";
import { FormArray, FormGroup, ReactiveFormsModule } from "@angular/forms";

import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from "@angular/cdk/drag-drop";

import {
  FieldArray,
  FormElement,
  instantiateArrayRow,
  reindexArrayRow,
} from "@preforms/ts";
import { DynamicFormElement } from "../../../decorators";
import {
  FieldRegistration,
  FormFactoryService,
} from "../../../services/form-factory.service";
import { FormStateService } from "../../../services/state.service";
import { BaseFieldComponent } from "../../base/base-field.component";
import { DynamicFieldGroupComponent } from "../../base/dynamic-field-group.component";
import { HandleComponent } from "./handle.component";

/** One instantiated row: what is rendered, what is registered, and where it sits. */
interface ArrayRow {
  fields: FormElement[];
  registrations: FieldRegistration[];
  index: number;
}

@DynamicFormElement({ component: "array" })
@Component({
  selector: "preforms-array",
  standalone: true,
  imports: [
    CdkDrag,
    CdkDropList,
    CommonModule,
    HandleComponent,
    ReactiveFormsModule,
    DynamicFieldGroupComponent,
  ],
  templateUrl: "./form-array.component.html",
  styleUrl: "./form-array.component.scss",
})
export class FieldArrayComponent
  extends BaseFieldComponent<FormArray, FieldArray>
  implements OnInit, OnDestroy
{
  private factoryService = inject(FormFactoryService);
  private stateService = inject(FormStateService);

  /**
   * The instantiated rows, in render order. Each one holds the very object
   * graph that was registered with FormStateService, so state written by a
   * trigger (hidden, label, options, ...) is visible to the template.
   *
   * Indices are kept compact: `$index` is a position, both as an id suffix
   * (`price[1]`) and as a value path (`items[1].price`), so a row that moves
   * has to be re-pointed at its new slot. See syncIndices().
   */
  private rows: ArrayRow[] = [];

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

  ngOnDestroy(): void {
    this.rows.forEach((row) => this.unregister(row));
  }

  /** Adds a new group to the array */
  add(): void {
    if (!this.field.fields) throw new Error("Missing template configuration");

    const index = this.rows.length;
    const fields = instantiateArrayRow(this.field.fields, index);

    const { group, registrations } = this.factoryService.buildRow(fields);

    this.rows.push({ fields, registrations, index });
    this.array.push(group);

    this.array.markAsTouched();

    this.emit("input");
  }

  /** Deletes a group and its config entry */
  remove(index: number): void {
    this.array.removeAt(index);

    const [removed] = this.rows.splice(index, 1);

    if (removed) this.unregister(removed);

    this.syncIndices();

    this.emit("input");
  }

  fields(index: number): FormElement[] {
    return this.rows[index]?.fields ?? [];
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.array.controls,
      event.previousIndex,
      event.currentIndex,
    );

    moveItemInArray(this.array.value, event.previousIndex, event.currentIndex);

    moveItemInArray(this.rows, event.previousIndex, event.currentIndex);

    this.syncIndices();
  }

  /**
   * Re-points every row whose position changed, then files it in the state
   * index under its new ids. Unregistering happens for all of them first: in a
   * reorder two rows swap ids, and a row must never be filed under an id a
   * sibling still holds.
   */
  private syncIndices(): void {
    const moved = this.rows.filter((row, position) => row.index !== position);

    if (!moved.length) return;

    moved.forEach((row) => this.unregister(row));

    moved.forEach((row) => {
      const position = this.rows.indexOf(row);

      reindexArrayRow(this.field.fields!, row.fields, row.index, position);

      row.index = position;

      row.registrations.forEach(({ field, control }) =>
        this.stateService.set(field, control),
      );
    });
  }

  private unregister(row: ArrayRow): void {
    row.registrations.forEach(({ field }) =>
      this.stateService.unregister(field),
    );
  }
}
