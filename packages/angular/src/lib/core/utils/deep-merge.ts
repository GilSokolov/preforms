export function deepMerge<T extends object, U extends Partial<T>>(
  target: T,
  source: U,
): T {
  const keys = Object.keys(source) as (keyof T & keyof U)[];

  for (const key of keys) {
    const sourceValue = source[key];
    const targetValue = target[key];

    if (sourceValue === undefined) {
      continue;
    }

    if (
      sourceValue !== null &&
      typeof sourceValue === "object" &&
      !Array.isArray(sourceValue)
    ) {
      if (
        !targetValue ||
        typeof targetValue !== "object" ||
        Array.isArray(targetValue)
      ) {
        target[key] = {} as T[typeof key];
      }
      target[key] = deepMerge((target[key] as any) ?? {}, sourceValue as any);
    } else {
      target[key] = sourceValue as unknown as T[typeof key];
    }
  }

  return target;
}
