# Changelog

## 0.1.2

### Fixed
- Option groups passed through a field constructor were rebuilt as a `FormFieldOption`
  labelled "[object Object]". The `FormField` constructor and `normalizeOptions` now keep
  `FormFieldOptionGroup` instances and convert plain `{ label, options }` objects
  (for example from JSON).

### Changed (types)
- `FormField.options` is now `(FormFieldOption | FormFieldOptionGroup)[]`. Narrow with
  `isOptionGroup` before reading `.value`.
