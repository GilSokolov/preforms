# Preforms Roadmap: best form library for Angular

Each step is sized to be one small, reviewable change (about one commit). Steps are
ordered by ROI: earlier tiers unlock adoption and trust, later tiers add depth.
Ids are stable so you can reference them (`SHIP-3`, `A11Y-2`).

Size: **XS** under 30 min, **S** about 1-2 h, **M** about half a day.

## Verified against the code (2026-11-19)

Checked with `npm view` and by reading the source. Steps below are adjusted to match.

- **npm:** `@preforms/ts` 0.1.1 and `@preforms/angular` 0.1.4 are published as `latest`.
  Local `@preforms/angular` is 0.2.0 (unpublished, has breaking theming changes).
  An unrelated-looking unscoped `preforms` 0.1.0 also exists on npm; confirm you own it.
- **Already done:** PR CI with lint, test and an Angular 20/21 matrix; `sideEffects: false`;
  Material as an optional peer; cross-field validation (`CrossFieldValidation` with
  `compareTo`); `hidden`/`disabled`/`required`/`readonly`/`autofocus` field config;
  validation messages as functions (`DEFAULT_VALIDATION_MESSAGES`); a pluggable fetch
  token (`DYNAMIC_FORM_FETCHER`); zoneless in the example app; autocomplete, date-range,
  file, phone, currency, toggle and meter field models; autocomplete and date-range
  Material components.
- **Real gaps found:**
  - **Security:** `calculation` on OutputField runs through `new Function` with `with(data)`
    ([output-field.component.ts:67](packages/angular/src/lib/native/fields/output-field.component.ts:67)),
    and icon expressions use a regex-sanitised `new Function`
    ([safe-fn.ts:82](packages/angular/src/lib/core/utils/safe-fn.ts:82)). The calculation
    is not sandboxed at all, so a form definition from a server or user can run arbitrary
    script. This is now the top item (SAFE-1).
  - Public inputs/outputs still use `@Input`/`@Output` decorators, no signals; only 2 files
    use OnPush.
  - No debounce or request cancellation anywhere (no `debounce`/`switchMap`).
  - ARIA (`aria-invalid`, `aria-describedby`) exists only in the native form field and
    radio, not in Material components.
  - Angular tests are thin: description, theming, checkbox-group, form-row, array-row-state,
    validators and utils. Nothing tests `<preforms>` end to end (render, submit, reset, triggers).
  - `repository`, `homepage` and `bugs` are missing from all package.json files.
  - No component for the `file` field in native or Material; no wizard, tabs, slider,
    rating, OTP, color or chips multi-select.

## How the positioning works

Preforms's edge is *behavior as data*: triggers, projections, calculated outputs,
aggregates, lazy fields. Competitors (Formly, Angular Signal Forms, plain reactive
forms) are strong at shape and weak at behavior. The roadmap therefore (1) gets the
library into people's hands, (2) makes it trustworthy (tests, a11y, docs), (3) makes
it a good Angular citizen (signals, interop), and (4) widens the behavior advantage.

---

## Tier 1: Highest ROI (adoption and trust)

### BUG: known bugs (small, certain to be hit, fix first)
Each bug is test-first: reproduce with a failing spec, fix, keep the spec.

