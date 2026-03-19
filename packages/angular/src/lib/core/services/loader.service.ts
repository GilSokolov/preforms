import { inject, Injectable, Type } from "@angular/core";
import { ResolvedDynamicFormField } from "../models";
import { DynamicFormRegistry } from "../registry";
import { DYNAMIC_FORM_LAZY_FIELDS } from "../tokens";

@Injectable({ providedIn: "root" })
export class LoaderService {
  private cache = new Map<string, ResolvedDynamicFormField>();
  private readonly lazy = inject(DYNAMIC_FORM_LAZY_FIELDS, {
    optional: true,
  });

  constructor() {
    this.lazy?.forEach(({ loader, type, ...options }) => {
      DynamicFormRegistry.register(type, loader, options);
    });
  }

  async resolve(type: string): Promise<ResolvedDynamicFormField> {
    if (this.cache.has(type))
      return this.cache.get(type) as ResolvedDynamicFormField;

    const metadata = DynamicFormRegistry.resolve(type);

    if (!metadata) return { type, component: null };

    let component: Type<any>;

    try {
      component = await metadata.loader();
    } catch (err) {
      console.warn(`Failed to load lazy field: ${type}`, err);
      return { type, component: null };
    }

    this.cache.set(type, {
      component,
      type,
      validators: metadata.validators ?? [],
      asyncValidators: metadata.asyncValidators ?? [],
    });
    return this.cache.get(type) as ResolvedDynamicFormField;
  }
}
