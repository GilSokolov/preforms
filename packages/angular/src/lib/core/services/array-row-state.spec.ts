import { Injector } from "@angular/core";
import { beforeEach, describe, expect, it } from "vitest";

import type { FormElement } from "@preforms/ts";
import { instantiateArrayRow, reindexArrayRow } from "@preforms/ts";

import { FormFactoryService } from "./form-factory.service";
import { FormStateService } from "./state.service";
import { FormValidationService } from "./validation.service";

/**
 * One array row template: a select that listens on its own row, a sibling
 * input, a keyed wrapper and an output whose calculation is a value path.
 */
const template = (): FormElement[] =>
  [
    {
      kind: "field",
      component: "select",
      id: "type",
      key: "type",
      value: "value",
      triggers: [
        {
          on: "change",
          do: "toggle",
          toggle: ["hidden"],
          source: "value[$index]",
          target: ["value[$index]", "tsConfig[$index]"],
        },
      ],
    },
    { kind: "field", component: "input", id: "value", key: "value" },
    {
      kind: "wrapper",
      component: "fieldset",
      id: "tsConfig",
      key: "tsConfig",
      hidden: true,
      fields: [{ kind: "field", component: "input", id: "unit", key: "unit" }],
    },
    {
      kind: "field",
      component: "output",
      id: "doubled",
      key: "doubled",
      for: ["value[$index]"],
      calculation: "rows[$index].value * 2",
    },
  ] as unknown as FormElement[];

describe("array row registration vs rendering", () => {
  let state: FormStateService;
  let factory: FormFactoryService;

  /** The component's own `rows`, modelled on FieldArrayComponent. */
  interface Row {
    fields: FormElement[];
    registrations: { field: FormElement; control: any }[];
    index: number;
  }

  let tpl: FormElement[];
  let rows: Row[];

  /** What FieldArrayComponent.add() does. */
  const add = () => {
    const index = rows.length;
    const fields = instantiateArrayRow(tpl, index);
    const { group, registrations } = factory.buildRow(fields);
    const row: Row = { fields, registrations, index };
    rows.push(row);
    return { row, group };
  };

  /** What FieldArrayComponent.syncIndices() does. */
  const syncIndices = () => {
    const moved = rows.filter((row, position) => row.index !== position);
    moved.forEach((row) =>
      row.registrations.forEach(({ field }) => state.unregister(field)),
    );
    moved.forEach((row) => {
      const position = rows.indexOf(row);
      reindexArrayRow(tpl, row.fields, row.index, position);
      row.index = position;
      row.registrations.forEach(({ field, control }) =>
        state.set(field, control),
      );
    });
  };

  /** What FieldArrayComponent.remove() does. */
  const remove = (index: number) => {
    const [removed] = rows.splice(index, 1);
    removed.registrations.forEach(({ field }) => state.unregister(field));
    syncIndices();
  };

  /** What the template's [fields]="fields(i)" does. */
  const drawn = (index: number) => rows[index]?.fields ?? [];

  /** What FormService.toggle() does to the registered field. */
  const toggle = (id: string, props: string[]) => {
    const res = state.get(id);
    if (!res) return false;
    props.forEach((p) => ((res.field as any)[p] = !(res.field as any)[p]));
    return true;
  };

  beforeEach(() => {
    const injector = Injector.create({
      providers: [
        { provide: FormStateService, useClass: FormStateService, deps: [] },
        {
          provide: FormValidationService,
          useClass: FormValidationService,
          deps: [],
        },
        { provide: FormFactoryService, useClass: FormFactoryService, deps: [] },
      ],
    });

    state = injector.get(FormStateService);
    factory = injector.get(FormFactoryService);
    rows = [];
    tpl = template();
  });

  it("draws the very row it registered", () => {
    const { row } = add();

    expect(state.get("value[0]")!.field).toBe(row.fields[1]);
    expect(state.get("value[0]")!.field).toBe(drawn(0)[1]);
  });

  it("a sibling toggle inside a row reaches the drawn field", () => {
    add();

    expect(toggle("value[0]", ["hidden"])).toBe(true);

    // what [hidden]="field.hidden" reads
    expect((drawn(0)[1] as any).hidden).toBe(true);
  });

  it("resolves a keyed wrapper by its indexed trigger target", () => {
    add();

    expect(state.get("tsConfig[0]")).toBeDefined();
    expect(state.get("tsConfig")).toBeUndefined();
    expect(toggle("tsConfig[0]", ["hidden"])).toBe(true);
    expect((drawn(0)[2] as any).hidden).toBe(false);
  });

  it("gives each row its own keyed wrapper entry", () => {
    const first = add();
    const second = add();

    expect(state.get("tsConfig[0]")!.field).toBe(first.row.fields[2]);
    expect(state.get("tsConfig[1]")!.field).toBe(second.row.fields[2]);

    expect(state.get("tsConfig[0]")!.control).toBe(first.group.get("tsConfig"));
    expect(state.get("tsConfig[1]")!.control).toBe(second.group.get("tsConfig"));
  });

  it("drops a removed row from the state index", () => {
    add();
    const second = add();

    remove(0);

    // the removed row is gone, the survivor moved down into slot 0
    expect(state.get("value[1]")).toBeUndefined();
    expect(state.get("value[0]")!.field).toBe(second.row.fields[1]);
    expect(drawn(0)[1]).toBe(second.row.fields[1]);
    expect(drawn(0)[1].id).toBe("value[0]");
  });

  it("keeps ids compact, so add() after a removal cannot collide", () => {
    add();
    const second = add();

    remove(0);
    const third = add();

    expect(state.get("value[0]")!.field).toBe(second.row.fields[1]);
    expect(state.get("value[1]")!.field).toBe(third.row.fields[1]);
    expect(third.row.fields[1].id).toBe("value[1]");
  });

  it("keeps trigger state on a row that moves", () => {
    add();
    const second = add();

    toggle("value[1]", ["hidden"]);
    remove(0);

    // same object, new id, hidden still set
    expect(drawn(0)[1]).toBe(second.row.fields[1]);
    expect(drawn(0)[1].id).toBe("value[0]");
    expect((drawn(0)[1] as any).hidden).toBe(true);
  });

  it("re-points [$index] targets and value paths when a row moves", () => {
    add();
    const second = add();

    expect((second.row.fields[0] as any).triggers[0].target).toEqual([
      "value[1]",
      "tsConfig[1]",
    ]);
    expect((second.row.fields[3] as any).calculation).toBe(
      "rows[1].value * 2",
    );

    remove(0);

    expect((second.row.fields[0] as any).triggers[0].target).toEqual([
      "value[0]",
      "tsConfig[0]",
    ]);
    expect((second.row.fields[3] as any).calculation).toBe(
      "rows[0].value * 2",
    );
  });

  it("swaps two rows cleanly on a reorder", () => {
    const first = add();
    const second = add();

    rows.reverse();
    syncIndices();

    expect(state.get("value[0]")!.field).toBe(second.row.fields[1]);
    expect(state.get("value[1]")!.field).toBe(first.row.fields[1]);
    expect(state.get("value[0]")!.control).toBe(second.group.get("value"));
    expect(state.get("value[1]")!.control).toBe(first.group.get("value"));
  });

  it("unregisters a row's listeners along with the row", () => {
    add();
    const second = add();

    // the select listens on its own row's ids
    expect(state.getListeners("value[1]")).toBeDefined();

    remove(1);

    expect(state.getListeners("value[1]")).toBeUndefined();
    expect(state.get("type[1]")).toBeUndefined();
    expect(rows).toHaveLength(1);
    expect(second.row.index).toBe(1);
  });

});
