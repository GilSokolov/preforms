import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { CHOICE_STYLES, CONTROL_STYLES, FORM_FIELD_STYLES } from "./native-styles";
import { describe, expect, it } from "vitest";

// Style sources are plain text; assert the token contract without a browser.
const lib = join(__dirname, "../..");
const dirs = [join(lib, "native/fields"), join(lib, "core/fields")];

function files(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory()
      ? files(join(dir, e.name))
      : /\.(ts|css|scss)$/.test(e.name) && !/\.spec\./.test(e.name)
        ? [join(dir, e.name)]
        : [],
  );
}
const sources = dirs.flatMap(files).map((f) => [f, readFileSync(f, "utf8")]);
const all = sources.map(([, s]) => s).join("\n");

const FALLBACKS: Record<string, string> = {
  "--preforms-border": "color-mix(in srgb, currentColor 25%, transparent)",
  "--preforms-radius": "0.5rem",
  "--preforms-field": "Field",
  "--preforms-surface": "Canvas",
  "--preforms-muted": "color-mix(in srgb, currentColor 60%, transparent)",
  "--preforms-danger": "#dc2626",
  "--preforms-accent": "AccentColor",
  "--preforms-on-accent": "AccentColorText",
  "--preforms-gap": "1rem",
  "--preforms-control-pad": "0.5rem",
  "--preforms-dialog-width": "min(90vw, 500px)",
  "--preforms-backdrop": "rgb(0 0 0 / 0.45)",
  "--preforms-pill-radius": "999px",
  "--preforms-array-pad": "0.5rem",
  "--preforms-font-size-sm": "0.85rem",
  "--preforms-line-height": "1.4",
  "--preforms-shadow": "0 8px 24px rgb(0 0 0 / 0.2)",
};

describe("theming tokens", () => {
  it("never declares a token (consumers set them on an ancestor)", () => {
    expect(all).not.toMatch(/^\s*--preforms-(?!row-)[a-z-]+\s*:/m);
  });

  it.each(Object.entries(FALLBACKS))(
    "%s uses its documented fallback",
    (name, fallback) => {
      const uses = all.split(`var(${name}, `).slice(1);
      expect(uses.length).toBeGreaterThan(0);
      for (const rest of uses) expect(rest.startsWith(`${fallback})`)).toBe(true);
    },
  );

  it("no longer references the removed legacy variables", () => {
    expect(all).not.toMatch(
      /--(form-description-color|form-image-radius|divider-color|divider-label-color)/,
    );
  });

  it("keeps the array drag preview inside the form and tokenised", () => {
    const html = readFileSync(
      join(lib, "core/fields/advanced/form-array/form-array.component.html"),
      "utf8",
    );
    expect(html).toContain('cdkDragPreviewContainer="parent"');
    expect(all).toMatch(/\.cdk-drag-preview \{[^}]*var\(--preforms-shadow/);
  });

  it("has no hard-coded colour on the drag handle", () => {
    const h = readFileSync(
      join(lib, "core/fields/advanced/form-array/handle.component.ts"),
      "utf8",
    );
    expect(h).toContain('fill="currentColor"');
    expect(h).not.toContain("grey");
  });

  it("keeps the demo page in sync with the shipped styles", () => {
    const demo = readFileSync(join(__dirname, "../../../../demo/theming.html"), "utf8");
    for (const css of [CONTROL_STYLES, CHOICE_STYLES, FORM_FIELD_STYLES])
      expect(demo).toContain(css);
  });

  it("controls inherit colour and font", () => {
    expect(CONTROL_STYLES).toMatch(/color: inherit;/);
    expect(CONTROL_STYLES).toMatch(/font: inherit;/);
  });
});
