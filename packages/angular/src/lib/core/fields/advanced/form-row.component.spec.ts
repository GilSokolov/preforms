// @vitest-environment jsdom
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { provideZonelessChangeDetection } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { FormControl, FormGroup } from "@angular/forms";
import {
  BrowserTestingModule,
  platformBrowserTesting,
} from "@angular/platform-browser/testing";
import { afterEach, beforeAll, describe, expect, it } from "vitest";
import { FieldButton, FormRow, TextField, SelectField } from "@preforms/ts";
import { InputFieldComponent } from "../../../native/fields/input-field.component";
import { SelectFieldComponent } from "../../../native/fields/select.field.component";
import { FieldButtonComponent } from "../../../native/fields/button-field.component";
import { MatInputFieldComponent } from "../../../material/fields/input-field.component";
import { SelectFieldComponent as MatSelect } from "../../../material/fields/select-field.component";
import { EventService } from "../../services/event.service";
import { LoaderService } from "../../services/loader.service";
import { DynamicFieldGroupComponent } from "../base/dynamic-field-group.component";
import { FormRowComponent } from "./form-row.component";

const rowStyles = readFileSync(
  resolve(__dirname, "../base/dynamic-field-group.component.css"),
  "utf8",
);

async function render(field: FormRow, material = false, row = true) {
  TestBed.configureTestingModule({
    providers: [
      provideZonelessChangeDetection(),
      EventService,
      {
        provide: LoaderService,
        useValue: {
          resolve: async (type: string) => ({
            component: {
              input: material ? MatInputFieldComponent : InputFieldComponent,
              select: material ? MatSelect : SelectFieldComponent,
              button: FieldButtonComponent,
            }[type],
          }),
        },
      },
    ],
  });
  // Vitest does not load Angular external component resources.
  TestBed.overrideComponent(DynamicFieldGroupComponent, {
    set: { styleUrl: undefined, styles: [rowStyles] },
  });
  const control = new FormGroup(
    Object.fromEntries(
      field.fields.filter((f) => f.key).map((f) => [f.key!, new FormControl("")]),
    ),
  );
  if (row) {
    const fixture = TestBed.createComponent(FormRowComponent);
    fixture.componentInstance.field = field;
    fixture.componentInstance.control = control;
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    return { fixture, el: fixture.nativeElement as HTMLElement };
  }
  const fixture = TestBed.createComponent(DynamicFieldGroupComponent);
  fixture.componentInstance.fields = field.fields;
  fixture.componentInstance.control = control;
  fixture.detectChanges();
  await fixture.whenStable();
  fixture.detectChanges();
  return { fixture, el: fixture.nativeElement as HTMLElement };
}

describe("FormRow layout", () => {
  beforeAll(() => {
    TestBed.initTestEnvironment(BrowserTestingModule, platformBrowserTesting());
  });
  afterEach(() => TestBed.resetTestingModule());

  for (const material of [false, true]) {
    it(`${material ? "Material" : "native"}: sizes the actual wrappers around loaded controls`, async () => {
      const { el } = await render(
        new FormRow([
          new SelectField({ key: "method", options: [] }),
          new TextField({ key: "url", className: "url-field" }),
          new FieldButton({ type: "button", label: "Reset" }),
        ]),
        material,
      );
      const items = el.querySelectorAll(".preforms-row-layout > div");
      expect(Array.from(items, (item) => item.getAttribute("data-preforms-row-size")))
        .toEqual(["select", "grow", "compact"]);
      expect(items[0].querySelector(material ? "mat-select" : "select")).not.toBeNull();
      expect(items[1].querySelector("input")).not.toBeNull();
      expect(items[1].classList.contains("url-field")).toBe(true);
      expect(items[2].querySelector("button")?.textContent).toContain("Reset");
    });
  }

  it("preserves alignment, gap, and configurable select sizing", async () => {
    const { el } = await render(new FormRow([new TextField({ key: "name" })], {
      position: "end",
      gap: "12px",
      style: { "--preforms-row-select-flex": "0 1 9rem" },
    }));
    const group = el.querySelector<HTMLElement>("preforms-group")!;
    expect(group.style.justifyContent).toBe("end");
    expect(group.style.gap).toBe("12px");
    expect(group.style.getPropertyValue("--preforms-row-select-flex")).toBe("0 1 9rem");
  });

  it("keeps hidden fields out of layout when visibility changes", async () => {
    const input = new TextField({ key: "name", hidden: true });
    const { fixture, el } = await render(new FormRow([input]));
    const item = el.querySelector<HTMLElement>(".preforms-row-item")!;
    expect(item.hidden).toBe(true);
    input.hidden = false;
    fixture.changeDetectorRef.markForCheck();
    fixture.detectChanges();
    expect(item.hidden).toBe(false);
  });

  it("leaves ordinary groups without row sizing", async () => {
    const { el } = await render(new FormRow([new TextField({ key: "name" })]), false, false);
    expect(el.querySelector(".preforms-row-item")).toBeNull();
    expect(el.hasAttribute("data-preforms-row-size")).toBe(false);
    expect(el.querySelector("input")).not.toBeNull();
  });
});
