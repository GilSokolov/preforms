import { FieldDecorative } from "../../core";

export interface FormImageConfig extends Partial<FieldDecorative> {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
}

export class FormImage extends FieldDecorative {
  src: string;
  alt?: string;
  width?: string;
  height?: string;

  constructor(srcOrConfig: string | FormImageConfig) {
    const config: FormImageConfig =
      typeof srcOrConfig === "string" ? { src: srcOrConfig } : srcOrConfig;

    super({
      className: config.className || "form-image",
      ...config,
      component: "form-image",
    });

    this.src = config.src;
    this.alt = config.alt;
    this.width = config.width;
    this.height = config.height;
  }
}
