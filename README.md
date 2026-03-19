# 🧠 Dynamic Forms – Mental Model

This library is built around a small set of powerful concepts.

Understanding these will let you build complex forms quickly and predictably.

---

## 🧱 1. Fields = Structure

Fields define what your form looks like.

```ts
new TextField({ key: "username" });
new EmailField({ key: "email" });
```

They represent:

1. inputs

2. layouts

3. containers

4. UI elements

## ⚡ 2. Triggers = Behavior

Triggers define how fields react to events.

```ts
{
  on: 'change',
  action: 'update_state',
  targetField: 'details',
  applyState: { hidden: false }
}
```

## 👉 “When X happens, do Y”

Trigger Anatomy

```ts
{
on: 'change',
action: 'fetch',
targetField: 'user',
condition: { operator: 'gt', value: 0 }
}
```

## ✅ 3. Validation = Rules

Validation ensures correctness.

Simple

```ts
new TextField({
  required: true,
  minLength: 3,
});
```

Cross-field

```ts
{
  action: 'validate',
  validation: {
    operator: 'eq',
    compareTo: 'password'
  }
}
```

## 🎯 4. Actions = UI Interactions

Actions are triggered by UI elements like icons.

```ts
icons: [
  {
    name: "❌",
    side: "left",
    action: "clear",
  },
];
```

Handled via FieldActionService.

## 🔄 Data Flow

User Input
↓
Event (change/input)
↓
Triggers
↓
State Updates / Validation / Fetch
↓
Outputs Recalculate
↓
UI Updates

## 🧠 Key Features

### Dynamic References

```ts
fetchUrl: "/api/users/$value";
```

### Field Targeting

```ts
targetField: "email";
targetField: ["a", "b"];
targetField: "$value-title";
```

### Array Matching

```ts
for: ['items[*].price']
```

Matches:

```ts
items[0].price;
items[1].price;
```

### Conditions

```ts
condition: {
  operator: 'gt',
  value: 0
}
```

## ⚠️ When to Use What

| Feature     | Use When                     |
| ----------- | ---------------------------- |
| Triggers    | Fields react to other fields |
| Validation  | You need correctness         |
| OutputField | You compute values           |
| Actions     | User interacts with UI       |

## 🚫 What You DON’T Need

- manual subscriptions

- valueChanges boilerplate

- imperative glue code

## 🏁 Summary

Fields define structure
Triggers define behavior
Validation enforces rules
Outputs derive values
Actions handle interaction
