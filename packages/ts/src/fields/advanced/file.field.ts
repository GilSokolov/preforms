import { FormFieldConfig } from "../../core";
import { InputField } from "../base/input.field";

/**
 * Configuration options for a `FileField`.
 *
 * Extends `FieldConfigForDerived<File | FileList>` to inherit standard field properties
 * such as `key`, `label`, `value`, `required`, etc.
 *
 * Additional properties:
 *
 * @property accept - Optional string specifying allowed file types.
 *   Examples: "image/*", ".pdf,.docx", or "image/*,.pdf".
 * @property multiple - Optional boolean to allow multiple file selection.
 */
export interface FileFieldConfig extends FormFieldConfig<File | FileList> {
  accept?: string;
  multiple?: boolean;
}

/**
 * Represents a file input field.
 *
 * Extends `InputField<File | FileList>` and enforces `type` as `"file"`.
 * The `value` is either a single `File` (for single file inputs)
 * or a `FileList` (for multiple files, if `multiple` is true).
 *
 * Usage example:
 *
 * ```ts
 * const fileField = new FileField({
 *   key: "resume",
 *   label: "Upload your resume",
 *   accept: ".pdf,.docx",
 *   multiple: true,
 *   required: true,
 * });
 *
 * if (fileField.value instanceof FileList) {
 *   for (const file of fileField.value) console.log(file.name);
 * } else if (fileField.value instanceof File) {
 *   console.log(fileField.value.name);
 * }
 * ```
 *
 * @param config - Configuration options for the file field.
 */
export class FileField extends InputField<File | FileList> {
  constructor(config: FileFieldConfig) {
    super({
      ...config,
      type: "file",
    });
  }
}
