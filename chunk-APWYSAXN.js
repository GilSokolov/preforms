import"./chunk-7DXB7J77.js";var n=`import { AfterViewInit, Component, ElementRef, inject, Renderer2, ViewChild } from '@angular/core';\r
import { FormControl } from '@angular/forms';\r
\r
import { DynamicFormComponent } from '@preforms/angular/core/dynamic-form.component';\r
import { BaseFieldComponent } from '@preforms/angular/core/fields';\r
import { NATIVE_FORM_ELEMENTS } from '@preforms/angular/native/fields';\r
import { FieldEventData, SelectField } from '@preforms/ts';\r
import hljs from 'highlight.js/lib/core';\r
import css from 'highlight.js/lib/languages/css';\r
import javascript from 'highlight.js/lib/languages/javascript';\r
import sql from 'highlight.js/lib/languages/sql';\r
import typescript from 'highlight.js/lib/languages/typescript';\r
import xml from 'highlight.js/lib/languages/xml';\r
import { EditorField } from './editor';\r
\r
hljs.registerLanguage('javascript', javascript);\r
hljs.registerLanguage('typescript', typescript);\r
hljs.registerLanguage('html', xml);\r
hljs.registerLanguage('css', css);\r
hljs.registerLanguage('sql', sql);\r
\r
@Component({\r
  selector: 'app-editor',\r
  templateUrl: './editor.component.html',\r
  styleUrls: ['./editor.component.scss'],\r
  imports: [DynamicFormComponent],\r
  providers: [NATIVE_FORM_ELEMENTS],\r
})\r
export class EditorComponent\r
  extends BaseFieldComponent<FormControl, EditorField>\r
  implements AfterViewInit\r
{\r
  @ViewChild('editableCode') editableCode!: ElementRef<HTMLElement>;\r
\r
  language = 'javascript';\r
\r
  fields = [new SelectField('language', ['javascript', 'html', 'css', 'sql'])];\r
\r
  private renderer = inject(Renderer2);\r
\r
  ngAfterViewInit() {\r
    this.highlight('var x = 123;\\nvar y = 852;');\r
  }\r
\r
  onInput() {\r
    this.highlight();\r
  }\r
\r
  highlight(initText?: string) {\r
    const el = this.editableCode.nativeElement;\r
    const text = initText || el.innerText;\r
\r
    // 1\uFE0F\u20E3 Save cursor position as an offset in plain text\r
    const selection = window.getSelection();\r
    let caretOffset = 0;\r
    if (selection && selection.rangeCount > 0) {\r
      const range = selection.getRangeAt(0);\r
      const preCaretRange = range.cloneRange();\r
      preCaretRange.selectNodeContents(el);\r
      preCaretRange.setEnd(range.endContainer, range.endOffset);\r
      caretOffset = preCaretRange.toString().length;\r
    }\r
\r
    // 2\uFE0F\u20E3 Highlight code with hljs\r
    const result = hljs.highlight(text, { language: this.language });\r
    this.renderer.setProperty(el, 'innerHTML', result.value);\r
    this.control.setValue(text.trim());\r
\r
    // 3\uFE0F\u20E3 Restore the cursor using the saved offset\r
    if (selection) {\r
      const restoreRange = document.createRange();\r
      let nodeStack: ChildNode[] = Array.from(el.childNodes);\r
      let offset = caretOffset;\r
\r
      let found = false;\r
      while (nodeStack.length && !found) {\r
        const node = nodeStack.shift()!;\r
        if (node.nodeType === Node.TEXT_NODE) {\r
          if (node.textContent!.length >= offset) {\r
            restoreRange.setStart(node, offset);\r
            restoreRange.collapse(true);\r
            found = true;\r
          } else {\r
            offset -= node.textContent!.length;\r
          }\r
        } else {\r
          nodeStack.unshift(...Array.from(node.childNodes));\r
        }\r
      }\r
\r
      // Fallback: if offset is longer than text, put at end\r
      if (!found) {\r
        restoreRange.selectNodeContents(el);\r
        restoreRange.collapse(false);\r
      }\r
\r
      selection.removeAllRanges();\r
      selection.addRange(restoreRange);\r
    }\r
  }\r
\r
  onLangSelect(e: FieldEventData) {\r
    this.language = e.value;\r
    this.highlight();\r
  }\r
}\r
`;export{n as default};
