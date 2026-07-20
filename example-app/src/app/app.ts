import { AsyncPipe, isPlatformBrowser, NgClass } from '@angular/common';
import { Component, ElementRef, inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { SidenavService } from './services/sidenav.service';

import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, ToolbarComponent, NgClass, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  service = inject(SidenavService);
  private platformId = inject(PLATFORM_ID);

  @ViewChild('content') content!: ElementRef<HTMLElement>;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        requestAnimationFrame(() => {
          this.content.nativeElement.scrollTop = 0;
        });
      });
  }
}
