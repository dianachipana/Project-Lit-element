import { LitElement, css, html } from 'lit-element';

export class ButtonGeneral extends LitElement {


    static get styles() {
        return [
            css`
            button {
                background-color: #1973b8;
                outline:none;
                width: 100%;
                max-width: 100%;
                padding: 16px;
                color:white;
                border:none;
                margin: 10px 0;
            }
      `
        ];
    }

    static get properties() {
        return {
            type: { type: String }
        };

    }

    
    onClickEvent() {
      const event = new CustomEvent('my-event', {});
      console.log(event);
      this.dispatchEvent(event);
    
  }


    render() {
        return html`
        <button type="${this.type}" @click="${this.onClickEvent}"><slot></slot></button>
        `;
    }
}
customElements.define('button-general', ButtonGeneral);