# Changelog

## 0.2.0

### Added
- Themable `--preforms-*` custom properties for native and shared fields (see README "Theming").

### Breaking
- Removed `--form-description-color`, `--divider-color`, `--divider-label-color` and
  `--form-image-radius`. Use `--preforms-muted`, `--preforms-border`, `--preforms-muted`
  and `--preforms-radius`.
- Array drag preview now renders inside the form (`cdkDragPreviewContainer="parent"`)
  instead of on `<body>`; it mispositions under a transformed ancestor.
- Array items gain a border, radius and padding; spacing and hint/description typography
  follow the tokens, so default sizes shift slightly.
- Native controls, buttons, fieldset and details are now styled.
