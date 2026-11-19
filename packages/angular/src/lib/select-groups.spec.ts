// @vitest-environment jsdom
import { provideZonelessChangeDetection, Type } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { FormControl } from "@angular/forms";
import {
  BrowserTestingModule,
  platformBrowserTesting,
} from "@angular/platform-browser/testing";
import { FormFieldOptionGroup, SelectField } from "@preforms/ts";
import { afterEach, beforeAll, describe, expect, it } from "vitest";
import { EventService } from "@preforms/angular/core";
import { SelectFieldComponent as MaterialSelect } from "./material/fields/select-field.component";
import { SelectFieldComponent as NativeSelect } from "./native/fields/select.field.component";

// Regression: groups passed through the constructor rendered as "[object Object]"
// (native) or as an option with no value (Material, which never rendered groups).
const field = new SelectField({
  key: "food",
  options: [
    "none",
    new FormFieldOptionGroup("Fruits", ["apple", "banana"]),
    { label: "Veg", options: ["kale"], disabled: true },
  ],
});

function render(component: Type<any>) {
  TestBed.configureTestingModule({
    providers: [provideZonelessChangeDetection(), EventService],
  });
  const fixture = TestBed.createComponent(component);
  fixture.componentInstance.field = field;
  fixture.componentInstance.control = new FormControl("");
  fixture.detectChanges();
  return { fixture, el: fixture.nativeElement as HTMLElement };
}

describe("select option groups", () => {
  beforeAll(() => {
    TestBed.initTestEnvironment(BrowserTestingModule, platformBrowserTesting(), {
      errorOnUnknownProperties: true,
      errorOnUnknownElements: true,
    });
  });

  afterEach(() => TestBed.resetTestingModule());

  it("native: renders each group as an <optgroup> with its label and options", () => {
    const { el } = render(NativeSelect);
    const groups = Array.from(el.querySelectorAll("optgroup"));

    expect(groups.map((g) => g.label)).toEqual(["Fruits", "Veg"]);
    expect(groups[0].querySelectorAll("option").length).toBe(2);
    expect(groups[1].disabled).toBe(true);
    expect(el.textContent).not.toContain("[object Object]");
  });

  it("material: renders each group as a mat-optgroup with its label", () => {
    const { fixture, el } = render(MaterialSelect);
    el.querySelector<HTMLElement>(".mat-mdc-select-trigger")?.click();
    fixture.detectChanges();

    // The panel is rendered in the CDK overlay, outside the fixture element.
    const groups = Array.from(document.querySelectorAll("mat-optgroup"));
    expect(groups.map((g) => g.textContent?.trim().split(/\s+/)[0])).toEqual([
      "Fruits",
      "Veg",
    ]);
    expect(document.body.textContent).not.toContain("[object Object]");
  });
});
