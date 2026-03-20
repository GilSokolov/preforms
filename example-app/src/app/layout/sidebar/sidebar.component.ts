import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExampleDefinition } from 'src/app/example-registry';
import { EXAMPLES } from 'src/app/examples';
interface CategoryGroup {
  name: string;
  examples: ExampleDefinition[];
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [RouterLink],
})
export class SidebarComponent {
  groupedExamples: CategoryGroup[] = [];

  constructor() {
    this.groupedExamples = this.groupByCategory(EXAMPLES);
  }

  private groupByCategory(examples: ExampleDefinition[]): CategoryGroup[] {
    const map: Record<string, ExampleDefinition[]> = {};

    examples.forEach((ex) => {
      const cat = ex.category || '';
      if (!map[cat]) map[cat] = [];
      map[cat].push(ex);
    });

    return Object.keys(map).map((cat) => ({ name: cat, examples: map[cat] }));
  }
}
