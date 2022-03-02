import { LitElement,css, html } from "lit-element";
import "../../components/example-modal/lit-buttom-modal";
import "../../components/example-modal/lit-modal";
import { nothing } from "lit-html";

export class ExampleModal extends LitElement {
    static get styles() {
      return [
        css`
          .container-buttom {
           padding-top:20px;
          }
        `,
      ];
    }
  static get properties() {
    return {
        showModalGeneral: { type: Boolean }, 
    };
  }

  onClick() {
    this.showModalGeneral = true;
  }
  onClose() {
    this.showModalGeneral = false;
  }

  render() {
    return html`
      <lit-buttom-modal @my-event="${this.onClick}">open modal</lit-buttom-modal>
      ${this.showModalGeneral?
         html`
         <lit-modal @my-event-close="${this.onClose}">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <div class="container-buttom">
              <lit-buttom-modal @my-event="${this.onClose}">Accept</lit-buttom-modal>
              <lit-buttom-modal @my-event="${this.onClose}">Cancel</lit-buttom-modal>
              </div>
            </lit-modal>
          `: nothing}
    `;
  }
}
customElements.define("example-modal", ExampleModal);
