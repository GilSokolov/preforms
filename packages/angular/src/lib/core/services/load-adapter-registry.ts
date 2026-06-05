import { Inject, Injectable } from "@angular/core";
import { LoadAdapter } from "../models/load-adapter";
import { LOAD_ADAPTERS } from "../tokens/load.token";

@Injectable()
export class LoadAdapterRegistry {
  private adapters = new Map<string, LoadAdapter>();

  constructor(@Inject(LOAD_ADAPTERS) adapters: LoadAdapter[]) {
    // last adapter wins (component overrides root)
    for (const adapter of adapters) {
      this.register(adapter);
    }
  }

  register(adapter: LoadAdapter) {
    this.adapters.set(adapter.protocol, adapter);
  }

  get(protocol: string): LoadAdapter {
    const adapter = this.adapters.get(protocol);
    if (!adapter) {
      throw new Error(`No fetch adapter for protocol ${protocol}`);
    }
    return adapter;
  }
}
