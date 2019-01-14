import {LitElement, html} from 'lit-element/lit-element.js';
import {style} from './<%= elementName %>-styles.js';

/**
 * `<%= elementName %>`
 * <%= elementDescription %>
 *
 * ## Styling
 *
 * | Custom property | Description | Default |
 * | --- | --- | --- |
 * | `--custom-property` | What it does | `value` |
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
export class <%=className%> extends LitElement {
  /**
   * Declare the properties that will
   * trigger calls to `_render`
   */
  static get properties() {
    return {
      greeting: { type: String },
    };
  }
  /**
   * Use the constructor to set defaults to your properties.
   */
  constructor() {
    super();
    this.greeting = 'hello';
  }
  /**
   * Style deffinitions returned as an array of CSSResults can be optomized
   * as constructable style sheets for more performant sharing across an
   * application.
   *
   * @return {CSSResult[]}
   */
  static get styles() {
    return [style];
  }
  /**
   * Use [lit-html syntax](https://lit-html.polymer-project.org/guide/template-reference)
   * to declare the DOM representation of your element.
   *
   * @return {TemplateResult}
   */
  render() {
    return html`
        <h1><%=elementName%> says '${this.greeting}'</h1>
    `;
  }
};
