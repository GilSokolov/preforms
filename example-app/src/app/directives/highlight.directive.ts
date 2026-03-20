import {
  Directive,
  ElementRef,
  Input,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import hljs from 'highlight.js/lib/core';

import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml'; // used for HTML
import scss from 'highlight.js/lib/languages/scss';
import json from 'highlight.js/lib/languages/json';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('json', json);

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements AfterViewInit, OnChanges {
  @Input('appHighlight') code = '';
  @Input() language = '';

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    this.render();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['code'] && !changes['code'].firstChange) {
      this.render();
    }
  }

  private render() {
    const element = this.el.nativeElement;

    if (!this.code) return;

    let result;

    if (this.language) {
      result = hljs.highlight(this.code, { language: this.language });
    } else {
      result = hljs.highlightAuto(this.code);
    }

    element.innerHTML = result.value;
    element.className = `hljs language-${this.language}`;
  }
}
