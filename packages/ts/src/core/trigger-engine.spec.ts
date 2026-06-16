import { describe, expect, it } from "vitest";
import { TriggerEngine } from "./trigger-engine";

describe("TriggerEngine smoke test", () => {
  it("constructs without errors", () => {
    const engine = new TriggerEngine({
      getValues: () => ({}),
      requestSubmit: () => {},
      requestReset: () => {},
      fetch: () => {},
      patchValue: () => {},
      updateState: () => {},
      validate: () => {},
      toggleFieldState: () => {},
      openDialog: () => {},
      closeDialog: () => {},
      load: () => {},
    });

    expect(engine).toBeInstanceOf(TriggerEngine);
  });
});
