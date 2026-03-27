import { Component } from '@angular/core';
import { LanguagePipe, MarkdownModule } from 'ngx-markdown';

import code1 from './code/1.txt';
import code2 from './code/2.txt';
import code3a from './code/3a.txt';
import code3b from './code/3b.txt';
import example from './code/example.txt';
import exc from './code/cex.txt';
import exf from './code/fex.txt';
import ee from './code/gst.txt';

@Component({
  selector: 'app-home',
  imports: [MarkdownModule, LanguagePipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  code = [
    code1,
    code2,
    code3a,
    code3b,
    example,
    exc,
    exf,
    ee,
    '<preforms-dynamic-form [fields]="fields" (submittedData)="onSubmit($event)"/>',
    `new EmailField()
new PasswordField()`,
    `new NumberField({ key: 'amount' })
new InputField({ key: 'username' })`,
    `export class AmountField extends NumberField {
  constructor() {
    super({
      key: 'amount',
      label: 'Amount',
      min: 0
    });
  }
}`,
  ];
}
