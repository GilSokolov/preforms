import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FieldIcon } from '@preforms/angular/core/models';

@Component({
  selector: 'app-field-icon',
  template: `
    @if (visible()) {
      @if (type === 'button') {
        test
        <button matIconButton type="button" [attr.title]="icon.title" (click)="handler()">
          <mat-icon>
            {{ icon.name }}
          </mat-icon>
        </button>
      } @else {
        <div style="padding: 8px" [attr.title]="icon.title">
          <mat-icon>
            {{ icon.name }}
          </mat-icon>
        </div>
      }
    }
  `,
  imports: [MatIconModule, MatButtonModule],
})
export class MatFieldIconComponent extends FieldIcon {}
