import { DestroyRef, inject } from "@angular/core";
import { EventService } from "./services";

export abstract class FormHost {
  readonly #eventService = inject(EventService, {
    optional: true,
  });

  private destroyRef = inject(DestroyRef);

  protected get __eventService(): EventService {
    if (!this.#eventService) {
      throw new Error(
        `\n
        [FormHost Error] EventService not found!

        This usually happens if you did NOT add:
        providers: [EventService]
        to this component or any parent component.
        
        Quick Fix:
          1. Add 'providers: [EventService]' to this component, or
          2. Make sure a parent component provides EventService.

        Without EventService, @FormEvent and @FormFieldEvent decorators and form events will NOT work.
          `,
      );
    }
    return this.#eventService;
  }

  constructor() {
    this.__eventService.bindDecoratedHandlers(this, this.destroyRef);
  }
}
