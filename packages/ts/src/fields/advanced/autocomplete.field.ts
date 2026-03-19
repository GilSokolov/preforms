import { FormFieldOption, FormField, FormFieldConfig } from "../../core";

/**
 * Configuration for AutocompleteField
 */
export interface AutocompleteFieldConfig extends FormFieldConfig<string> {
  /**
   * List of options to show in the autocomplete dropdown.
   * Can be a string array or FormFieldOption array.
   */
  options: string[] | FormFieldOption[];

  /** Optional maximum number of suggestions to display */
  maxSuggestions?: number;
}

/**
 * AutocompleteField allows the user to type freely and see a filtered list of options.
 *
 * Example:
 * ```ts
 * new AutocompleteField("country", ["Cyprus", "France", "Germany"]);
 *
 * new AutocompleteField("country", [
 *   { value: "CY", label: "Cyprus" },
 *   { value: "FR", label: "France" },
 * ]);
 * ```
 */
export class AutocompleteField extends FormField<string> {
  maxSuggestions?: number;

  constructor(
    key: string,
    options: string[] | FormFieldOption[],
    config: Partial<AutocompleteFieldConfig> = {},
  ) {
    super({
      ...config,
      key,
      value: config.value ?? "",
      options,
      component: "autocomplete",
    });

    this.maxSuggestions = config.maxSuggestions ?? 5; // default limit
  }
}
