import {css} from 'lit-element/lit-element.js';

export const style = css`
  :host {
    display: block;
    box-sizing: border-box;
    contain: content;
  }

  :host([hidden]) {
    display: none;
  }
`;
