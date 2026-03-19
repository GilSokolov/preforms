import { InjectionToken } from "@angular/core";
import { FieldActionContext } from "../services";

export type FieldActionHandler = (ctx: FieldActionContext) => void;

export const FIELD_ACTIONS = new InjectionToken<
  Record<string, FieldActionHandler>
>("FIELD_ACTIONS", {
  providedIn: "root",
  factory: () => ({}),
});
