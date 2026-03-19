import { Component } from "@angular/core";

@Component({
  selector: "preforms-handle",

  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18px"
      height="24px"
      viewBox="0 0 960 960"
      fill="grey"
    >
      <circle cx="360" cy="800" r="56.5" />
      <circle cx="600" cy="800" r="56.5" />
      <circle cx="360" cy="560" r="56.5" />
      <circle cx="600" cy="560" r="56.5" />
      <circle cx="360" cy="320" r="56.5" />
      <circle cx="600" cy="320" r="56.5" />
    </svg>
  `,
})
export class HandleComponent {}
