export function coerceComparable(value: unknown): unknown {
  if (value == null) return value;

  // Date object
  if (value instanceof Date) {
    return value.getTime();
  }

  // ISO date string (from <input type="date">)
  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}/.test(value)) {
    const parsed = Date.parse(value);
    if (!Number.isNaN(parsed)) return parsed;
  }

  // Numeric string
  if (typeof value === "string" && !isNaN(Number(value))) {
    return Number(value);
  }

  return value;
}
