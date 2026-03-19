import { FormFieldConfig } from "../../core";
import { InputField } from "../base/input.field";

/**
 * Represents the click coordinates of an `<input type="image">`.
 *
 * - `x` is the horizontal position of the click relative to the image.
 * - `y` is the vertical position of the click relative to the image.
 */
export type Coordinates = {
  x: number;
  y: number;
};

/**
 * Configuration options for an `ImageField`.
 *
 * Extends `FieldConfigForDerived<Coordinates>` to inherit standard field properties
 * such as `key`, `label`, `value`, `required`, `disabled`, etc.
 *
 * Additional image-specific properties:
 *
 * @property alt - Alternative text for the image, used for accessibility.
 * @property src - Initial source URL of the image.
 * @property height - Optional height of the image in pixels.
 * @property width - Optional width of the image in pixels.
 * @property formaction - URL to submit the form to, overrides the form's `action`.
 * @property formenctype - MIME type for form submission, overrides the form's `enctype`.
 *   Example: `"multipart/form-data"`.
 * @property formmethod - HTTP method for submission, overrides the form's `method`.
 *   Example: `"POST"` or `"GET"`.
 * @property formtarget - Target window/frame for submission, overrides the form's `target`.
 *   Example: `"_blank"`, `"_self"`.
 */
export interface ImageFieldConfig extends FormFieldConfig<Coordinates> {
  alt?: string;
  src?: string;
  height?: number;
  width?: number;
  formaction?: string;
  formenctype?: string;
  formmethod?: "GET" | "POST";
  formtarget?: string;
}

/**
 * Represents a field for `<input type="image">`.
 *
 * Extends `InputField<Coordinates>` and enforces `type` as `"image"`.
 * The `value` stores the click coordinates `{ x, y }` when the user clicks the image.
 *
 * This field behaves like a submit button in a form:
 * - You can override the form’s action, method, encoding type, or target.
 * - The coordinates can be used in form handling or event processing.
 *
 * Usage example:
 *
 * ```ts
 * const imageField = new ImageField({
 *   key: "submitImage",
 *   label: "Submit Image",
 *   alt: "Click to submit",
 *   src: "/images/button.png",
 *   width: 100,
 *   height: 50,
 *   required: true,
 *   formaction: "/submit",
 *   formmethod: "POST",
 *   formenctype: "multipart/form-data",
 *   formtarget: "_blank",
 * });
 *
 * // When the user clicks the image at coordinates (x=34, y=12)
 * console.log(imageField.value); // { x: 34, y: 12 }
 * ```
 *
 * @param config - Configuration options for the image field.
 */
export class ImageField extends InputField<Coordinates> {
  constructor(config: ImageFieldConfig) {
    super({
      ...config,
      type: "image", // enforce image input type
    });
  }
}
