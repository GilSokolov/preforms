import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HighlightDirective } from 'src/app/directives/highlight.directive';

@Component({
  selector: 'result-viewer',
  template: `
    @if (value) {
      <pre><code appHighlight="{{value|json}}" language="json"></code></pre>
    }
  `,
  imports: [JsonPipe, HighlightDirective],
})
export class ResultViewerComponent {
  @Input() value: any;
}
