import { FetchProjection, FormElement } from "../core";

export const getValue = (obj: any, path: string): any =>
  path
    .replace(/\[(\d+)\]/g, ".$1")
    .split(".")
    .filter(Boolean)
    .reduce((o, key) => o?.[key], obj);

export function fetchProjection(
  source: any,
  config: FetchProjection,
): Partial<FormElement> {
  const result: Record<any, any> = { [config.target]: null };
  const values = getValue(source, config.source || "");
  if (!values) return result;

  const { select } = config;

  if (Array.isArray(values)) {
    // primitive array
    if (typeof select === "string") {
      result[config.target] = values.map((item) => getValue(item, select));
    }

    // map properties
    if (typeof select === "object") {
      result[config.target] = values.map((item) =>
        Object.fromEntries(
          Object.entries(select).map(([newKey, path]) => [
            newKey,
            getValue(item, path as string),
          ]),
        ),
      );
    }
  } else {
    if (typeof select === "string") {
      result[config.target] = getValue(values, select);
    }
    // map properties
    if (typeof select === "object") {
      result[config.target] = Object.fromEntries(
        Object.entries(select).map(([newKey, path]) => [
          newKey,
          getValue(values, path as string),
        ]),
      );
    }
  }

  return result;
}
