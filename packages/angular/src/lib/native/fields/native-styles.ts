// Shared native styles. Tokens are only read here, never declared; a consumer
// sets them on any ancestor.

export const CONTROL_STYLES = `
.preforms-input,
.preforms-select-field,
.preforms-textarea {
  box-sizing: border-box;
  padding: var(--preforms-control-pad, 0.5rem);
  border: 1px solid var(--preforms-border, color-mix(in srgb, currentColor 25%, transparent));
  border-radius: var(--preforms-radius, 0.5rem);
  background: var(--preforms-field, Field);
    color: inherit;
  font: inherit;
}

.preforms-input:focus-visible,
.preforms-select-field:focus-visible,
.preforms-textarea:focus-visible {
  outline: 2px solid var(--preforms-accent, AccentColor);
  outline-offset: 1px;
}

.preforms-input.ng-invalid.ng-touched,
.preforms-select-field.ng-invalid.ng-touched,
.preforms-textarea.ng-invalid.ng-touched {
  border-color: var(--preforms-danger, #dc2626);
}
`;

export const CHOICE_STYLES = `
input[type="checkbox"],
input[type="radio"] {
  accent-color: var(--preforms-accent, AccentColor);
  color: inherit;
  font: inherit;
}

.preforms-checkbox-description,
.preforms-radio-description,
.preforms-field-hint,
.preforms-field-error {
  font-size: var(--preforms-font-size-sm, 0.85rem);
  line-height: var(--preforms-line-height, 1.4);
}

.preforms-checkbox-description,
.preforms-radio-description,
.preforms-field-hint {
  color: var(--preforms-muted, color-mix(in srgb, currentColor 60%, transparent));
}

.preforms-field-error {
  color: var(--preforms-danger, #dc2626);
}
`;

export const FORM_FIELD_STYLES = `
.preforms-form-field {
  margin-bottom: var(--preforms-gap, 1rem);
}

.preforms-form-field-label,
.preforms-field-hint,
.preforms-field-description,
.preforms-field-error {
  font-size: var(--preforms-font-size-sm, 0.85rem);
  line-height: var(--preforms-line-height, 1.4);
}

.preforms-form-field-label,
.preforms-field-hint {
  color: var(--preforms-muted, color-mix(in srgb, currentColor 60%, transparent));
}

.preforms-field-description {
  display: block;
  color: var(--preforms-muted, color-mix(in srgb, currentColor 60%, transparent));
}

.preforms-field-error {
  color: var(--preforms-danger, #dc2626);
}
`;
