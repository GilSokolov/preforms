import { Component, inject, OnDestroy } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { FormFieldEventType, transform } from "@preforms/ts";
import { IframeField } from "@preforms/ts/external";
import { DynamicFormElement } from "../../decorators";
import { BaseFieldComponent } from "../base";

@DynamicFormElement({ component: "iframe" })
@Component({
  selector: "preforms-iframe-field",
  template: `
    <iframe
      [src]="safeSrc"
      [attr.sandbox]="field.sandbox"
      [attr.allow]="field.allow"
    ></iframe>
  `,
})
export class IframeFieldComponent
  extends BaseFieldComponent<AbstractControl, IframeField>
  implements OnDestroy
{
  private sanitizer = inject(DomSanitizer);

  get safeSrc() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.field.src);
  }

  private onMessage = (event: MessageEvent) => {
    if (event.origin !== this.field.messageOrigin) return;

    const value = this.field.transform
      ? transform(this.field.transform, event.data)
      : event.data;

    this.control.setValue(value);
    this.emit(FormFieldEventType.CHANGE);
  };

  override afterFirstRender() {
    super.afterFirstRender();
    window.addEventListener("message", this.onMessage);
  }

  ngOnDestroy() {
    window.removeEventListener("message", this.onMessage);
  }
}