**Status (2026-11-19, uncommitted):** both bugs are fixed with regression specs.
- Done: A1-A6, B1-B4 (B3's message now says buttons take no control and to use `name` or `id`).
- Still open: A7 (remove the assign-after-construction workaround from examples/docs; not searched),
  B5 (button key stays out of the form value), B6 (Material renderer path for buttons; the fix lives in
  the shared `getControl`, but no Material render test exists).
- Found while fixing: the Material select never rendered groups (it now uses `mat-optgroup`), and
  radio, autocomplete and datalist inputs have no group concept, so they now flatten groups
  (`flattenOptions`).
- **Type change to note in the changelog:** `FormField.options` is now
  `(FormFieldOption | FormFieldOptionGroup)[]`. User code that reads `field.options[i].value`
  without narrowing no longer compiles.

**BUG-A: option groups render as the label "[object Object]" when passed to a constructor**

Cause: [form-field.ts:57-62](packages/ts/src/core/models/form-field.ts:57) maps every
`config.options` entry through `new FormFieldOption(opt)` unless it is already a
`FormFieldOption`. A `FormFieldOptionGroup` has `label` and `options` but no `value`, so it
takes the "primitive" branch and gets `toTitleCase(String(group))`. The helper
`normalizeOptions` ([form-field-option.ts](packages/ts/src/utils/form-field-option.ts)) has
the same blind spot (its docs promise group support, but it throws on a group). Assigning
`options` after construction avoids the constructor mapping, which is the current workaround.

| Id | Step | Size | Done when |
|---|---|---|---|
| BUG-A1 | Failing spec: `new SelectField(...)` / `new TextField({ options: [new FormFieldOptionGroup("Fruits", ["apple"])] })` keeps the group, label `"Fruits"` | XS | Spec fails with `[object Object]` today |
| BUG-A2 | In `form-field.ts`, pass `FormFieldOptionGroup` instances through unchanged (use `isOptionGroup`) | XS | A1 passes |
| BUG-A3 | Widen the types: `options` on `FormField` and `FormFieldOptionConfig` accept groups | S | Compiles without casts |
| BUG-A4 | Make `normalizeOptions` honor groups, as its docs say, and share one implementation with the constructor | S | Both paths covered by specs |
| BUG-A5 | Spec: plain-object groups (`{ label, options: [...] }`) from JSON are converted to `FormFieldOptionGroup` | S | JSON-built forms keep groups (matters for server-built forms) |
| BUG-A6 | Spec: the same group renders as an `<optgroup>` in the native and Material select | S | Renders with the group label |
| BUG-A7 | Remove the assign-after-construction workaround from examples and docs | XS | Grep clean |

**BUG-B: `new FieldButton({ key })` throws "Missing control for key"**

Cause: [dynamic-field-group.component.ts:48-52](packages/angular/src/lib/core/fields/base/dynamic-field-group.component.ts:48)
looks up a form control for any element with a `key`, but buttons never get a control. The
class sets `id` and `name` from `key` ([abstract-form-element.ts:53-59](packages/ts/src/core/models/abstract-form-element.ts:53)),
so `key` looks like valid config. The file already special-cases `kind === "button"`
in `rowSize`, but not in `getControl`.

| Id | Step | Size | Done when |
|---|---|---|---|
| BUG-B1 | Failing spec: render `[new TextField({ key: "a" }), new FieldButton({ key: "save", type: "button" })]` and expect no throw | XS | Spec throws today |
| BUG-B2 | Fix: `getControl` returns the group control for elements with `kind === "button"` (and any other non-control element), instead of throwing | XS | B1 passes |
| BUG-B3 | Keep a clear error for genuine misses, e.g. "No control for key 'x'. Add the field to the form or, for buttons, use `name` or `id`" | XS | Message spec |
| BUG-B4 | Spec: `SubmitButton`, `ResetButton`, `ConfirmButton`, `CloseDialogButton` with a `key` also render | S | All four pass |
| BUG-B5 | Spec: a button `key` does not appear in the form value | XS | Value has no button key |
| BUG-B6 | Check the Material renderer takes the same path | XS | Spec passes in both renderers |

### SAFE: security first (found in the audit, highest priority)
| Id | Step | Size | Done when |
|---|---|---|---|
| SAFE-1 | Write a failing test showing `calculation: "fetch('//x')"` / `window` access runs today | XS | Test documents the hole |
| SAFE-2 | Replace `new Function`/`with()` in output-field with a small expression parser (arithmetic, comparison, property paths, a few helpers like `Number`, `Math`) | M | Test from SAFE-1 now fails closed |
| SAFE-3 | Replace `safeEval` in safe-fn.ts with the same parser | M | No `new Function` in `packages/` |
| SAFE-4 | Add an eslint `no-new-func` rule so it can't come back | XS | Lint fails on `new Function` |
| SAFE-5 | Document the expression language and what it forbids | XS | Docs section |
| SAFE-6 | Encode `$value` placeholder substitution in fetch URLs | XS | Test with `a/b?c` |
| SAFE-7 | Ship a default `HttpClient`-based `DYNAMIC_FORM_FETCHER` provider (the token already exists) so interceptors, auth and SSR apply | S | Interceptor sees the request |
| SAFE-8 | Optional fetch allowlist hook (`provideFetchPolicy`) | S | Can block unknown hosts |

### SHIP: get it installable (already on npm: ts 0.1.1, angular 0.1.4)
| Id | Step | Size | Done when |
|---|---|---|---|
| SHIP-1 | Confirm you own the unscoped `preforms` package on npm; decide whether to deprecate or reuse it | XS | Decision noted |
| SHIP-2 | Add `repository`, `bugs`, `homepage` to every package.json (all three are missing) | XS | `npm pack --dry-run` shows full metadata |
| SHIP-3 | Check the angular tarball (`dist/angular`) contains only dist, README, LICENSE; ts already has `files` | XS | Verified |
| SHIP-4 | Decide whether `@angular/cdk` stays a required peer (array drag) or becomes optional | XS | Decision plus README line |
| SHIP-5 | Align `@preforms/ts` peer range with the release you publish | XS | Install in a clean app has no peer warnings |
| SHIP-6 | Add LICENSE copy into each published package | XS | License visible on npm page |
| SHIP-7 | Add Changesets (or release-please) config | S | `pnpm changeset` works |
| SHIP-8 | Add a tag-triggered publish workflow with npm provenance | S | A tag publishes both packages |
| SHIP-9 | Add a `CHANGELOG.md` to `@preforms/ts` (angular already has one) | XS | Both packages have changelogs |
| SHIP-10 | Publish angular 0.2.0 (breaking theming changes are already in the changelog) | XS | `npm view @preforms/angular version` shows 0.2.0 |

### DX: first five minutes
| Id | Step | Size | Done when |
|---|---|---|---|
| DX-1 | Add badges (npm, CI, license, bundle size) to README | XS | Visible at top |
| DX-2 | Put a 10-line "login form" StackBlitz link at the top of README | S | One-click runnable demo |
| DX-3 | README: add a "Preforms vs Reactive Forms vs Formly vs Signal Forms" table, honest | S | Reader can decide in 30 s |
| DX-4 | README: document how to read form value (`valueChanges`/output) in the Quick Start | XS | Quick Start ends with a submit handler |
| DX-5 | README: document how to set initial values | XS | Snippet exists |
| DX-6 | Add `CONTRIBUTING.md` (setup, test, lint, commit style) | S | New contributor can run tests from it |
| DX-7 | Add issue and PR templates | XS | Templates appear on GitHub |
| DX-8 | Add `SECURITY.md` (note `fetchUrl` and expression-string risks) | XS | File exists |

### QUAL: trust signals
| Id | Step | Size | Done when |
|---|---|---|---|
| QUAL-1 | ~~Run CI on PRs for lint, test and an Angular 20/21 matrix~~ **Done** (`.github/workflows/ci.yml`) | - | - |
| QUAL-2 | Add coverage report to `packages/ts` and show % in README | S | Badge shows number |
| QUAL-3 | Commit the untracked `packages/angular/experiments/json-roundtrip.spec.ts` or delete it | XS | `git status` clean |
| QUAL-4 | Add a size-limit check for `@preforms/angular/core` | S | CI fails on regression |
| QUAL-5 | Add an `exports` map sanity test (publint + attw in CI) | S | Both tools pass |

---

## Tier 2: Core quality (what serious users hit in week one)

### TEST: Angular package coverage (largest known gap)
Existing specs cover description, theming tokens, checkbox groups, form-row, array-row
state, validators and utils. None renders `<preforms>` end to end, which these steps add.

| Id | Step | Size | Done when |
|---|---|---|---|
| TEST-1 | Smoke test: `<preforms>` renders a TextField with NATIVE_FORM_ELEMENTS | S | Passing spec |
| TEST-2 | Test: typing in a field updates form value | S | Passing |
| TEST-3 | Test: `required` shows an error after blur | S | Passing |
| TEST-4 | Test: submit emits value only when valid | S | Passing |
| TEST-5 | Test: reset restores initial values | S | Passing |
| TEST-6 | Test: FieldArray add / remove / reorder | M | Passing |
| TEST-7 | Test: OutputField recalculates on dependency change | S | Passing |
| TEST-8 | Test: async validate trigger (mock HttpClient) | M | Passing |
| TEST-9 | Test: FETCH + projection patches options | M | Passing |
| TEST-10 | Test: lazy field loads on demand | S | Passing |
| TEST-11 | Test: dialog open / close triggers | S | Passing |
| TEST-12 | Port the same smoke tests to MATERIAL_FORM_ELEMENTS | M | Passing |
| TEST-13 | Add one Playwright e2e against example-app (login form) | M | Runs in CI |

### API: ergonomics
| Id | Step | Size | Done when |
|---|---|---|---|
| API-1 | Audit and list every public export; mark internal ones `@internal` | S | Doc table exists |
| API-2 | Add a single `provideNativeForms()` / `provideMaterialForms()` alongside the `*_FORM_ELEMENTS` constants | S | One-line setup in README |
| API-3 | Typed form value: `Preforms<T>` infers value type from the fields array | M | `(submit)` payload is typed |
| API-4 | Typed `key` autocomplete in triggers and `for:` lists | M | Typos fail at compile time |
| API-5 | Replace string expressions (`calculation`) with an optional typed function form | M | `calculation: (v) => v.a * v.b` works |
| API-6 | Add a `defineForm()` helper that returns fields plus inferred value type | S | Example uses it |
| API-7 | Consistent naming pass (`FormFieldEventType`, `TriggerAction`) and deprecation aliases | S | Old names still work with a warning |

(Security steps moved to Tier 1 as SAFE-1 to SAFE-8.)

---

## Tier 3: Be a great Angular citizen

### SIG: signals and modern Angular
| Id | Step | Size | Done when |
|---|---|---|---|
| SIG-1 | Expose `value`, `valid`, `dirty`, `touched`, `pending` as signals on a form handle | M | Usable in `computed()` |
| SIG-2 | Template-ref API: `#f="preforms"` gives the form handle | S | Example uses it |
| SIG-3 | Migrate `@Input`/`@Output` in `dynamic-form.component.ts` (`fields`, `formId`, `className`, `submitted`, `submittedData`, `fieldChange`) to `input()`/`output()`; keep the public names | M | No decorators left in core |
| SIG-4 | Add `ChangeDetectionStrategy.OnPush` to components (only 2 files have it) | M | Grep shows all components |
| SIG-5 | Add a spec under `provideZonelessChangeDetection()` (example app already runs zoneless) | S | Spec passes |
| SIG-6 | `[(value)]` two-way binding to a signal | S | Works with `model()` |
| SIG-7 | `[disabled]` and `[readonly]` inputs on the whole form | XS | Works |

### INTEROP: fit into existing apps
| Id | Step | Size | Done when |
|---|---|---|---|
| INTEROP-1 | `ControlValueAccessor` wrapper: use `<preforms>` as a control inside a reactive form | M | `formControlName` works |
| INTEROP-2 | Expose the underlying `FormGroup` read-only for escape hatches | S | Documented |
| INTEROP-3 | Spike: adapter to Angular Signal Forms (`@angular/forms/signals`), decide go/no-go | M | Short written decision |
| INTEROP-4 | Server-side errors: `form.setErrors({ email: "taken" })` | S | Error shows on field |
| INTEROP-5 | Adapter that lets a custom field component use `FormValueControl`-style contract | M | Doc and example |
| INTEROP-6 | Verify SSR and hydration with a form that has FETCH on init | S | No duplicate request |

### SCHEMA: framework-agnostic leverage
| Id | Step | Size | Done when |
|---|---|---|---|
| SCHEMA-1 | Publish the JSON schema for the form definition | S | `$schema` file in package |
| SCHEMA-2 | Document the JSON roundtrip (serialize and rehydrate forms) | S | Docs page; the experiments spec becomes a real test |
| SCHEMA-3 | `fromJsonSchema()` for a basic subset (string, number, enum, required) | M | Test passes |
| SCHEMA-4 | Zod/Valibot adapter: `validate: schema` on a field or the form | M | Example |
| SCHEMA-5 | Standard Schema interface support (covers Zod, Valibot, ArkType at once) | M | One adapter, many libs |

---

## Tier 4: Accessibility and UX (a differentiator most dynamic-form libs fail)

### A11Y
| Id | Step | Size | Done when |
|---|---|---|---|
| A11Y-1 | Run axe on every example page in CI | M | Report produced |
| A11Y-2 | Every native input has a programmatic label (`for`/`id` or `aria-labelledby`) | S | axe clean |
| A11Y-3 | Extend `aria-invalid`/`aria-describedby` (present only in native form-field and radio) to Material components and the remaining native ones | S | axe clean |
| A11Y-4 | Description linking is done in native (tested); add hint linking and the same for Material | XS | Verified |
| A11Y-5 | Error summary with focus management on failed submit | M | Focus moves to first error |
| A11Y-6 | Live region announcements for async validation and calculated outputs | S | Screen reader test notes |
| A11Y-7 | Keyboard reorder for FieldArray (drag-and-drop alternative) | M | Up/down buttons work |
| A11Y-8 | Radio and checkbox groups use `fieldset` + `legend` | S | axe clean |
| A11Y-9 | Respect `prefers-reduced-motion` and forced-colors in native theme | S | Verified |
| A11Y-10 | Add an Accessibility page to the docs | XS | Published |

### UX: behavior polish
| Id | Step | Size | Done when |
|---|---|---|---|
| UX-1 | Configurable error timing (`touched`, `dirty`, `submit`) | S | Option works |
| UX-2 | Disable submit while pending async validation (opt-in) | XS | Works |
| UX-3 | Debounce for async validate trigger (`debounceMs`) | S | Test passes |
| UX-4 | Cancel stale async requests (`switchMap` semantic) | S | Test with out-of-order responses |
| UX-5 | Loading state on fields during FETCH | S | Spinner or `aria-busy` |
| UX-6 | Autofocus first invalid field on submit | XS | Works |
| UX-7 | `autocomplete` attribute on Email/Password/Address fields | XS | Set by default |
| UX-8 | Dirty-form guard: `canDeactivate` helper | S | Router example |

---

## Tier 5: Feature depth (widen the behavior advantage)

### FIELD: field types (audited)
Models already exist for autocomplete, date, date-range, file, phone, currency, toggle,
meter, address/name/city/state/postal/country and more. Autocomplete and date-range have
components in native and/or Material (native has no date-range component).

| Id | Step | Size | Done when |
|---|---|---|---|
| FIELD-1 | Add a matrix to the docs: field model vs native component vs Material component | S | Gaps visible (file, phone, currency models may lack dedicated components) |
| FIELD-2 | Native `file` field component (model exists, no component in either renderer) | M | Renders and sets value |
| FIELD-3 | Material `file` field component | S | Renders |
| FIELD-4 | File field: size and type validation, optional progress | M | Test |
| FIELD-5 | Native date-range component (Material exists) | M | Works |
| FIELD-6 | Autocomplete with server search driven by FETCH + projection (verify what exists first) | M | Example |
| FIELD-7 | Multi-select with chips | M | Native + Material |
| FIELD-8 | Phone field with country picker (uses `@preforms/data`) if the model has no UI | M | Works |
| FIELD-9 | Currency field with formatting if the model has no UI | M | Works |
| FIELD-10 | Rating, slider, color | S each | One PR each |
| FIELD-11 | Rich-text field via lazy loading (reference example, not bundled) | S | Docs recipe |
| FIELD-12 | OTP / PIN code field | S | One PR |

### FLOW: structure and logic
| Id | Step | Size | Done when |
|---|---|---|---|
| FLOW-1 | Check how TOGGLE trigger drives `hidden`; add a docs example, or a declarative `visibleWhen` if it is clumsy | S | Example |
| FLOW-2 | Same for required/disabled (`hidden`/`disabled`/`required` exist as static config) | S | Example |
| FLOW-3 | Cross-field validation exists (`CrossFieldValidation`, `compareTo`); add a docs recipe for password confirm and date ordering, plus a test | S | Recipe plus test |
| FLOW-4 | Multi-step wizard container (steps, per-step validation, back/next) | M | Example |
| FLOW-5 | Wizard progress persistence (draft save to storage) | S | Reload keeps state |
| FLOW-6 | Autosave trigger (debounced) | S | Example |
| FLOW-7 | Nested groups (object values) with typed paths | M | Example |
| FLOW-8 | Tabs / accordion layout container | S | Native + Material |
| FLOW-9 | Repeat group templates (min/max rows, default rows) | S | Option works |
| FLOW-10 | Field-level `valueTransform` (parse/format, e.g. trim, uppercase) | S | Test |

### I18N
| Id | Step | Size | Done when |
|---|---|---|---|
| I18N-1 | `DEFAULT_VALIDATION_MESSAGES` is a constant, English only; add an injection token so apps can override per key and per language | S | Overridable |
| I18N-2 | ~~Message functions~~ **Done** (messages are already `(field) => string`) | - | - |
| I18N-3 | Integrate with Angular `$localize` and a Transloco/ngx-translate recipe | S | Docs |
| I18N-4 | RTL check of native theme | S | Logical properties used |

---

## Tier 6: Tooling and ecosystem

### DOCS
| Id | Step | Size | Done when |
|---|---|---|---|
| DOCS-1 | API reference generated from TSDoc (TypeDoc) | M | Page per export |
| DOCS-2 | "Concepts" page: field, trigger, projection, aggregate in one diagram | S | Published |
| DOCS-3 | Cookbook: 10 recipes (login, signup, address, checkout, wizard, search, etc.) | M | Each is a live example |
| DOCS-4 | Migration guide from Reactive Forms | M | Side-by-side code |
| DOCS-5 | Migration guide from Formly | M | Side-by-side code |
| DOCS-6 | Troubleshooting / FAQ page from real issues | S | Grows over time |
| DOCS-7 | Versioned docs (per major) | M | Switcher exists |
| DOCS-8 | Theming reference listing every `--preforms-*` token | S | Table generated |

### TOOL
| Id | Step | Size | Done when |
|---|---|---|---|
| TOOL-1 | `ng add @preforms/angular` schematic (installs deps, adds provider) | M | Works on fresh app |
| TOOL-2 | Debug panel: show live value, errors, trigger log (dev only) | M | Toggle in example |
| TOOL-3 | Trigger tracing flag (`debug: true` logs each trigger firing) | S | Console output |
| TOOL-4 | Testing helpers package (`@preforms/angular/testing`: `fillField`, `submit`) | M | Used in own tests |
| TOOL-5 | Visual builder (drag fields, export JSON) as a separate app | M+ | Prototype only |
| TOOL-6 | VS Code snippets for common fields | S | Published |
| TOOL-7 | ESLint rule: warn on unknown `key` in `for:` | M | Optional |

### PERF
| Id | Step | Size | Done when |
|---|---|---|---|
| PERF-1 | Benchmark: render 200 fields, measure time and change-detection count | M | Number recorded |
| PERF-2 | Virtualize or defer large arrays (`@defer` for off-screen rows) | M | Measured gain |
| PERF-3 | Memoize trigger-engine dependency graph | M | Benchmark improves |
| PERF-4 | Tree-shake check: unused fields must not enter the bundle | S | size-limit proves it |
| PERF-5 | Ensure Material and native entry points are fully separate chunks | S | Verified |

### COMM: community
| Id | Step | Size | Done when |
|---|---|---|---|
| COMM-1 | Enable GitHub Discussions | XS | On |
| COMM-2 | Label 10 "good first issue" tickets from this roadmap | S | Labeled |
| COMM-3 | Write a launch post (the behavior-as-data angle, Pokémon demo as hook) | M | Published |
| COMM-4 | Submit to Angular community lists and newsletters | S | Submitted |
| COMM-5 | Add "Who uses Preforms" section once there are users | XS | Added |

---

## 1.0.0 gate

Do not tag 1.0.0 until all of these hold:

- BUG-A1 to BUG-A7, BUG-B1 to BUG-B6
- SAFE-1 to SAFE-8
- SHIP-1 to SHIP-10, QUAL-2 to QUAL-5
- TEST-1 to TEST-12
- API-1 to API-4 (public surface frozen)
- A11Y-1 to A11Y-5
- DOCS-1 to DOCS-4

## Suggested first week (in order)

1. BUG-A1 to BUG-A3 and BUG-B1 to BUG-B3 (the two known bugs, each with its regression test)
1. SAFE-1 to SAFE-4 (close the `new Function` hole before more people install it)
2. QUAL-3, SHIP-1 to SHIP-6 (clean the tree, metadata, one sitting)
3. DX-1, DX-4, DX-5 (README fixes)
4. TEST-1 to TEST-4 (first end-to-end Angular tests)
5. SHIP-7 to SHIP-10 (release pipeline, publish 0.2.0)
6. SAFE-5 to SAFE-8
