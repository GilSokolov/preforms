import"./chunk-7DXB7J77.js";var e=`import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';\r
import { provideNativeDateAdapter } from '@angular/material/core';\r
import { provideRouter } from '@angular/router';\r
import { routes } from './app.routes';\r
import { FieldActionContext } from '@preforms/angular/core/services';\r
import { FIELD_ACTIONS } from '@preforms/angular/core/tokens';\r
\r
export const appConfig: ApplicationConfig = {\r
  providers: [\r
    provideBrowserGlobalErrorListeners(),\r
    provideNativeDateAdapter(),\r
    provideRouter(routes),\r
    {\r
      provide: FIELD_ACTIONS,\r
      useValue: {\r
        increment: (ctx: FieldActionContext) => {\r
          const val = ctx.control.value;\r
          ctx.control.setValue(typeof val === 'number' ? Math.min(val + 1, ctx.field.max) : val);\r
        },\r
        decrement: (ctx: FieldActionContext) => {\r
          const val = ctx.control.value;\r
          ctx.control.setValue(typeof val === 'number' ? Math.max(val - 1, ctx.field.min) : val);\r
        },\r
      },\r
    },\r
  ],\r
};\r
`;export{e as default};
