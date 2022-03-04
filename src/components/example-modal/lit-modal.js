import {
  css,
  html,
  LitElement,
} from 'lit-element';

import { material } from '../../utils/fonts';

export class LitModal extends LitElement {
  static get styles() {
    return [
      material,
      css`
      :host {
        --modal-container-background: white;
    }
        .modal, .modal_bg {
          position: fixed;
          box-sizing: border-box;
          z-index: 999;
          rgba(0, 0, 0, .4);
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s;
          align-items: flex-start;
        }

        .modal_bg{
          opacity: 0.6;
        }

        .modal .modal-container {
          background-color: var(--modal-container-background);
          width: 50%;
          height: auto;
          text-align: center;
          padding: 20px;
          font-size: 20px;
          overflow: hidden;
          transition: margin-top 0.5s;
        }

        .open {
          visibility: visible;
          opacity: 1;
        }
        .closed {
          display: none;
          background-color: transparent;
        }
       
        .open > .modal-container {
          margin: 0px;
        }

        .modal-header {
          justify-content: center;
          display: flex;
        }

        .modal-container i {
          cursor: pointer;
          left: 48%;
          position: relative;
        }
        
        .close {
          height: fit-content;
        }

        .modal-body {
          padding: 20px;
        }

        @media (min-width: 800px) {
          .modal-container {
            width: 50%;
          }
        }
      `,
    ];
  }

  static get properties() {
    return {
      hideClickOut: { type: Boolean, attribute: 'hide-click-out' },
      centered:{ type: Boolean },
      modalBackground: { type: String },
      colorTitle:{ type: String },
      noStyle:{ type: Boolean },
   
    };
  }

  constructor() {
    super();
    this.hideClickOut = false;
    this.modalBackground = 'rgba(0, 0, 0, .4)';
    this.colorTitle= 'black';
    this.centered = false;
    this.noStyle = false;
  }

  modalClickListener() {
    this.modal.addEventListener('click', function (e) {
      if (e.target === this) {
        setTimeout(() => {
          this.className = 'modal closed';
        }, 300);
      }
    });
  }

  openModal() {
    this.modal.className = 'modal';
    this.modal_bg.className = 'modal_bg';
    // this.modal.style.backgroundColor = this.modalBackground;
    this.modal_bg.style.backgroundColor = this.modalBackground;
    this.shadowRoot.querySelector('.modal-header').style.color = this.colorTitle;
    this.shadowRoot.querySelector('.modal-container').style.marginTop = '20px';
    if(this.centered){
      this.shadowRoot.querySelector('.modal-container').style.marginTop = '0';
    }

  }

  closeModal() {
    setTimeout(() => {
      this.modal.className = 'modal closed';
      this.modal_bg.className = 'modal_bg closed';
    }, 300);
  }

  async firstUpdated() {
    this.modal = this.shadowRoot.querySelector('.modal');
    this.modal_bg = this.shadowRoot.querySelector('.modal_bg');
    if (!this.hideClickOut) this.modalClickListener();
    this.closeModalSlottedButton();

    if (this.noStyle) {
      this.style.setProperty('--modal-container-background', 'transparent');
    }
  }

  async closeModalSlottedButton() {
    const content = this.shadowRoot.querySelector('slot[name="content"]');
    await this.waitUntilSlottedButton(content);

  }

  async waitUntilSlottedButton(slot) {
    if (slot.assignedElements()[0]) {
      await slot.assignedElements()[0].updateComplete;
      slot.assignedElements().forEach(element => {

         if(element.querySelector('.close')) {
          element.querySelectorAll('.close').forEach(element => {
          element.addEventListener('click', this.closeModal.bind(this));
            
          });
        } 
      });
    }
  }


  render() {
    return html`
      <slot name="buttom" @click="${this.openModal}"></slot>
       <div class="modal_bg closed">
      </div> 
      <div class="modal closed" style="align-items: ${this.centered ? 'center' : 'flex-start'}">
        <div class="modal-container">
          <i  class="material-icons" @click="${this.closeModal}">close</i>
          <div class="modal-header">
            <slot name="header"></slot>
          </div>
          <div class="modal-body">
            <slot name="content"></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('lit-modal', LitModal);
