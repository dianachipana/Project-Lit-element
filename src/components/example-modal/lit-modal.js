import { LitElement, css, html } from 'lit-element';
import { material } from '../../utils/fonts';
export class LitModal extends LitElement {
  static get styles() {
    return [
      material,
      css`
        .modal {
          position: fixed;
          box-sizing: border-box;
          z-index: 999;
          background-color: rgba(0, 0, 0, 0.5);
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          visibility: hidden;
          opacity: 0;
          transition: visibility rgba(0, 0, 0, 0.5), opacity rgba(0, 0, 0, 0.5);
        }

        .modal-container {
          width: 100%;
          height: auto;
          background-color: white;
          text-align: center;
          padding: 20px;
          font-size: 20px;
          overflow: hidden;
          margin-top: -50px;
          transition: margin-top 0.5s;
        }

        .open {
          visibility: visible;
          opacity: 1;
        }

        .open > .modal-container {
          margin: 0px;
        }

        .modal-header {
          justify-content: right;
          display: flex;
        }

        .modal-header i {
          cursor: pointer;
        }

        .modal-body {
          padding: 20px;
        }

        @media (min-width: 800px){
          .modal-container {
            width: 50%;
          }

        } 
      `,
    ];
  }

  static get properties() {
    return {
      open: { type: Boolean },
    };
  }

  onClickEvent() {
    const event = new CustomEvent('my-event-close', {});
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <div class="modal open">
        <div class="modal-container">
          <div class="modal-header">
            <i id="icon-close" class="material-icons" @click="${this.onClickEvent}">close</i>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define('lit-modal', LitModal);
