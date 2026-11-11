// @vitest-environment jsdom
import { Component, provideZonelessChangeDetection } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { FormControl } from "@angular/forms";
import {
  BrowserTestingModule,
  platformBrowserTesting,
} from "@angular/platform-browser/testing";
import { afterEach, beforeAll, describe, expect, it } from "vitest";
import { FormFieldComponent } from "./form-field.component";

@Component({
  imports: [FormFieldComponent],
  template: `<preforms-form-field [field]="field" [control]="control">
    <input id="f1" />
  </preforms-form-field>`,
})
class Host {
  field: any = { id: "f1", label: "Name" };
  control = new FormControl("");
}

function render(field: any) {
  TestBed.configureTestingModule({ providers: [provideZonelessChangeDetection()] });
  const fixture = TestBed.createComponent(Host);
  fixture.componentInstance.field = field;
  fixture.detectChanges();
  return fixture.nativeElement as HTMLElement;
}

describe("FormFieldComponent description", () => {
  beforeAll(() => {
    try {
      TestBed.initTestEnvironment(BrowserTestingModule, platformBrowserTesting());
    } catch {
      // already initialised by another spec in this worker
    }
  });
  afterEach(() => TestBed.resetTestingModule());

  it("renders the description and links it to the control", () => {
    const el = render({ id: "f1", label: "Name", description: "Shown to users" });
    const hint = el.querySelector(".preforms-field-description")!;
    expect(hint.textContent!.trim()).toBe("Shown to users");
    expect(el.querySelector("input")!.getAttribute("aria-describedby")).toBe(hint.id);
  });

  it("renders nothing without a description", () => {
    const el = render({ id: "f1", label: "Name" });
    expect(el.querySelector(".preforms-field-description")).toBeNull();
    expect(el.querySelector("input")!.hasAttribute("aria-describedby")).toBe(false);
  });
});
