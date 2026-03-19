import { shouldTrigger } from "../utils/run-triggers";
import { FieldEventData } from "./events/field-event-data";
import { TriggerContext } from "./interfaces/trigger-context";
import { FormFieldTrigger, TriggerAction } from "./interfaces/triggers";

export class TriggerEngine {
  private firedSet = new Set<string>();
  constructor(private context: TriggerContext) {}

  runFieldTriggers(triggers: FormFieldTrigger[], event: FieldEventData) {
    return triggers
      .filter((trigger) => trigger.on === event.type)
      .forEach((trigger) => {
        return this.runFieldTrigger(trigger, event);
      });
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
        this.context.updateState(ids, trigger.applyState);
        break;

      case TriggerAction.TOGGLE_FIELD:
        this.context.toggleFieldState(ids, trigger.toggleStates);
        break;

      case TriggerAction.FETCH:
        this.context.fetch(
          trigger.fetchUrl.replace("$value", event.value),
          trigger.mode || "replace",
        );
        break;

      case TriggerAction.ASYNC_VALIDATE:
        this.context.fetch(
          trigger.fetchUrl.replace("$value", event.value),
          "patch",
        );
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
}
