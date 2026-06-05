import { Optional, SkipSelf, Provider, FactoryProvider } from "@angular/core";
import { ADVANCED_ELEMENTS } from "../fields";
import { FormService, EventService } from "../services";
import { FormFactoryService } from "../services/form-factory.service";
import { FormStateService } from "../services/state.service";
import { LoadAdapterRegistry } from "../services/load-adapter-registry";

export function preformsProviders(): Provider[] {
  return [
    ADVANCED_ELEMENTS,
    FormService,
    FormStateService,
    FormFactoryService,
    LoadAdapterRegistry,
    {
      provide: EventService,
      useFactory: (parent: EventService | null) => parent ?? new EventService(),
      deps: [[new Optional(), new SkipSelf(), EventService]],
    },
  ];
}
