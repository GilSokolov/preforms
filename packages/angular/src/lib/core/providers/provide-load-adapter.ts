import { Type } from "@angular/core";
import { LoadAdapter } from "../models/load-adapter";
import { LOAD_ADAPTERS } from "../tokens/load.token";

export function provideLoadAdapter(adapter: Type<LoadAdapter>) {
  return {
    provide: LOAD_ADAPTERS,
    useClass: adapter,
    multi: true,
  };
}
