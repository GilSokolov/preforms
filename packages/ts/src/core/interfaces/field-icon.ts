export interface FormFieldIcon {
  side: "left" | "right";
  name: string;
  title?: string;
  expressions?: string[];
  action?: "clear" | "copy" | "" | string;
  order?: number;
  visible?: string;
  emit?: `custom:${string}`;
}
