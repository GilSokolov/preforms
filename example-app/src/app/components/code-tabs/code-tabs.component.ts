import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'code-tabs',
  templateUrl: './code-tabs.component.html',
  imports: [MatTabsModule, HighlightDirective],
})
export class CodeTabsComponent {
  @Input() codeAssets: { label: string; language: string; content: string }[] = [];
}
