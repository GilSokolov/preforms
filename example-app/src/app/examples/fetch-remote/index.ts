import { ExampleDefinition } from 'src/app/example-registry';
import content from './dynamic-form-fetch-remote.component.ts.txt';
import { DynamicFormFetchRemoteComponent } from './dynamic-form-fetch-remote.component';
export const DYNAMIC_SELECT_FETCH_REMOTE_EXAMPLE: ExampleDefinition = {
  id: 'dynamic-select-fetch-remote',
  title: 'Pokemon Game',
  description: `
  # Remote Fetch + Projection Example

This example shows how to fetch remote data and map it into multiple fields when a user selects a value.

---

## What this example demonstrates

- Remote API fetch
- Mapping API response to fields (projection)
- Updating multiple fields from one request
- Calculated fields
- Event → Trigger → Action flow

---

## Basic Idea

Change → Fetch → Map Response → Update Fields → Recalculate

Everything is configured declaratively in the field model.

---

## Triggering a Remote Fetch

When the user selects a value, a fetch action is triggered.

\`\`\`ts
{
  triggers: [
    {
      on: 'change',
      action: 'fetch',
      fetchUrl: '$value',
      projection: {
        hp: 'stats[0].base_stat',
        attack: 'stats[1].base_stat',
        defense: 'stats[2].base_stat',
        image: 'sprites.other.showdown.front_default'
      }
      sourceField: 'type',
    }
  ]
}
\`\`\`

The engine will:
1. Call the API  
2. Read the response  
3. Map values into fields  
4. Update the UI  

---

## Projection (Mapping API Response)

Projection maps API response fields into form fields.

\`\`\`ts
{
  projection: {
    hp: 'stats[0].base_stat',
    attack: 'stats[1].base_stat',
    defense: 'stats[2].base_stat',
    image: 'sprites.other.showdown.front_default'
  }
}
\`\`\`

This allows updating multiple fields from a single API response without writing component code.

---

## Calculated Fields

Fields can calculate values based on other fields.

\`\`\`ts
new OutputField({
  key: 'damage',
  label: 'Damage',
  calculation: 'Number(player.attack) - Number(opponent.defense) / 2'
})
\`\`\`

Calculated fields automatically update when dependent values change.

---

## Mental Model

Think in this pattern when building forms:

User action → Trigger → Action → State update → UI update

Examples:
- Select value → fetch related data  
- Enter input → validate asynchronously  
- Change number → recalculate result  
- Click button → trigger action  
- Select item → load additional details  

---

## Why This Example Matters

This example demonstrates that Preforms is not just a form renderer.  
It is a declarative, event-driven form engine where behavior is defined using triggers and actions instead of component code.

---

## One Sentence Summary

> When something happens, trigger an action that updates field state, and the UI updates automatically.
  
  `,
  category: 'Examples',
  component: DynamicFormFetchRemoteComponent,
  assets: [
    {
      label: 'TS',
      language: 'typescript',
      content,
    },
  ],
};
