import { getValue } from "../utils";
import { replacePlaceholders } from "../utils/replace-placeholders.util";
import { shouldTrigger } from "../utils/run-triggers";
import { FieldEventData } from "./events/field-event-data";
import { TriggerContext } from "./interfaces/trigger-context";
import { FormFieldTrigger, TriggerAction } from "./interfaces/triggers";

export class TriggerEngine {
  private firedSet = new Set<string>();
  private debounceTimers = new Map<string, ReturnType<typeof setTimeout>>();

  constructor(private context: TriggerContext) {}

  runFieldTriggers(
    triggers: FormFieldTrigger[],
    event: FieldEventData,
    source?: string,
  ) {
    return triggers
      .filter((trigger) => trigger.on === event.type)
      .forEach((trigger) => {
        if (!trigger.sourceField) {
          return this.scheduleOrRunTrigger(trigger, event);
        }

        const sourceField = Array.isArray(trigger.sourceField)
          ? trigger.sourceField
          : [trigger.sourceField];

        if (source && sourceField.includes(source)) {
          return this.scheduleOrRunTrigger(trigger, event);
        }
      });
  }

  private scheduleOrRunTrigger<T>(
    trigger: FormFieldTrigger<T>,
    event: FieldEventData,
    source?: string,
  ) {
    const debounceMs = trigger.debounce ?? 0;

    if (!debounceMs || debounceMs <= 0) {
      this.runFieldTrigger(trigger, event);
      return;
    }

    const debounceKey = this.getDebounceKey(trigger, event, source);

    const existingTimer = this.debounceTimers.get(debounceKey);
    if (existingTimer) {
      clearTimeout(existingTimer);
    }

    const timer = setTimeout(() => {
      this.debounceTimers.delete(debounceKey);
      this.runFieldTrigger(trigger, event);
    }, debounceMs);

    this.debounceTimers.set(debounceKey, timer);
  }

  private getDebounceKey<T>(
    trigger: FormFieldTrigger<T>,
    event: FieldEventData,
    source?: string,
  ) {
    return [
      event.id,
      event.type,
      source ?? "",
      trigger.action,
      trigger.targetField
        ? Array.isArray(trigger.targetField)
          ? trigger.targetField.join(",")
          : trigger.targetField
        : "",
      (trigger as any).fetchUrl ?? "",
    ].join("|");
  }

  private normailzeTargetIds(
    targetIds: string | string[] | undefined,
    event: FieldEventData,
  ) {
    const ids = Array.isArray(targetIds) ? targetIds : [targetIds || event.id];
    return ids.map((id) => id.replace("$value", event.value));
  }

  private runFieldTrigger<T>(
    trigger: FormFieldTrigger<T>,
    event: FieldEventData,
  ) {
    const firedKey = `${event.id}:${event.type}`;

    if (!shouldTrigger(trigger, event.value)) return;

    if (trigger.once && this.firedSet.has(firedKey)) return;

    const ids = this.normailzeTargetIds(trigger.targetField, event);

    switch (trigger.action) {
      case TriggerAction.UPDATE_STATE:
        this.context.updateState(
          ids,
          this.replaceIndexPlaceholders(trigger.applyState, event.value),
        );
        break;

      case TriggerAction.TOGGLE_FIELD:
        this.context.toggleFieldState(ids, trigger.toggleStates);
        break;

      case TriggerAction.FETCH:
        this.context.fetch(
          this.normalizeUrl(trigger.fetchUrl, event),
          trigger.mode || "replace",
          trigger.projection,
          event.id,
        );
        break;

      case TriggerAction.ASYNC_VALIDATE:
        this.context.fetch(this.normalizeUrl(trigger.fetchUrl, event), "patch");
        break;

      case TriggerAction.VALIDATE:
        this.context.validate(ids[0], trigger.validation);
        break;

      case TriggerAction.SUBMIT:
        this.context.requestSubmit();
        break;

      case TriggerAction.RESET:
        this.context.requestReset();
        break;

      case TriggerAction.DIALOG_OPEN:
        this.context.openDialog(trigger.targetId);
        break;

      case TriggerAction.DIALOG_CLOSE:
        this.context.closeDialog(trigger.targetId);
        break;
    }

    if (trigger.once) {
      this.firedSet.add(firedKey);
    }
  }

  private normalizeUrl(url: string, event: FieldEventData) {
    return replacePlaceholders(
      url.replace("$value", event.value),
      this.context.getValues(),
    );
  }

  private replaceIndexPlaceholders(obj: any, value: any): any {
    if (typeof obj === "string") {
      const found = getValue(this.context.getValues(), obj);

      if (typeof found === "string") {
        return found.replace("$value", value);
      }

      if (found) {
        return found;
      }

      return obj.replace("$value", value);
    }

    if (Array.isArray(obj)) {
      return obj.map((item) => this.replaceIndexPlaceholders(item, value));
    }

    if (obj && typeof obj === "object") {
      const newObj: any = {};
      for (const key in obj) {
        newObj[key] = this.replaceIndexPlaceholders(obj[key], value);
      }
      return newObj;
    }

    return obj;
  }

  destroy() {
    for (const timer of this.debounceTimers.values()) {
      clearTimeout(timer);
    }
    this.debounceTimers.clear();
  }
}
