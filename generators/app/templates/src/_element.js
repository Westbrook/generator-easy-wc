import {LitElement, html} from '@polymer/lit-element/lit-element.js';
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
      greeting: String,
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
   * Style application abstracted from the main template for ease of
   * extendability when making child classes with custom styles
   *
   * @return {TemplateResult}
   */
  _renderStyle() {
    return style;
  }
  /**
   * Build the TemplateResult that represents the elements DOM representation
   *
   * @return {TemplateResult}
   */
  _render() {
    return html`
        ${this._renderStyle()}
        <h1><%=elementName%> says '${this.greeting}'</h1>
    `;
  }
};

customElements.define(
  '<%= elementName %>',
  <%=className%>
);
