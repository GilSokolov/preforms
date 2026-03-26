import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { provideRouter } from '@angular/router';
import { FieldActionContext } from '@preforms/angular/core/services';
import { FIELD_ACTIONS } from '@preforms/angular/core/tokens';
import { routes } from './app.routes';
import { generatePassword } from './utils/generate-password';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { provideMarkdown } from 'ngx-markdown';
import { provideDynamicFormLazyFields } from '@preforms/angular/core/providers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideMarkdown({ loader: HttpClient }),
    provideBrowserGlobalErrorListeners(),
    provideNativeDateAdapter(),
    provideRouter(routes),
    provideDynamicFormLazyFields([
      {
        type: 'editor',
        loader: () =>
          import('./custom-form-fields/editor/editor.component').then((m) => m.EditorComponent),
      },
    ]),
    {
      provide: FIELD_ACTIONS,
      useValue: {
        randomize: (ctx: FieldActionContext) => {
          // Example: set a random value
          if (ctx.control && typeof ctx.control.setValue === 'function') {
            ctx.control.setValue(Math.floor(Math.random() * 100));
          }
        },
        uppercase: (ctx: FieldActionContext) => {
          const val = ctx.control.value;
          ctx.control.setValue(typeof val === 'string' ? val.toUpperCase() : val);
        },
        increment: (ctx: FieldActionContext) => {
          const val = ctx.control.value;
          ctx.control.setValue(typeof val === 'number' ? Math.min(val + 1, ctx.field.max) : val);
        },
        decrement: (ctx: FieldActionContext) => {
          const val = ctx.control.value;
          ctx.control.setValue(typeof val === 'number' ? Math.max(val - 1, ctx.field.min) : val);
        },
        generatePassword: (ctx: FieldActionContext) => {
          const newPwd = generatePassword(12, {
            uppercase: true,
            lowercase: true,
            numbers: true,
            symbols: true,
          });
          ctx.control.setValue(newPwd);
        },
      },
    },
    provideClientHydration(withEventReplay()),
  ],
};
