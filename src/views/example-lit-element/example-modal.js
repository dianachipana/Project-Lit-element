import { LitElement, css, html } from 'lit-element';
import '../../components/example-modal/lit-buttom-modal';
import '../../components/example-modal/lit-modal';
import { material } from '../../utils/fonts';

export class ExampleModal extends LitElement {
  static get styles() {
    return [
      material,
      css`
        button {
          margin: 10px;
        }
        .container-buttom {
          padding-top: 20px;
        }

        i {
          cursor: pointer;
        }
      `,
    ];
  }

  renderModalExample() {
    return html`
      <lit-modal>
        <button slot="buttom">Open Modal</button>
        <div slot="header">
          <span>Bienvenidos</span>
        </div>
        <div slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <div class="container-buttom">
            <button class="close">Accept</button>
            <button class="close">Cancel</button>
          </div>
        </div>
        <div slot="footer">
          <span>@Neoris.com</span>
        </div>
      </lit-modal>
    `;
  }

  renderModalExampleCentered() {
    return html`
      <lit-modal centered>
        <button slot="buttom">Open Modal Centered</button>
        <div slot="header">
          <span>Bienvenidos</span>
        </div>
        <div slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <div class="container-buttom">
            <button class="close">Accept</button>
            <button class="close">Cancel</button>
          </div>
        </div>
        <div slot="footer">
          <span>@Neoris.com</span>
        </div>
      </lit-modal>
    `;
  }

  renderModalExampleNoStyle() {
    return html`
      <lit-modal noStyle>
        <button slot="buttom">Open Modal No Style</button>
        <div slot="header">
          <span>Bienvenidos</span>
        </div>
        <div slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <div class="container-buttom">
            <button class="close">Accept</button>
            <button class="close">Cancel</button>
          </div>
        </div>
        <div slot="footer">
          <span>@Neoris.com</span>
        </div>
      </lit-modal>
    `;
  }

  renderModalExampleHideClickout() {
    return html`
      <lit-modal hide-click-out>
        <button slot="buttom">Open Modal Hideclickout</button>
        <div slot="header">
          <span>Bienvenidos</span>
        </div>
        <div slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <div class="container-buttom">
            <button class="close">Close Modal</button>
          </div>
        </div>
        <div slot="footer">
          <span>@Neoris.com</span>
        </div>
      </lit-modal>
    `;
  }

  renderModalExampleBackground() {
    return html`
      <lit-modal hide-click-out modalBackground="green" centered>
        <button slot="buttom">Open Modal background</button>
        <div slot="header">
          <span>Bienvenidos</span>
        </div>
        <div slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <div class="container-buttom">
            <button class="close">Close Modal</button>
          </div>
        </div>
        <div slot="footer">
          <span>@Neoris.com</span>
        </div>
      </lit-modal>
    `;
  }

  renderModalExampleStyleTitle() {
    return html`
      <lit-modal hide-click-out colorTitle="#ff0053cf">
        <button slot="buttom">Open Modal Color Title</button>
        <div slot="header">
          <span>Bienvenidos</span>
        </div>
        <div slot="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <div class="container-buttom">
            <button class="close">Close Modal</button>
          </div>
        </div>
      </lit-modal>
    `;
  }

  render() {
    return html`
      ${this.renderModalExample()} ${this.renderModalExampleCentered()} ${this.renderModalExampleNoStyle()}
      ${this.renderModalExampleHideClickout()} ${this.renderModalExampleBackground()}
      ${this.renderModalExampleStyleTitle()}
    `;
  }
}
customElements.define('example-modal', ExampleModal);
