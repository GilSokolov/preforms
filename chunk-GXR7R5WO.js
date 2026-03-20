import"./chunk-7DXB7J77.js";var o=`import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';\r
import { provideNativeDateAdapter } from '@angular/material/core';\r
import { provideRouter } from '@angular/router';\r
import { routes } from './app.routes';\r
import { FieldActionContext } from '@preforms/angular/core/services';\r
import { FIELD_ACTIONS } from '@preforms/angular/core/tokens';\r
import { generatePassword } from './utils/generate-password';\r
\r
export const appConfig: ApplicationConfig = {\r
  providers: [\r
    provideBrowserGlobalErrorListeners(),\r
    provideNativeDateAdapter(),\r
    provideRouter(routes),\r
    {\r
      provide: FIELD_ACTIONS,\r
      useValue: {\r
        randomize: (ctx: FieldActionContext) => {\r
          // Example: set a random value\r
          if (ctx.control && typeof ctx.control.setValue === 'function') {\r
            ctx.control.setValue(Math.floor(Math.random() * 100));\r
          }\r
        },\r
        uppercase: (ctx: FieldActionContext) => {\r
          const val = ctx.control.value;\r
          ctx.control.setValue(typeof val === 'string' ? val.toUpperCase() : val);\r
        },\r
        generatePassword: (ctx: FieldActionContext) => {\r
          const newPwd = generatePassword(12, {\r
            uppercase: true,\r
            lowercase: true,\r
            numbers: true,\r
            symbols: true,\r
          });\r
          ctx.control.setValue(newPwd);\r
        },\r
      },\r
    },\r
  ],\r
};\r
`;export{o as default};
