import '../../components/maitenance-user/input-general';
import '../../components/maitenance-user/button-general';
import { css, html, LitElement } from 'lit-element';

export class RegisterView extends LitElement {
  static get styles() {
    return [
      css`
        .container {
          justify-content: center;
          align-items: center;
          margin: auto;
          display: flex;
          margin: 20px 50px;
          flex-direction: column;
        }

        .input_invalid {
          background-color: pink;
        }
      `,
    ];
  }

  static get properties() {
    return {
      name: { type: String },
      password: { type: String },
      errorMessage: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.name = '';
    this.password = '';
  }

  async onsubmit() {
    if (this.name !== '' && this.password !== '') {
      window.location.replace(`${window.location.origin}/dashboard`);
    } else {
      this.errorMessage = true;
      this.shadowRoot.querySelectorAll('input-general').forEach((element) => {
        element.shadowRoot.querySelector('input').setAttribute('required', true);
      });
    }
  }

  getValue(e) {
    console.log('evento papa', e);
  }

  render() {
    return html`
      <div class="container">
        <h2>Login</h2>
        <form id="formRegister" class="form-group">
          <input-general
            @my-event=${this.getValue}
            id="name"
            name="name"
            type="text"
            placeholder="Usuario"
            errormessage=${this.errorMessage}
            onlyLetters
            errorMessageText="Campo usuario obligatorio"
          ></input-general>
          <input-general
            @my-event=${this.getValue}
            id="password"
            name="password"
            type="password"
            placeholder="Contraseña"
            errormessage=${this.errorMessage}
            errorMessageText="Campo password obligatorio"
          ></input-general>
          <button-general type="submit" @my-event="${this.onsubmit}">Ingresar</button-general>
        </form>
      </div>
    `;
  }
}
window.customElements.define('register-view', RegisterView);
