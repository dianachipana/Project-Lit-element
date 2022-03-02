/* eslint-disable no-alert */
import { LitElement, html } from 'lit-element';
import { commonStyles } from '../../utils/custom-styles';
import '../../components/common-header';
import '../../components/work-header';
import '../../components/input-component';
import '../../components/list-component';

const components = {
  inputComponent: () =>
    html`<input-component
      @my-event="${(e) =>
        alert(`Dispatched custom event called "my-event" with the following message: ${e.detail.message}`)}"
      >Submit</input-component
    >`,
  listComponent: () => html`<list-component .list="${['Message 1', 'Message 2']}"></list-component>`,
};

class UserPage extends LitElement {
  static get styles() {
    return [commonStyles];
  }

  static get properties() {
    return {
      current: { type: String, attribute: false },
    };
  }

  constructor() {
    super();
    this.current = 'inputComponent';
  }

  setComponent(component) {
    this.current = component;
  }

  render() {
    return html`
      <common-header></common-header>
      <section class="container">
        <work-header>Test user <img src="assets/user/test_img.png" /></work-header>
        <div class="common-list">
          ${Object.keys(components).map(
            (item) => html` <button class="common-btn" @click="${() => this.setComponent(item)}">${item}</button> `,
          )}
        </div>
        ${components[this.current]()}
      </section>
    `;
  }
}

window.customElements.define('user-page', UserPage);
