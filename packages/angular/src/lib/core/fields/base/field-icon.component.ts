import {
  Component,
  ComponentRef,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Type,
  ViewContainerRef,
} from "@angular/core";
import { AbstractControl } from "@angular/forms";
import {
  FieldButton,
  FormField,
  FormFieldEventType,
  FormFieldIcon,
  SelectField,
} from "@preforms/ts";
import { FieldActionService, FormService } from "../../services";
import { FIELD_ICON_TEMPLATES } from "../../tokens";
import { safeEval } from "../../utils";

@Component({
  selector: "preforms-field-icon",
  template: ``,
})
export class FieldIconComponent implements OnInit, OnDestroy {
  @Input() icon!: FormFieldIcon;
  @Input() field!: FormField | FieldButton | SelectField;
  @Input() control!: AbstractControl;

  private readonly fieldActionService = inject(FieldActionService);
  private readonly formService = inject(FormService);
  private readonly vcr = inject(ViewContainerRef);
  private readonly template = inject<Type<any> | null>(FIELD_ICON_TEMPLATES, {
    optional: true,
  });

  private ref?: ComponentRef<any>;

  get isButton(): boolean {
    return !!(this.icon.expressions || this.icon.action || this.icon.emit);
  }

  ngOnInit(): void {
    if (!this.template) return;

    this.ref = this.vcr.createComponent(this.template);
    this.setupDynamicComponent();
  }

  ngOnDestroy(): void {
    this.ref?.destroy();
  }

  isVisible(): boolean {
    if (!this.icon.visible) return true;

    try {
      return !!safeEval(this.field, this.icon, this.control, this.icon.visible);
    } catch {
      return false;
    }
  }

  handleClick(): void {
    const previousValue = this.control.value;

    if (this.icon.emit) {
      this.formService.emitFieldEvent(
        this.icon.emit,
        this.field,
        previousValue,
      );
      return;
    }

    if (this.icon.action) {
      this.executeAction(this.icon.action);
    }

    this.evaluateExpressions();

    if (this.control.value !== previousValue) {
      this.formService.emitFieldEvent(
        FormFieldEventType.CHANGE,
        this.field,
        this.control,
      );
    }
  }

  private setupDynamicComponent(): void {
    if (!this.ref) return;

    const instance = this.ref.instance;
    instance.icon = this.icon;
    instance.visible = this.isVisible.bind(this);
    instance.field = this.field;
    instance.control = this.control;
    instance.type = this.isButton ? "button" : "icon";
    instance.handler = () => this.handleClick();
  }

  private evaluateExpressions(): void {
    this.icon.expressions?.forEach((expr) => {
      try {
        safeEval(this.field, this.icon, this.control, expr);
      } catch (err) {
        console.error("Safe expression error:", err);
      }
    });
  }

  private executeAction(action: string): void {
    this.fieldActionService.execute(action, {
      field: this.field,
      control: this.control,
      icon: this.icon,
    });
  }
}
