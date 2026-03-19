/**
 * Convert a string to Title Case.
 *
 * This function transforms input strings into a human-readable "Title Case" format
 * by capitalizing the first letter of each word while preserving acronyms (all uppercase words).
 * It also handles common word delimiters like underscores, hyphens, and camelCase.
 *
 * @param input - The string to transform. Defaults to an empty string.
 * @returns A new string in Title Case format.
 *
 * @example
 * ```ts
 * toTitleCase("firstName");           // "First Name"
 * toTitleCase("last_name");           // "Last Name"
 * toTitleCase("APIResponse");         // "API Response"
 * toTitleCase("user-id");             // "User Id"
 * toTitleCase("");                     // ""
 * ```
 *
 * @remarks
 * - **Acronyms preserved**: words in all uppercase letters are not lowercased.
 *   Example: "APIResponse" → "API Response", "HTMLParser" → "HTML Parser".
 * - **Delimiters handled**: underscores (`_`) and hyphens (`-`) are replaced with spaces.
 * - **CamelCase splitting**: splits words at camelCase boundaries.
 * - Multiple spaces are normalized to a single space in the final output.
 */
export function toTitleCase(input = ""): string {
  if (!input) return "";

  // Replace underscores/hyphens with spaces
  let str = input.replace(/[_-]+/g, " ");

  // Split camelCase & keep acronyms together
  str = str.replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2"); // Split before last capital of acronym
  str = str.replace(/([a-z0-9])([A-Z])/g, "$1 $2"); // Split camelCase normally

  // Split words by space
  const words = str.split(/\s+/);

  // Capitalize, preserving acronyms
  const titleCased = words.map((word) => {
    if (word.toUpperCase() === word) return word; // acronym
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return titleCased.join(" ");
}
