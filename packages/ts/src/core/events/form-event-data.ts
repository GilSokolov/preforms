import { FetchMode } from "../interfaces";
import { FormEventType } from "./form-event-type";

/**
 * Base data for all form events.
 */
interface BaseFormEventData {
  /** The type of the event */
  type: FormEventType;
  /** Optional timestamp when event was emitted */
  timestamp?: number;
  /** Optional source field key for field-level events */
  fieldKey?: string;
}

/**
 * Discriminated union of all form event payloads.
 * Add extra properties when needed for specific events.
 */
export type FormEventData =
  // ----- Internal form state events -----
  | (BaseFormEventData & { type: FormEventType.RESET })
  | (BaseFormEventData & { type: FormEventType.SUBMIT })
  | (BaseFormEventData & { type: FormEventType.CHANGE; value: any })
  | (BaseFormEventData & { type: FormEventType.BECOME_DIRTY })
  | (BaseFormEventData & { type: FormEventType.BECOME_PRISTINE })
  | (BaseFormEventData & { type: FormEventType.FOCUS })
  | (BaseFormEventData & { type: FormEventType.BLUR })

  // ----- Host request events -----
  | (BaseFormEventData & { type: FormEventType.REQUEST_SUBMIT })
  | (BaseFormEventData & { type: FormEventType.REQUEST_RESET })
  | (BaseFormEventData & {
      type: FormEventType.REQUEST_DATA;
      url: string;
      mode: FetchMode;
    });

export type RequestDataEvent = Extract<
  FormEventData,
  { type: FormEventType.REQUEST_DATA }
>;
