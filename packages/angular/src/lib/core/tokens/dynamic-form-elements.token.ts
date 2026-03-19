import { InjectionToken, Type } from '@angular/core';

export const DYNAMIC_FORM_ELEMENTS = new InjectionToken<Map<string, Type<any>>>(
  'DYNAMIC_FORM_ELEMENTS',
  {
    providedIn: 'root',
    factory: () => new Map<string, Type<any>>(),
  },
);
