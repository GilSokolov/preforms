import { InjectionToken } from "@angular/core";
import { LoadAdapter } from "../models/load-adapter";

export const LOAD_ADAPTERS = new InjectionToken<LoadAdapter[]>("LOAD_ADAPTERS");
