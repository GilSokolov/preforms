import {
  Component,
  ComponentRef,
  EventEmitter,
  inject,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewContainerRef,
} from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { FieldEventData, FormElement } from "@preforms/ts";
import { BaseFieldComponent } from "./fields/base/base-field.component";
import { LoaderService } from "./services/loader.service";

@Component({
  selector: "preforms-dynamic-field",
  template: "",
})
export class DynamicFieldComponent implements OnInit, OnDestroy {
  @Input() field!: FormElement;
  @Input() control!: AbstractControl;
  @Output() events = new EventEmitter<FieldEventData>();

  private ref!: ComponentRef<BaseFieldComponent<AbstractControl, FormElement>>;

  private vcr = inject(ViewContainerRef);

  private readonly loaderService = inject(LoaderService);

  async ngOnInit() {
    const { component, asyncValidators, validators } =
      await this.loaderService.resolve(this.field.component);

    if (!component)
      throw new Error(`Unknown field type: ${this.field.component}`);

    if (asyncValidators) {
      this.control.addAsyncValidators(asyncValidators);
    }

    if (validators) {
      this.control.addValidators(validators);
    }

    this.ref =
      this.vcr.createComponent<
        BaseFieldComponent<AbstractControl, FormElement>
      >(component);

    this.ref.instance.field = this.field;
    this.ref.instance.control = this.control;
  }

  ngOnDestroy() {
    if (this.ref) this.ref.destroy();
  }
}
