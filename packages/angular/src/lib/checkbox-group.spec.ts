// @vitest-environment jsdom
import { provideZonelessChangeDetection, Type } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { FormArray, FormControl } from "@angular/forms";
import {
  BrowserTestingModule,
  platformBrowserTesting,
} from "@angular/platform-browser/testing";
import { afterEach, beforeAll, describe, expect, it } from "vitest";
import { EventService } from "@preforms/angular/core";
import { CheckboxGroupFieldComponent as MaterialCheckboxGroup } from "./material/fields/checkbox-group-field.component";
import { CheckboxGroupFieldComponent as NativeCheckboxGroup } from "./native/fields/checkbox-group-field.component";

// Rendering these components compiles their templates, which is what failed
// on Angular 20 when they bound the Angular 21-only [formArray] directive.
const field = {
  id: "f1",
  key: "colors",
  label: "Colors",
  className: "",
  fields: [
    { label: "Red", value: "red", description: "" },
    { label: "Blue", value: "blue", description: "" },
  ],
};

function render(component: Type<any>, values: string[]) {
  const control = new FormArray(values.map((v) => new FormControl(v)));
  TestBed.configureTestingModule({ providers: [provideZonelessChangeDetection(), EventService] });
  const fixture = TestBed.createComponent(component);
  fixture.componentInstance.field = field;
  fixture.componentInstance.control = control;
  fixture.detectChanges();
  return { fixture, control, el: fixture.nativeElement as HTMLElement };
}

describe("checkbox-group components", () => {
  beforeAll(() => {
    TestBed.initTestEnvironment(BrowserTestingModule, platformBrowserTesting(), {
      errorOnUnknownProperties: true,
      errorOnUnknownElements: true,
    });
  });

  afterEach(() => TestBed.resetTestingModule());

  it("native: renders the header and one checkbox per option", () => {
    const { el } = render(NativeCheckboxGroup, []);
    expect(el.querySelector(".preforms-checkbox-group-header")?.textContent).toContain("Colors");
    expect(el.querySelectorAll('input[type="checkbox"]').length).toBe(2);
  });

  it("native: checking and unchecking updates the FormArray", () => {
    const { el, control, fixture } = render(NativeCheckboxGroup, []);
    const [red, blue] = Array.from(el.querySelectorAll<HTMLInputElement>('input[type="checkbox"]'));
    red.click();
    blue.click();
    expect(control.value).toEqual(["red", "blue"]);
    red.click();
    fixture.detectChanges();
    expect(control.value).toEqual(["blue"]);
  });

  it("material: renders one mat-checkbox per option", () => {
    const { el } = render(MaterialCheckboxGroup, []);
    expect(el.querySelector(".preforms-checkbox-group-header")?.textContent).toContain("Colors");
    expect(el.querySelectorAll("mat-checkbox").length).toBe(2);
  });
});
