/**
 * Check if a value is "empty".
 *
 * This utility determines if a value should be considered empty for
 * validation, conditional logic, or form processing purposes.
 *
 * @param value - The value to check.
 * @returns `true` if the value is empty, `false` otherwise.
 *
 * @example
 * ```ts
 * isEmpty(undefined);          // true
 * isEmpty(null);               // true
 * isEmpty("");                 // true
 * isEmpty("   ");              // true
 * isEmpty([]);                 // true
 * isEmpty({});                 // true
 * isEmpty([1,2,3]);            // false
 * isEmpty({ a: 1 });           // false
 * isEmpty("hello");            // false
 * ```
 *
 * @remarks
 * - **Strings**: considered empty if they are zero-length or contain only whitespace.
 * - **Arrays**: considered empty if they have zero elements.
 * - **Objects**: only plain objects (`{}`) are checked; empty plain objects are considered empty.
 * - **Other types** (numbers, functions, instances of classes, etc.) are never considered empty.
 * - `undefined` and `null` are always considered empty.
 */
export function isEmpty(value: unknown): boolean {
  if (value === undefined || value === null) return true;

  if (typeof value === "string") return value.trim().length === 0;

  if (Array.isArray(value)) return value.length === 0;

  if (typeof value === "object") {
    // plain object only
    if (Object.getPrototypeOf(value) === Object.prototype) {
      return Object.keys(value).length === 0;
    }
  }

  return false;
}
