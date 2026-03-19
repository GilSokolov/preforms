import { PatternInput, PatternRule } from "../core";

export function normalizePattern(
  input?: PatternInput | PatternInput[],
): PatternRule[] {
  if (!input) return [];

  // Wrap single item into array for simplicity
  const inputs =
    Array.isArray(input) && !("rule" in input) && input.length !== 2
      ? input
      : [input];

  const result: PatternRule[] = [];

  for (const item of inputs) {
    if (typeof item === "object" && "rule" in item && "message" in item) {
      // PatternRule object
      result.push({
        ...item,
        rule: new RegExp(item.rule),
      });
    } else if (Array.isArray(item) && item.length === 2) {
      // Tuple [pattern, message]
      const [pattern, message] = item as [string | RegExp, string];
      result.push({
        rule: typeof pattern === "string" ? new RegExp(pattern) : pattern,
        message,
      });
    } else {
      throw new Error("Invalid pattern input");
    }
  }

  return result;
}
