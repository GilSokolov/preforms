import {
  ChangeDetectorRef,
  Component,
  ComponentRef,
  OnDestroy,
  OnInit,
  outputBinding,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule, provideMarkdown } from 'ngx-markdown';
import { Subscription } from 'rxjs';
import { EXAMPLES } from 'src/app/examples';
import { ExampleDefinition } from '../../example-registry';
import { CodeTabsComponent } from '../code-tabs/code-tabs.component';
import { DemoCardComponent } from '../demo-card/demo-card.component';
import { ResultViewerComponent } from '../result-viewer/result-viewer.component';

@Component({
  selector: 'app-example-page',
  templateUrl: './example-page.component.html',
  styleUrl: './example-page.component.scss',
  imports: [DemoCardComponent, CodeTabsComponent, ResultViewerComponent, MarkdownModule],
  providers: [provideMarkdown()],
})
export class ExamplePageComponent implements OnInit, OnDestroy {
  @ViewChild('demoContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;

  example!: ExampleDefinition;

  private compRef?: ComponentRef<any>;

  formValue: any;

  codeAssets: { label: string; language: string; content: string }[] = [];

  sub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
  ) {}

  async loadComponent() {
    const component = await this.example.loadComponent();

    this.container.clear();

    this.compRef = this.container.createComponent(component, {
      bindings: [
        outputBinding('formChange', (value) => {
          this.formValue = value;
        }),
      ],
    });
  }

  async loadAssets() {
    this.codeAssets = await Promise.all(
      this.example.assets.map(async (asset) => {
        const content = await asset.load();
        return {
          label: asset.label,
          language: asset.language,
          content,
        };
      }),
    );
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.example = EXAMPLES.find((e) => e.id === params['id'])!;

      // Then load component and assets
      Promise.all([this.loadComponent(), this.loadAssets()]).then(() => {
        // TO avoid NG0100. detect changes again after all async updates
        this.formValue = undefined;
        this.cd.detectChanges();
      });
    });
  }

  ngOnDestroy() {
    if (this.compRef) {
      this.compRef.destroy();
      this.compRef = undefined;
    }

    this.container?.clear();

    this.sub?.unsubscribe();
  }
}
