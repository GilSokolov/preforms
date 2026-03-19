export const convertToNestedObject = (input: Record<string, any>): any => {
  // 1) Flatten nested plain objects into bracketed keys:
  function flatten(obj: any, prefix?: string, out: Record<string, any> = {}) {
    if (obj === null || obj === undefined) {
      // assign null/undefined directly
      out[prefix ?? ""] = obj;
      return out;
    }

    // treat arrays and non-plain objects as values
    const isPlainObject = (v: any) =>
      v !== null &&
      typeof v === "object" &&
      !Array.isArray(v) &&
      !(v instanceof Date);

    if (!prefix) {
      for (const [k, v] of Object.entries(obj)) {
        if (isPlainObject(v)) flatten(v, k, out);
        else out[k] = v;
      }
    } else {
      // prefix exists -> obj should be a plain object to continue
      for (const [k, v] of Object.entries(obj)) {
        const newKey = `${prefix}[${k}]`;
        if (isPlainObject(v)) flatten(v, newKey, out);
        else out[newKey] = v;
      }
    }
    return out;
  }

  const flat = flatten(input);

  // 2) Convert flat bracket-keys into nested structure (arrays/objects)
  const result: Record<string, any> = {};

  for (const [flatKey, value] of Object.entries(flat)) {
    // parts: "filter[startedAt][gt]" -> ["filter", "startedAt", "gt"]
    const parts = flatKey.match(/[^[\]]+/g) || [];
    let current: any = result;

    parts.forEach((part, idx) => {
      const isLast = idx === parts.length - 1;
      const nextPart = parts[idx + 1];
      const isNextNumeric = /^\d+$/.test(nextPart);
      const isNumeric = /^\d+$/.test(part);

      if (isLast) {
        if (isNumeric) {
          // ensure current is an array or object that accepts numeric index
          if (!Array.isArray(current)) {
            // if current is empty object, convert it to array by replacing its properties
            // (this only affects the local reference; parent property is already the holder)
            // but we only need current[+part] so ensure property exists
          }
          current[+part] = value;
        } else {
          current[part] = value;
        }
      } else {
        if (isNumeric) {
          if (!Array.isArray(current[+part]))
            current[+part] = isNextNumeric ? [] : {};
          current = current[+part];
        } else {
          if (current[part] === undefined)
            current[part] = isNextNumeric ? [] : {};
          current = current[part];
        }
      }
    });
  }

  return result;
};
