import { describe, expect, it } from "vitest";
import { Address } from "./address.field";

describe("Address", () => {
  it("defaults the key to 'address' and builds the default subfields", () => {
    const field = new Address();

    expect(field.key).toBe("address");
    expect(field.fields.map((f) => f.key)).toEqual([
      "street",
      "city",
      "state",
      "postalCode",
      "country",
    ]);
  });

  it("defaults required to true", () => {
    const field = new Address();
    expect(field.required).toBe(true);
  });

  it("seeds subfield values from a raw AddressValue object", () => {
    const field = new Address({
      street: "123 Main St",
      city: "New York",
      state: "NY",
      postalCode: "10001",
      country: "USA",
    });

    const values = Object.fromEntries(field.fields.map((f) => [f.key, f.value]));

    expect(values).toEqual({
      street: "123 Main St",
      city: "New York",
      state: "NY",
      postalCode: "10001",
      country: "USA",
    });
  });

  it("respects a custom required flag and key when given as positional args", () => {
    const field = new Address(
      { street: "123 Main St" },
      false,
      "billingAddress",
    );

    expect(field.required).toBe(false);
    expect(field.key).toBe("billingAddress");
  });

  it("uses explicitly provided fields instead of the defaults", () => {
    const customFields = [{ key: "custom" } as any];
    const field = new Address({
      value: { street: "123 Main St" },
      fields: customFields,
    } as any);

    expect(field.fields).toBe(customFields);
  });
});
