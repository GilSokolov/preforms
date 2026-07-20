import { CrossFieldValidation } from "./cross-field-validation";
import { FetchProjection, FetchMode, LoadTrigger } from "./triggers";
import { FieldUIState } from "./ui-config";

export type ToggleProps = (keyof Pick<
  FieldUIState,
  | "checked"
  | "disabled"
  | "hidden"
  | "multiple"
  | "readonly"
  | "required"
  | "autofocus"
>)[];

export interface TriggerContext {
  values(): object;
  submit(): void;
  reset(): void;
  fetch(
    url: string,
    mode: FetchMode,
    mapper?: FetchProjection,
    id?: string,
  ): void;
  update(
    ids: string | string[],
    patch: Partial<FieldUIState> & { value?: unknown },
  ): void;
  validate(id: string, validation: CrossFieldValidation): void;
  toggle(ids: string[], props: ToggleProps): void;
  open(id: string): void;
  close(id: string): void;
  load(trigger: LoadTrigger, id?: string): void;
}
