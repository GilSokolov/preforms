import { AfterViewInit, Component, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';
import { BaseFieldComponent } from '@preforms/angular/core/fields';
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';
import { FieldEventData, SelectField } from '@preforms/ts';
import hljs from 'highlight.js/lib/core';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import sql from 'highlight.js/lib/languages/sql';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import { EditorField } from './editor';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('sql', sql);

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  imports: [DynamicFormComponent],
  providers: [NATIVE_FORM_ELEMENTS],
})
export class EditorComponent
  extends BaseFieldComponent<FormControl, EditorField>
  implements AfterViewInit
{
  @ViewChild('editableCode') editableCode!: ElementRef<HTMLElement>;

  language = 'javascript';

  fields = [new SelectField('language', ['javascript', 'html', 'css', 'sql'])];

  private renderer = inject(Renderer2);

  ngAfterViewInit() {
    this.highlight('var x = 123;\nvar y = 852;');
  }

  onInput() {
    this.highlight();
  }

  highlight(initText?: string) {
    const el = this.editableCode.nativeElement;
    const text = initText || el.innerText;

    // 1️⃣ Save cursor position as an offset in plain text
    const selection = window.getSelection();
    let caretOffset = 0;
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(el);
      preCaretRange.setEnd(range.endContainer, range.endOffset);
      caretOffset = preCaretRange.toString().length;
    }

    // 2️⃣ Highlight code with hljs
    const result = hljs.highlight(text, { language: this.language });
    this.renderer.setProperty(el, 'innerHTML', result.value);
    this.control.setValue(text.trim());

    // 3️⃣ Restore the cursor using the saved offset
    if (selection) {
      const restoreRange = document.createRange();
      let nodeStack: ChildNode[] = Array.from(el.childNodes);
      let offset = caretOffset;

      let found = false;
      while (nodeStack.length && !found) {
        const node = nodeStack.shift()!;
        if (node.nodeType === Node.TEXT_NODE) {
          if (node.textContent!.length >= offset) {
            restoreRange.setStart(node, offset);
            restoreRange.collapse(true);
            found = true;
          } else {
            offset -= node.textContent!.length;
          }
        } else {
          nodeStack.unshift(...Array.from(node.childNodes));
        }
      }

      // Fallback: if offset is longer than text, put at end
      if (!found) {
        restoreRange.selectNodeContents(el);
        restoreRange.collapse(false);
      }

      selection.removeAllRanges();
      selection.addRange(restoreRange);
    }
  }

  onLangSelect(e: FieldEventData) {
    this.language = e.value;
    this.highlight();
  }
}
