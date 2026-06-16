import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { TriggerEngine } from "./trigger-engine";
import { TriggerContext } from "./interfaces/trigger-context";
import { FormFieldEventType, FieldEventData } from "./events/field-event-data";
import { FormFieldTrigger, TriggerAction } from "./interfaces/triggers";

function createContext(values: object = {}): TriggerContext {
  return {
    getValues: vi.fn(() => values),
    requestSubmit: vi.fn(),
    requestReset: vi.fn(),
    fetch: vi.fn(),
    patchValue: vi.fn(),
    updateState: vi.fn(),
    validate: vi.fn(),
    toggleFieldState: vi.fn(),
    openDialog: vi.fn(),
    closeDialog: vi.fn(),
    load: vi.fn(),
  };
}

function createEvent(overrides: Partial<FieldEventData> = {}): FieldEventData {
  return {
    type: FormFieldEventType.CHANGE,
    id: "field-1",
    name: "field-1",
    value: "hello",
    ...overrides,
  };
}

describe("TriggerEngine", () => {
  it("constructs without errors", () => {
    const engine = new TriggerEngine(createContext());
    expect(engine).toBeInstanceOf(TriggerEngine);
  });

  describe("event type filtering", () => {
    it("only runs triggers matching the event type", () => {
      const context = createContext();
      const engine = new TriggerEngine(context);

      const triggers: FormFieldTrigger[] = [
        { on: FormFieldEventType.BLUR, action: TriggerAction.SUBMIT },
        { on: FormFieldEventType.CHANGE, action: TriggerAction.SUBMIT },
      ];

      engine.runFieldTriggers(triggers, createEvent({ type: FormFieldEventType.CHANGE }));

      expect(context.requestSubmit).toHaveBeenCalledTimes(1);
    });
  });

  describe("source filtering", () => {
    it("runs the trigger when no source is specified", () => {
      const context = createContext();
      const engine = new TriggerEngine(context);

      const triggers: FormFieldTrigger[] = [
        { on: FormFieldEventType.CHANGE, action: TriggerAction.SUBMIT },
      ];

      engine.runFieldTriggers(triggers, createEvent(), "some-source");

      expect(context.requestSubmit).toHaveBeenCalledTimes(1);
    });

    it("runs the trigger when the event source matches a single source string", () => {
      const context = createContext();
      const engine = new TriggerEngine(context);

      const triggers: FormFieldTrigger[] = [
        {
          on: FormFieldEventType.CHANGE,
          action: TriggerAction.SUBMIT,
          source: "field-a",
        },
      ];

      engine.runFieldTriggers(triggers, createEvent(), "field-a");

      expect(context.requestSubmit).toHaveBeenCalledTimes(1);
    });

    it("runs the trigger when the event source matches one of an array of sources", () => {
      const context = createContext();
      const engine = new TriggerEngine(context);

      const triggers: FormFieldTrigger[] = [
        {
          on: FormFieldEventType.CHANGE,
          action: TriggerAction.SUBMIT,
          source: ["field-a", "field-b"],
        },
      ];

      engine.runFieldTriggers(triggers, createEvent(), "field-b");

      expect(context.requestSubmit).toHaveBeenCalledTimes(1);
    });

    it("skips the trigger when the source does not match", () => {
      const context = createContext();
      const engine = new TriggerEngine(context);

      const triggers: FormFieldTrigger[] = [
        {
          on: FormFieldEventType.CHANGE,
          action: TriggerAction.SUBMIT,
          source: "field-a",
        },
      ];

      engine.runFieldTriggers(triggers, createEvent(), "field-b");

      expect(context.requestSubmit).not.toHaveBeenCalled();
    });

    it("skips the trigger when a source is required but none was given", () => {
      const context = createContext();
      const engine = new TriggerEngine(context);

      const triggers: FormFieldTrigger[] = [
        {
          on: FormFieldEventType.CHANGE,
          action: TriggerAction.SUBMIT,
          source: "field-a",
        },
      ];

      engine.runFieldTriggers(triggers, createEvent());

      expect(context.requestSubmit).not.toHaveBeenCalled();
    });
  });

  describe("condition gating", () => {
    it("does not run the trigger when the condition evaluates to false", () => {
      const context = createContext();
      const engine = new TriggerEngine(context);

      const triggers: FormFieldTrigger[] = [
        {
          on: FormFieldEventType.CHANGE,
          action: TriggerAction.SUBMIT,
          condition: "not-the-value",
        },
      ];

      engine.runFieldTriggers(triggers, createEvent({ value: "hello" }));

      expect(context.requestSubmit).not.toHaveBeenCalled();
    });

    it("runs the trigger when the condition evaluates to true", () => {
      const context = createContext();
      const engine = new TriggerEngine(context);

      const triggers: FormFieldTrigger[] = [
        {
          on: FormFieldEventType.CHANGE,
          action: TriggerAction.SUBMIT,
          condition: "hello",
        },
      ];

      engine.runFieldTriggers(triggers, createEvent({ value: "hello" }));

      expect(context.requestSubmit).toHaveBeenCalledTimes(1);
    });
  });

  describe("once", () => {
    it("only fires a trigger marked once a single time per id/type", () => {
      const context = createContext();
      const engine = new TriggerEngine(context);

      const triggers: FormFieldTrigger[] = [
        { on: FormFieldEventType.CHANGE, action: TriggerAction.SUBMIT, once: true },
      ];

      engine.runFieldTriggers(triggers, createEvent());
      engine.runFieldTriggers(triggers, createEvent());

      expect(context.requestSubmit).toHaveBeenCalledTimes(1);
    });

    it("fires repeatedly when once is not set", () => {
      const context = createContext();
      const engine = new TriggerEngine(context);

      const triggers: FormFieldTrigger[] = [
        { on: FormFieldEventType.CHANGE, action: TriggerAction.SUBMIT },
      ];

      engine.runFieldTriggers(triggers, createEvent());
      engine.runFieldTriggers(triggers, createEvent());

      expect(context.requestSubmit).toHaveBeenCalledTimes(2);
    });
  });

  describe("debounce", () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it("delays execution by the debounce duration", () => {
      const context = createContext();
      const engine = new TriggerEngine(context);

      const triggers: FormFieldTrigger[] = [
        {
          on: FormFieldEventType.CHANGE,
          action: TriggerAction.SUBMIT,
          debounce: 200,
        },
      ];

      engine.runFieldTriggers(triggers, createEvent());

      expect(context.requestSubmit).not.toHaveBeenCalled();

      vi.advanceTimersByTime(200);

      expect(context.requestSubmit).toHaveBeenCalledTimes(1);
    });

    it("resets the timer when triggered again before it fires", () => {
      const context = createContext();
      const engine = new TriggerEngine(context);

      const triggers: FormFieldTrigger[] = [
        {
          on: FormFieldEventType.CHANGE,
          action: TriggerAction.SUBMIT,
          debounce: 200,
        },
      ];

      engine.runFieldTriggers(triggers, createEvent());
      vi.advanceTimersByTime(100);
      engine.runFieldTriggers(triggers, createEvent());
      vi.advanceTimersByTime(100);

      expect(context.requestSubmit).not.toHaveBeenCalled();

      vi.advanceTimersByTime(100);

      expect(context.requestSubmit).toHaveBeenCalledTimes(1);
    });

    it("runs immediately when debounce is 0 or unset", () => {
      const context = createContext();
      const engine = new TriggerEngine(context);

      const triggers: FormFieldTrigger[] = [
        { on: FormFieldEventType.CHANGE, action: TriggerAction.SUBMIT, debounce: 0 },
      ];

      engine.runFieldTriggers(triggers, createEvent());

      expect(context.requestSubmit).toHaveBeenCalledTimes(1);
    });
  });

  describe("destroy", () => {
    it("clears pending debounce timers so they never fire", () => {
      vi.useFakeTimers();
      const context = createContext();
      const engine = new TriggerEngine(context);

      const triggers: FormFieldTrigger[] = [
        {
          on: FormFieldEventType.CHANGE,
          action: TriggerAction.SUBMIT,
          debounce: 200,
        },
      ];

      engine.runFieldTriggers(triggers, createEvent());
      engine.destroy();
      vi.advanceTimersByTime(200);

      expect(context.requestSubmit).not.toHaveBeenCalled();
      vi.useRealTimers();
    });
  });

  describe("action handling", () => {
    it("UPDATE calls updateState with the target ids and state", () => {
      const context = createContext();
      const engine = new TriggerEngine(context);

      const triggers: FormFieldTrigger[] = [
        {
          on: FormFieldEventType.CHANGE,
          action: TriggerAction.UPDATE,
          target: "field-2",
          state: { disabled: true },
        },
      ];

      engine.runFieldTriggers(triggers, createEvent());

      expect(context.updateState).toHaveBeenCalledWith(["field-2"], {
        disabled: true,
      });
    });

    it("UPDATE defaults the target to the event id when no target is given", () => {
      const context = createContext();
      const engine = new TriggerEngine(context);

      const triggers: FormFieldTrigger[] = [
        {
          on: FormFieldEventType.CHANGE,
          action: TriggerAction.UPDATE,
          state: { disabled: true },
        },
      ];

      engine.runFieldTriggers(triggers, createEvent({ id: "field-1" }));

      expect(context.updateState).toHaveBeenCalledWith(["field-1"], {
        disabled: true,
      });
    });

    it("TOGGLE calls toggleFieldState with the target ids and props", () => {
      const context = createContext();
      const engine = new TriggerEngine(context);

      const triggers: FormFieldTrigger[] = [
        {
          on: FormFieldEventType.CHANGE,
          action: TriggerAction.TOGGLE,
          target: ["field-2", "field-3"],
          toggle: ["hidden"],
        },
      ];

      engine.runFieldTriggers(triggers, createEvent());

      expect(context.toggleFieldState).toHaveBeenCalledWith(
        ["field-2", "field-3"],
        ["hidden"],
      );
    });

    it("FETCH calls fetch with the normalized url and default replace mode", () => {
      const context = createContext();
      const engine = new TriggerEngine(context);

      const triggers: FormFieldTrigger[] = [
        {
          on: FormFieldEventType.CHANGE,
          action: TriggerAction.FETCH,
          fetchUrl: "/api/items/$value",
        },
      ];

      engine.runFieldTriggers(triggers, createEvent({ value: "42" }));

      expect(context.fetch).toHaveBeenCalledWith(
        "/api/items/42",
        "replace",
        undefined,
        "field-1",
      );
    });

    it("FETCH passes through the configured mode and projection", () => {
      const context = createContext();
      const engine = new TriggerEngine(context);
      const projection = { target: "out", select: "name" };

      const triggers: FormFieldTrigger[] = [
        {
          on: FormFieldEventType.CHANGE,
          action: TriggerAction.FETCH,
          fetchUrl: "/api/items",
          mode: "merge",
          projection,
        },
      ];

      engine.runFieldTriggers(triggers, createEvent());

      expect(context.fetch).toHaveBeenCalledWith(
        "/api/items",
        "merge",
        projection,
        "field-1",
      );
    });

    it("VALIDATE_ASYNC calls fetch in patch mode", () => {
      const context = createContext();
      const engine = new TriggerEngine(context);

      const triggers: FormFieldTrigger[] = [
        {
          on: FormFieldEventType.CHANGE,
          action: TriggerAction.VALIDATE_ASYNC,
          fetchUrl: "/api/validate/$value",
        },
      ];

      engine.runFieldTriggers(triggers, createEvent({ value: "abc" }));

      expect(context.fetch).toHaveBeenCalledWith("/api/validate/abc", "patch");
    });

    it("VALIDATE calls validate with the first target id and the rule", () => {
      const context = createContext();
      const engine = new TriggerEngine(context);
      const validation = { rule: "required" } as any;

      const triggers: FormFieldTrigger[] = [
        {
          on: FormFieldEventType.CHANGE,
          action: TriggerAction.VALIDATE,
          target: "field-2",
          validation,
        },
      ];

      engine.runFieldTriggers(triggers, createEvent());

      expect(context.validate).toHaveBeenCalledWith("field-2", validation);
    });

    it("SUBMIT calls requestSubmit", () => {
      const context = createContext();
      const engine = new TriggerEngine(context);

      const triggers: FormFieldTrigger[] = [
        { on: FormFieldEventType.CHANGE, action: TriggerAction.SUBMIT },
      ];

      engine.runFieldTriggers(triggers, createEvent());

      expect(context.requestSubmit).toHaveBeenCalledTimes(1);
    });

    it("RESET calls requestReset", () => {
      const context = createContext();
      const engine = new TriggerEngine(context);

      const triggers: FormFieldTrigger[] = [
        { on: FormFieldEventType.CHANGE, action: TriggerAction.RESET },
      ];

      engine.runFieldTriggers(triggers, createEvent());

      expect(context.requestReset).toHaveBeenCalledTimes(1);
    });

    it("OPEN_DIALOG calls openDialog with the target", () => {
      const context = createContext();
      const engine = new TriggerEngine(context);

      const triggers: FormFieldTrigger[] = [
        {
          on: FormFieldEventType.CHANGE,
          action: TriggerAction.OPEN_DIALOG,
          target: "my-dialog",
        },
      ];

      engine.runFieldTriggers(triggers, createEvent());

      expect(context.openDialog).toHaveBeenCalledWith("my-dialog");
    });

    it("CLOSE_DIALOG calls closeDialog with the target", () => {
      const context = createContext();
      const engine = new TriggerEngine(context);

      const triggers: FormFieldTrigger[] = [
        {
          on: FormFieldEventType.CHANGE,
          action: TriggerAction.CLOSE_DIALOG,
          target: "my-dialog",
        },
      ];

      engine.runFieldTriggers(triggers, createEvent());

      expect(context.closeDialog).toHaveBeenCalledWith("my-dialog");
    });

    it("LOAD normalizes the url and calls load with the event id", () => {
      const context = createContext();
      const engine = new TriggerEngine(context);

      const triggers: FormFieldTrigger[] = [
        {
          on: FormFieldEventType.CHANGE,
          action: TriggerAction.LOAD,
          protocol: "http",
          url: "/api/load/$value",
        } as any,
      ];

      engine.runFieldTriggers(triggers, createEvent({ value: "99" }));

      expect(context.load).toHaveBeenCalledWith(
        expect.objectContaining({ url: "/api/load/99" }),
        "field-1",
      );
    });

    it("LOAD calls load without normalizing for local protocols without a url", () => {
      const context = createContext();
      const engine = new TriggerEngine(context);

      const triggers: FormFieldTrigger[] = [
        {
          on: FormFieldEventType.CHANGE,
          action: TriggerAction.LOAD,
          protocol: "storage",
          key: "my-key",
        } as any,
      ];

      engine.runFieldTriggers(triggers, createEvent());

      expect(context.load).toHaveBeenCalledWith(
        expect.objectContaining({ key: "my-key" }),
        "field-1",
      );
    });
  });
});
