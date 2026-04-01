export function replacePlaceholders(
  template: string,
  data: Record<string, any>,
): string {
  return template.replace(/\{([\w.]+)\}/g, (_, path) => {
    const value = path
      .split(".")
      .reduce(
        (acc: { [x: string]: any }, key: string | number) => acc?.[key],
        data,
      );
    return value !== undefined ? String(value) : `{${path}}`;
  });
}
