import { css, html, LitElement } from 'lit-element';
import { nothing } from 'lit-html';
import {
  REGEXP_ONLY_LETTERS,
  REGEXP_ONLY_NUMBERS,
  REGEXP_ONLY_LETTERS_NUMBERS,
  REGEXP_EMAIL,
} from '../../utils/constants';


export class InputGeneral extends LitElement {
  static get styles() {
    return [
      css`
        input {
          padding: 16px;
          border: none;
          border-bottom: 1px solid #000;
          width: -webkit-fill-available;
          outline: none;
          background: #f4f4f4;
          margin: 10px 0;
        }

        input:invalid {
          color: #121212;
          background-color: #fcdfdf;
          border-bottom-color: #b92a45;
        }

        input:invalid::placeholder {
          color: #b92a45;
        }

        span {
          color: #b92a45;
          font-size:12px;
        }
      `,
    ];
  }

  static get properties() {
    return {
      id: { type: String },
      type: { type: String },
      placeholder: { type: String },
      name: { type: String },
      errorMessage: { type: Boolean },
      errorMessageText: { type: String },
      value: { type: String },
      invalid: { type: Boolean },
      onlyLetters: { type: Boolean },
      onlyNumber: { type: Boolean },
      onlyLettersNumber: { type: Boolean },
      onlyEmail: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.value = '';
    this.onlyLetters = false;
    this.onlyNumber = false;
    this.onlyLettersNumber  = false;
    this.onlyEmail  = false;
    
  }

  validarInput(e) {
    const element = e.target;
    if(this.onlyLetters){
      element.value = element.value.replace(REGEXP_ONLY_LETTERS, '');
      this.errorMessage = false;
    }else if(this.onlyNumber){
      this.value = element.value.replace(REGEXP_ONLY_NUMBERS, '');

    }else if(this.onlyLettersNumber){
      this.value = element.value.replace(REGEXP_ONLY_LETTERS_NUMBERS, '');
    }else if(this.onlyEmail){
      this.value = element.value.replace(REGEXP_EMAIL, '');
    }else{

    }
    this.emitEvent(element.value);
    
  }

  emitEvent(value){
    const event = new CustomEvent('my-event', {
      detail: {
        value:value,
      },
    });
    this.dispatchEvent(event);
  }

  firstUpdated() {
    const input = this.shadowRoot.querySelector(`#${this.id}`);
    this.errorMessage = false;
  }

  render() {
    return html`
      <input
        @input=${this.validarInput}
        id="${this.id}"
        name="${this.name}"
        value="${this.value}"
        type="${this.type}"
        placeholder="${this.placeholder}"
      />
      ${this.errorMessage === true ? 
        html`<span id="span">${this.errorMessageText}</span>`: nothing}
    `;
  }
}
window.customElements.define('input-general', InputGeneral);
