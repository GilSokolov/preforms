import { CrossFieldValidation } from "./cross-field-validation";
import { FetchMode } from "./triggers";
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
  requestSubmit(): void;
  requestReset(): void;
  fetch(url: string, mode: FetchMode): void;
  patchValue(id: string, value: unknown): void;
  updateState(ids: string[], state: Partial<FieldUIState>): void;
  validate(id: string, validation: CrossFieldValidation): void;
  toggleFieldState(ids: string[], props: ToggleProps): void;
  openDialog(id: string): void;
  closeDialog(id: string): void;
}
