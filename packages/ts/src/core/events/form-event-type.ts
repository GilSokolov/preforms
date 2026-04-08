/**
 * Form-level events emitted by the dynamic form.
 *
 * Events represent either:
 * - internal form state changes (change, dirty, focus, blur), or
 * - requests for the host to perform actions (submit, reset, fetch data)
 *
 * Enum keys: SCREAMING_SNAKE_CASE
 * Enum values: snake_case strings used in configs and JSON
 */
export enum FormEventType {
  INIT = "init",
  // ----- Reset lifecycle -----
  /** Form was reset to initial state */
  RESET = "reset",

  // ----- Submission lifecycle -----
  /** Form submission was triggered */
  SUBMIT = "submit",

  // ----- State & value tracking -----
  /** Any field value changed */
  CHANGE = "change",
  /** Form has been modified */
  BECOME_DIRTY = "become_dirty",
  BECOME_PRISTINE = "become_pristine",

  // ----- Focus & interaction -----
  /** Field received focus */
  FOCUS = "focus",
  /** Field lost focus */
  BLUR = "blur",

  // ----- Form Requests (to be handled by the host) -----
  /** Host should submit the form (e.g., HTTP request, dialog action) */
  REQUEST_SUBMIT = "request:submit",
  /** Host should reset the form */
  REQUEST_RESET = "request:reset",
  /** Host should fetch or refresh data */
  REQUEST_DATA = "request:data",
}
