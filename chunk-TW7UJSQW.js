import"./chunk-7DXB7J77.js";var e=`import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';\r
import { provideNativeDateAdapter } from '@angular/material/core';\r
import { provideRouter } from '@angular/router';\r
import { routes } from './app.routes';\r
\r
\r
export const appConfig: ApplicationConfig = {\r
  providers: [\r
    provideBrowserGlobalErrorListeners(),\r
    provideNativeDateAdapter(),\r
    provideRouter(routes),\r
    provideDynamicFormLazyFields([\r
      {\r
        type: 'editor',\r
        loader: () => import('./custom-form-fields/editor/editor.component')\r
          .then((m) => m.EditorComponent),\r
      },\r
    ]),\r
  ],\r
};\r
`;export{e as default};
