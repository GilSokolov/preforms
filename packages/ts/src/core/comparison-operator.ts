/**
 * ComparisonOperator defines the set of operators available for validation triggers.
 */
export enum ComparisonOperator {
  /** Equal to */
  EQ = "eq",
  /** Not equal to */
  NEQ = "neq",
  /** Value is in a given array */
  IN = "in",
  /** Greater than */
  GT = "gt",
  /** Greater than or equal to */
  GTE = "gte",
  /** Less than */
  LT = "lt",
  /** Less than or equal to */
  LTE = "lte",
  /** Contains substring (for strings) */
  CONTAINS = "contains",
  /** Starts with substring (for strings) */
  STARTS_WITH = "startsWith",
  /** Ends with substring (for strings) */
  ENDS_WITH = "endsWith",
  /** Value matches regex pattern */
  MATCHES = "matches",
  /** Field is empty / null / undefined */
  EMPTY = "empty",
  /** Field is not empty */
  NOT_EMPTY = "notEmpty",
}
