export type FieldErrors = {
  [code: string]:
    | {
        message?: string;
        meta?: Record<string, unknown>;
      }
    | true;
};
