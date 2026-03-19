import {
  Directive,
  ElementRef,
  inject,
  Input,
  OnChanges,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[pfAria]",
})
export class AriaAttributesDirective implements OnChanges {
  @Input("pfAria")
  ariaAttributes?: Record<string, string>;

  private el = inject(ElementRef<HTMLElement>);
  private renderer = inject(Renderer2);

  ngOnChanges(): void {
    if (!this.ariaAttributes) return;
    Object.entries(this.ariaAttributes).forEach(([key, value]) => {
      if (!value) {
        this.renderer.removeAttribute(this.el.nativeElement, key);
      } else {
        this.renderer.setAttribute(this.el.nativeElement, key, String(value));
      }
    });
  }
}
