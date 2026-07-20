import { describe, expect, it } from "vitest";
import { Gender } from "./gender.field";

describe("Gender", () => {
  it("sets the key to 'gender' and component to 'radio'", () => {
    const field = new Gender();
    expect(field.key).toBe("gender");
    expect(field.component).toBe("radio");
  });

  it("defaults to the male/female option set", () => {
    const field = new Gender();
    expect(field.options?.map((o) => o.value)).toEqual(["male", "female"]);
  });

  it("defaults required to false", () => {
    const field = new Gender();
    expect(field.required).toBe(false);
  });

  it("accepts a raw string value via the shorthand constructor", () => {
    const field = new Gender("male");
    expect(field.value).toBe("male");
  });
});
