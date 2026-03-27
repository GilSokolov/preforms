import { ExampleDefinition } from 'src/app/example-registry';

import ts from './cart-builder.component.ts.txt';
import scss from './cart-builder.component.scss.txt';

import { CartBuilderComponent } from './cart-builder.component';

export const CART_BUILDER_EXAMPLE: ExampleDefinition = {
  id: 'cart-builder',
  title: 'Dynamic FieldArray',
  description: `
  A realistic **dynamic shopping cart** built entirely with Preforms.\n
  This example demonstrates how to use **FieldArray**, **FormRow**, **OutputField** for real-time calculations, 
  and the powerful **aggregates** system to enforce business rules all declaratively.
\nUsers can add up to 8 items, remove items, edit product names, prices, and quantities. Subtotals and the grand total update automatically. 
Validation prevents duplicate product names and ensures the cart total does not exceed $2000.
### Features Demonstrated
- Dynamic array of items with **add** and **remove** buttons
- Per-item real-time subtotal calculation
- Grand total calculation using JavaScript expressions
- Cross-item validation using **aggregates**
- Clean tabular layout with **FormRow**
- Initial value seeding
### How It Works
#### 1 FieldArray
The FieldArray manages a dynamic list of cart items.
- minItems: 1 and maxItems: 8 enforce limits.
- addButton and removeButton provide built-in UI controls.
- value seeds the array with an initial item.

#### 2. Per-Item Row (FormRow)
Each row contains:
- TextField for product name
- NumberField for price and quantity
- OutputField for subtotal (read-only)

The subtotal uses the **$index** placeholder to reference the current array item.
#### 3. Real-Time Calculations
- Subtotal (inside array): Number(items[$index].price) * Number(items[$index].qty)
- Grand Total (outside array): Uses .reduce() over all items with the **[*]** wildcard to watch every price and quantity.
The **for** property tells Preforms which fields should trigger recalculation.
#### 4. Aggregates (Advanced Validation)
Aggregates let you define rules over the entire array without writing custom validators.
\`\`\`ts
TypeScriptaggregates: [
  {
    action: 'product',           // Special action: Σ(price × qty) across all items
    field: ['price', 'qty'],     // Fields to multiply per item
    value: 2000,
    operator: 'lte',             // ≤
    message: 'Cart total cannot exceed $2000'
  },
  {
    action: 'unique',
    field: 'name',
    message: 'Product names must be unique'
  }
];
\`\`\`
**Supported Aggregate Actions**:
- "sum", "count", "avg" — standard numerical aggregations
- "product" — multiplies two fields per item then aggregates the results (ideal for price × quantity scenarios)
- "unique" — ensures all values in the specified field are distinct
`,
  category: 'Advanced Components',

  component: CartBuilderComponent,

  assets: [
    {
      label: 'TS',
      language: 'typescript',
      content: ts,
    },
    {
      label: 'SCSS',
      language: 'css',
      content: scss,
    },
  ],
};
