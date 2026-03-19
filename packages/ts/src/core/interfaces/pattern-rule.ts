export interface PatternRule<T = RegExp> {
  rule: T;
  message: string; // override error message
  meta?: Record<string, any>;
}

export type PatternInput =
  | PatternRule<string | RegExp>
  | [string | RegExp, string];
