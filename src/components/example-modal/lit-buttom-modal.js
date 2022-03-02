import { LitElement, html } from 'lit-element';

export class LitButtomModal extends LitElement {
     
    onClickEvent() {
        const event = new CustomEvent('my-event', {});
        this.dispatchEvent(event);
      
    }
  
    render() {
        return html` <button type="${this.type}" @click="${this.onClickEvent}"><slot></slot></button>`;
    }
}
customElements.define('lit-buttom-modal', LitButtomModal);