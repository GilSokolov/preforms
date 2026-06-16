import { describe, expect, it } from "vitest";
import { CurrencyField } from "./currency.field";

describe("CurrencyField", () => {
  it("sets the key to 'currency' and component to 'select'", () => {
    const field = new CurrencyField();
    expect(field.key).toBe("currency");
    expect(field.component).toBe("select");
  });

  it("loads the full ISO currency list by default", () => {
    const field = new CurrencyField();
    expect(field.options?.length).toBeGreaterThan(50);
  });

  it("formats labels as 'CODE — Name' by default", () => {
    const field = new CurrencyField({
      currencies: [{ code: "USD", name: "US Dollar" }],
    });

    expect(field.options?.[0].label).toBe("USD — US Dollar");
    expect(field.options?.[0].value).toBe("USD");
  });

  it("formats labels as just the code when labelFormat is 'code'", () => {
    const field = new CurrencyField({
      currencies: [{ code: "USD", name: "US Dollar" }],
      labelFormat: "code",
    });

    expect(field.options?.[0].label).toBe("USD");
  });

  it("formats labels as just the name when labelFormat is 'name'", () => {
    const field = new CurrencyField({
      currencies: [{ code: "USD", name: "US Dollar" }],
      labelFormat: "name",
    });

    expect(field.options?.[0].label).toBe("US Dollar");
  });

  it("formats labels as 'symbol code' when labelFormat is 'symbol-code'", () => {
    const field = new CurrencyField({
      currencies: [{ code: "USD", name: "US Dollar", symbol: "$" }],
      labelFormat: "symbol-code",
    });

    expect(field.options?.[0].label).toBe("$ USD");
  });

  it("falls back to the code when symbol-code format is used but no symbol exists", () => {
    const field = new CurrencyField({
      currencies: [{ code: "USD", name: "US Dollar" }],
      labelFormat: "symbol-code",
    });

    expect(field.options?.[0].label).toBe("USD");
  });

  it("respects a custom limited currency list", () => {
    const field = new CurrencyField({
      currencies: [
        { code: "USD", name: "US Dollar" },
        { code: "EUR", name: "Euro" },
      ],
    });

    expect(field.options).toHaveLength(2);
  });
});
