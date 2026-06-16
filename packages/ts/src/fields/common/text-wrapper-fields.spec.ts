import { describe, expect, it } from "vitest";
import { FirstName } from "./firstname-field";
import { LastName } from "./lastname.field";
import { MiddleName } from "./middlename.field";
import { Name } from "./name.field";
import { FullName } from "./fullname.field";
import { UserName } from "./username.field";
import { PostalCode } from "./postal-code.field";
import { State } from "./state.field";
import { Street } from "./street.field";
import { City } from "./city.field";
import { Description } from "./description.field";
import { PhoneNumber } from "./phone-number.field";
import { DateOfBirth } from "./date-of-birth.field";
import { EmailField } from "./email-field";
import { PasswordField } from "./password-field";

describe.each([
  { Field: FirstName, key: "firstName", defaultRequired: true },
  { Field: LastName, key: "lastName", defaultRequired: true },
  { Field: MiddleName, key: "middleName", defaultRequired: false },
  { Field: Name, key: "name", defaultRequired: true },
  { Field: FullName, key: "fullName", defaultRequired: true },
  { Field: UserName, key: "username", defaultRequired: true },
  { Field: PostalCode, key: "postalCode", defaultRequired: true },
  { Field: State, key: "state", defaultRequired: false },
  { Field: Street, key: "street", defaultRequired: true },
  { Field: City, key: "city", defaultRequired: true },
  { Field: Description, key: "description", defaultRequired: false },
  { Field: PhoneNumber, key: "phoneNumber", defaultRequired: true },
  { Field: DateOfBirth, key: "dateOfBirth", defaultRequired: true },
  { Field: EmailField, key: "email", defaultRequired: true },
  { Field: PasswordField, key: "password", defaultRequired: true },
])("$Field.name", ({ Field, key, defaultRequired }) => {
  it(`defaults the key to "${key}"`, () => {
    const field = new (Field as any)();
    expect(field.key).toBe(key);
  });

  it(`defaults required to ${defaultRequired}`, () => {
    const field = new (Field as any)();
    expect(field.required).toBe(defaultRequired);
  });

  it("accepts a raw string value via the shorthand constructor", () => {
    const field = new (Field as any)("hello");
    expect(field.value).toBe("hello");
  });

  it("accepts a full config object, including a custom key override", () => {
    const field = new (Field as any)({ value: "custom", key: "customKey" });
    expect(field.value).toBe("custom");
    expect(field.key).toBe("customKey");
  });
});
