import {html} from '@polymer/lit-element/lit-element.js';

export const style = html`
<style>
  :host {
    display: block;
    box-sizing: border-box;
    contain: content;
  }

  :host([hidden]) {
    display: none;
  }
</style>
`;
