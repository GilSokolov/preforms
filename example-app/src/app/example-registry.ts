import { Type } from '@angular/core';

export interface ExampleAsset {
  label: string; // Tab label, e.g. "TS", "HTML", "SCSS"
  language: string; // Highlight.js language, e.g. "typescript", "html", "scss"
  load: () => Promise<string>; // Lazy loader function
}

export interface ExampleDefinition {
  id: string;
  title: string;
  description: string;
  loadComponent: () => Promise<Type<any>>;
  assets: ExampleAsset[]; // <-- array of code assets
  category?: string;
}
