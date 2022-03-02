import { LitElement, html } from 'lit-element';
import { nothing } from 'lit-html';

export class DashboardView extends LitElement {


  static get properties() {
    return {
      showModalWelcome: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.showModalWelcome = true;
  }
  onClose() {
    this.showModalWelcome = false;
  }
  render() {
    return html`
      ${this.showModalWelcome ? html` <lit-modal @my-event-close="${this.onClose}">Bienvenidos</lit-modal> ` : nothing}
    `;
  }
}
customElements.define('dashboard-view', DashboardView);
