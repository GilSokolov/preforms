// import { ExampleDefinition } from 'src/app/example-registry';

// export const DYNAMIC_SELECT_FETCH_EXAMPLE: ExampleDefinition = {
//   id: 'dynamic-select-fetch',
//   title: 'Fetch Form',
//   description: `
//  ## Dynamic Form Replacement on Selection

// This demo shows how to build a **multi-step / conditional form** that completely replaces its fields based on user selection — using a \`fetch\` trigger in \`'replace'\` mode.

// ### What it does

// - Starts with a single **product selector** dropdown.
// - When the user picks "Product A" or "Product B":
//   - A \`fetch\` trigger fires on \`CHANGE\`.
//   - The custom \`DYNAMIC_FORM_FETCHER\` simulates an API call to \`/api/forms/{selectedValue}\`.
//   - It returns a new array of fields tailored to the chosen product.
//   - \`mode: 'replace'\` **overwrites the entire form content** with the returned fields.
// - Result: The form dynamically switches between different input sets (e.g. "Feature A + Quantity" vs "Color + Units").

// ### Key Features

// - **Form-level replacement** via \`mode: 'replace'\` on fetch trigger
// - Returning **full field definitions** from the fetcher (not just patches)
// - Self-referencing trigger on the \`SelectField\` (\`fetchUrl: '/api/forms/$value'\`)
// - Keeping the selected value preserved by including the \`SelectField\` in every response
// - Clean simulation of backend-driven conditional forms

// ### Code Highlights

// \`\`\`ts
// // Trigger on the initial SelectField
// triggers: [{
//   on: FormFieldEventType.CHANGE,
//   action: TriggerAction.FETCH,
//   fetchUrl: '/api/forms/$value',   // $value = current selection
//   mode: 'replace'
// }]
// // Fetcher returns different field sets
// if (selection === 'productA') {
//   return of([
//     selectField,                    // preserve the selector
//     new TextField({ key: 'productA_feature', ... }),
//     new NumberField({ key: 'productA_quantity', ... }),
//   ]);
// }
// \`\`\`
// >  Ideal for wizards, product configurators, onboarding flows,
// >  or any form where the structure changes significantly based on early choices — all without manual component swapping or complex *ngIf logic.
// Perfect example of how @preforms/angular turns static forms into fully dynamic, backend-driven experiences.
//   `,
//   // 'Shows a select field that triggers a fetch to load different form fields based on the selection using mode "replace". Useful for product forms, country-specific forms, or workflow-specific fields.',
//   category: 'Reactivity & Validation',
//   loadComponent: () =>
//     import('./dynamic-form-fetch.component').then((m) => m.DynamicFormFetchComponent),
//   assets: [
//     {
//       label: 'TS',
//       language: 'typescript',
//       load: () => import('./dynamic-form-fetch.component.ts.txt').then((m) => m.default),
//     },
//   ],
// };
