import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly heroInstall = 'npm i @preforms/ts @preforms/angular';

  readonly heroSnippet = [
    { n: 1, html: '<span class="kw">new</span> <span class="fn">UserName</span>({' },
    { n: 2, html: '  <span class="prop">required</span><span class="op">:</span> <span class="kw">true</span>,' },
    { n: 3, html: '  <span class="prop">triggers</span><span class="op">:</span> [' },
    { n: 4, html: '    {' },
    { n: 5, html: '      <span class="prop">on</span><span class="op">:</span> <span class="cls">FormFieldEventType</span><span class="op">.</span><span class="prop">CHANGE</span>, <span class="annot annot-teal">reacts to input</span>' },
    { n: 6, html: '      <span class="prop">action</span><span class="op">:</span> <span class="cls">TriggerAction</span><span class="op">.</span><span class="prop">VALIDATE_ASYNC</span>, <span class="annot annot-indigo">async validation</span>' },
    { n: 7, html: '      <span class="prop">fetchUrl</span><span class="op">:</span> <span class="str">"/api/check/$value"</span>,' },
    { n: 8, html: '    },' },
    { n: 9, html: '  ],' },
    { n: 10, html: '})' },
    { n: 11, html: '&nbsp;' },
    { n: 12, html: '<span class="kw">new</span> <span class="fn">SelectField</span>({' },
    { n: 13, html: '  <span class="prop">key</span><span class="op">:</span> <span class="str">"region"</span>,' },
    { n: 14, html: '  <span class="prop">triggers</span><span class="op">:</span> [{' },
    { n: 15, html: '    <span class="prop">on</span><span class="op">:</span> <span class="cls">FormFieldEventType</span><span class="op">.</span><span class="prop">INIT</span>, <span class="annot annot-amber">fires on load</span>' },
    { n: 16, html: '    <span class="prop">action</span><span class="op">:</span> <span class="cls">TriggerAction</span><span class="op">.</span><span class="prop">FETCH</span>,' },
    { n: 17, html: '    <span class="prop">fetchUrl</span><span class="op">:</span> <span class="str">"/api/regions"</span>,' },
    { n: 18, html: '    <span class="prop">projection</span><span class="op">:</span> {' },
    { n: 19, html: '      <span class="prop">target</span><span class="op">:</span> <span class="str">"options"</span>, <span class="annot annot-teal">patches the field</span>' },
    { n: 20, html: '      <span class="prop">source</span><span class="op">:</span> <span class="str">"results"</span>,' },
    { n: 21, html: '    },' },
    { n: 22, html: '  }],' },
    { n: 23, html: '})' },
  ];

  readonly asyncSnippet = [
    { n: 1, html: '<span class="kw">new</span> <span class="fn">UserName</span>({' },
    { n: 2, html: '  <span class="prop">triggers</span><span class="op">:</span> [{' },
    { n: 3, html: '    <span class="prop">on</span><span class="op">:</span>     <span class="cls">FormFieldEventType</span><span class="op">.</span><span class="prop">CHANGE</span>,' },
    { n: 4, html: '    <span class="prop">action</span><span class="op">:</span> <span class="cls">TriggerAction</span><span class="op">.</span><span class="prop">VALIDATE_ASYNC</span>,' },
    { n: 5, html: '    <span class="prop">fetchUrl</span><span class="op">:</span> <span class="str">"/api/username/$value"</span>,' },
    { n: 6, html: '  }],' },
    { n: 7, html: '})' },
  ];

  readonly selectSnippet = [
    { n: 1, html: '<span class="kw">new</span> <span class="fn">SelectField</span>({' },
    { n: 2, html: '  <span class="prop">key</span><span class="op">:</span> <span class="str">"city"</span>,' },
    { n: 3, html: '  <span class="prop">triggers</span><span class="op">:</span> [{' },
    { n: 4, html: '    <span class="prop">on</span><span class="op">:</span>     <span class="cls">FormFieldEventType</span><span class="op">.</span><span class="prop">CHANGE</span>,' },
    { n: 5, html: '    <span class="prop">watchField</span><span class="op">:</span> <span class="str">"country"</span>,' },
    { n: 6, html: '    <span class="prop">action</span><span class="op">:</span> <span class="cls">TriggerAction</span><span class="op">.</span><span class="prop">FETCH</span>,' },
    { n: 7, html: '    <span class="prop">fetchUrl</span><span class="op">:</span> <span class="str">"/api/cities/$country"</span>,' },
    { n: 8, html: '    <span class="prop">projection</span><span class="op">:</span> { <span class="prop">target</span><span class="op">:</span> <span class="str">"options"</span> },' },
    { n: 9, html: '  }],' },
    { n: 10, html: '})' },
  ];

  readonly customFieldSnippet = [
    { n: 1, html: '<span class="cm">// 1. Extend FormField</span>' },
    { n: 2, html: '<span class="kw">export class</span> <span class="cls">EditorField</span> <span class="kw">extends</span> <span class="cls">FormField</span><span class="op">&lt;</span><span class="kw">string</span><span class="op">&gt;</span> {' },
    { n: 3, html: '  <span class="fn">constructor</span>(<span class="prop">key</span><span class="op">:</span> <span class="kw">string</span>) {' },
    { n: 4, html: '    <span class="kw">super</span>({ <span class="prop">component</span><span class="op">:</span> <span class="str">"editor"</span>, key });' },
    { n: 5, html: '  }' },
    { n: 6, html: '}' },
    { n: 7, html: '&nbsp;' },
    { n: 8, html: '<span class="cm">// 2. Register with lazy loader</span>' },
    { n: 9, html: '<span class="fn">provideDynamicFormLazyFields</span>([{' },
    { n: 10, html: '  <span class="prop">type</span><span class="op">:</span> <span class="str">"editor"</span>,' },
    { n: 11, html: '  <span class="prop">loader</span><span class="op">:</span> () <span class="op">=&gt;</span>' },
    { n: 12, html: '    <span class="kw">import</span>(<span class="str">"./editor.component"</span>)' },
    { n: 13, html: '      .<span class="fn">then</span>(m <span class="op">=&gt;</span> m.<span class="cls">EditorComponent</span>),' },
    { n: 14, html: '}])' },
  ];

  readonly features = [
    {
      icon: '⚡',
      title: 'Trigger system',
      desc: 'Attach async validation, fetches, patches, toggles, dialogs, and resets to any field event.',
    },
    {
      icon: '↘',
      title: 'API projections',
      desc: 'Fetch remote data on INIT, reshape it, and patch it straight into form state.',
    },
    {
      icon: '∑',
      title: 'Aggregates',
      desc: 'Validate dynamic arrays with product, sum, unique, and other cross-row rules.',
    },
    {
      icon: '⤞',
      title: 'FieldArray',
      desc: 'Build repeatable rows with add/remove actions, per-row calculations, and array-level validation.',
    },
    {
      icon: 'ƒ',
      title: 'OutputField',
      desc: 'Define calculated fields that react to other values without wiring extra subscriptions.',
    },
    {
      icon: '◑',
      title: 'Lazy loading',
      desc: 'Register heavy custom field components only when the form actually needs them.',
    },
  ];

  readonly examples = [
    { title: 'Field types', tag: 'reference', route: '/examples/form-fields', desc: 'The built-in field catalog and how they fit together.' },
    { title: 'Async validation', tag: 'async', route: '/examples/async-validation', desc: 'Server-side checks wired from a single trigger.' },
    { title: 'Dependent selects', tag: 'fetch', route: '/examples/dynamic-select-fetch', desc: 'Cascading dropdowns driven by parent field changes.' },
    { title: 'Cart builder', tag: 'arrays', route: '/examples/cart-builder', desc: 'Dynamic rows, subtotals, and aggregate cart rules.' },
    { title: 'Lazy-loaded fields', tag: 'lazy', route: '/examples/lazy-loading', desc: 'Custom components that load only when they are needed.' },
    { title: 'Pokemon battle', tag: 'wild', route: '/examples/dynamic-select-fetch-remote', desc: 'A full Pokemon battle powered by form state. Yes, really.' },
  ];

  copyInstall(event: Event) {
    const button = event.currentTarget as HTMLButtonElement | null;
    if (!button) return;

    navigator.clipboard.writeText(this.heroInstall).then(() => {
      const previous = button.textContent ?? 'copy';
      button.textContent = 'copied!';
      window.setTimeout(() => {
        button.textContent = previous;
      }, 1200);
    });
  }
}
