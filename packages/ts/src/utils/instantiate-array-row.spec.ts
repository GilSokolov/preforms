import { describe, expect, it } from "vitest";

import {
  instantiateArrayRow,
  reindexArrayRow,
} from "./instantiate-array-row";
import type { FormElement } from "../core";

/** Minimal plain-object configs, shaped like the models' own output. */
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
          target: "tsConfig[$index]",
        },
      ],
    },
    {
      kind: "field",
      component: "input",
      id: "value",
      key: "value",
    },
    {
      kind: "wrapper",
      component: "fieldset",
      id: "tsConfig",
      key: "tsConfig",
      hidden: true,
      fields: [
        { kind: "field", component: "input", id: "unit", key: "unit" },
      ],
    },
    {
      kind: "group",
      component: "group",
      id: "meta",
      key: "meta",
      fields: [
        { kind: "field", component: "input", id: "note", key: "note" },
      ],
    },
  ] as unknown as FormElement[];

describe("instantiateArrayRow", () => {
  it("builds a new object graph on every call, so the caller must keep one", () => {
    const fields = template();

    const first = instantiateArrayRow(fields, 0);
    const second = instantiateArrayRow(fields, 0);

    // identical in content, unrelated in identity: whoever registers a row with
    // FormStateService has to render that same instance (see FieldArrayComponent.rows)
    expect(second).toEqual(first);
    expect(second[0]).not.toBe(first[0]);

    (first[1] as any).hidden = true;
    expect((second[1] as any).hidden).toBeUndefined();
  });

  it("indexes field, group, array and wrapper ids", () => {
    const [select, value, wrapper, group] = instantiateArrayRow(template(), 0);

    expect(select.id).toBe("type[0]");
    expect(value.id).toBe("value[0]");
    expect(group.id).toBe("meta[0]");
    expect(wrapper.id).toBe("tsConfig[0]");
  });

  it("indexes the children of a wrapper as well", () => {
    const [, , wrapper] = instantiateArrayRow(template(), 2);

    expect(wrapper.id).toBe("tsConfig[2]");
    expect((wrapper as any).fields[0].id).toBe("unit[2]");
  });

  it("resolves [$index] trigger targets to an id in the same row", () => {
    const row = instantiateArrayRow(template(), 1);
    const target = (row[0] as any).triggers[0].target;
    const ids = row.map((f) => f.id);

    expect(target).toBe("tsConfig[1]");
    expect(ids).toContain(target);
  });

  it("does not index an id twice when the author wrote [$index] themselves", () => {
    const [field] = instantiateArrayRow(
      [
        {
          kind: "field",
          component: "input",
          id: "unit[$index]",
          key: "unit",
        },
      ] as unknown as FormElement[],
      3,
    );

    expect(field.id).toBe("unit[3]");
  });

  it("bakes the creation index into ids, so a row's id is stale once it moves", () => {
    const rowAtIndex1 = instantiateArrayRow(template(), 1);
    // the row survives remove(0) and is now drawn at index 0
    const sameRowRedrawn = instantiateArrayRow(template(), 0);

    expect(rowAtIndex1[0].id).toBe("type[1]");
    expect(sameRowRedrawn[0].id).toBe("type[0]");
  });

  it("drops the prototype of model instances", () => {
    class SelectField {
      kind = "field" as const;
      component = "select";
      id = "type";
      key = "type";
      get labelText() {
        return "Type";
      }
    }

    const [row] = instantiateArrayRow(
      [new SelectField() as unknown as FormElement],
      0,
    );

    expect(row instanceof SelectField).toBe(false);
    expect((row as any).labelText).toBeUndefined();
  });

  it("indexes decorative and button elements too", () => {
    const [title, button] = instantiateArrayRow(
      [
        { kind: "decorative", component: "title", id: "heading" },
        { kind: "button", component: "button", id: "remove-btn" },
      ] as unknown as FormElement[],
      2,
    );

    expect(title.id).toBe("heading[2]");
    expect(button.id).toBe("remove-btn[2]");
  });
});

describe("reindexArrayRow", () => {
  it("re-points ids, trigger targets and value paths", () => {
    const tpl = template();
    const row = instantiateArrayRow(tpl, 1);

    reindexArrayRow(tpl, row, 1, 0);

    expect(row.map((f) => f.id)).toEqual([
      "type[0]",
      "value[0]",
      "tsConfig[0]",
      "meta[0]",
    ]);
    expect((row[0] as any).triggers[0].target).toBe("tsConfig[0]");
    expect((row[2] as any).fields[0].id).toBe("unit[0]");
    expect((row[3] as any).fields[0].id).toBe("note[0]");
  });

  it("keeps the same objects and their runtime state", () => {
    const tpl = template();
    const row = instantiateArrayRow(tpl, 1);
    const value = row[1];

    (value as any).hidden = true;
    (value as any).label = "Patched by a trigger";

    reindexArrayRow(tpl, row, 1, 0);

    expect(row[1]).toBe(value);
    expect((value as any).hidden).toBe(true);
    expect((value as any).label).toBe("Patched by a trigger");
    expect(value.id).toBe("value[0]");
  });

  it("leaves strings the template did not templatise alone", () => {
    const tpl = [
      {
        kind: "field",
        component: "input",
        id: "unit",
        key: "unit",
        label: "Step [1] of 3",
        hint: "row [$index]",
      },
    ] as unknown as FormElement[];

    const row = instantiateArrayRow(tpl, 1);

    reindexArrayRow(tpl, row, 1, 0);

    expect((row[0] as any).label).toBe("Step [1] of 3");
    expect((row[0] as any).hint).toBe("row [0]");
  });

  it("is a no-op when the index has not changed", () => {
    const tpl = template();
    const row = instantiateArrayRow(tpl, 1);
    const before = row.map((f) => f.id);

    reindexArrayRow(tpl, row, 1, 1);

    expect(row.map((f) => f.id)).toEqual(before);
  });
});
