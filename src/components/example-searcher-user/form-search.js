import { LitElement, css, html } from 'lit-element';

export class FormSearch extends LitElement {

  static get styles() {
    return [
      css`

      .conatiner-form {
        margin: 20px 50px;
        display: flex;
        max-width: 600px;
        flex-direction: column;

      }
      
      .input-text {
        padding: 10px;
        margin:10px 0;
        border: 1px solid #b6c3c4;
        border-radius:5px;
        outline:none;
      }
      .input-text:hover {
        border: 1px solid #218bff;
        box-shadow: 0 0 0 3px rgba(9,105,218,0.3);
       
      }

      button {
        background: blue;
        color: white;
        cursor:pointer;
        border: none;
        padding: 10px;
        border-radius:5px;
        max-width:100px
      }
  `
    ];
  }

  sendData() {
    const inputValue = this.shadowRoot.querySelector('#userName');
    if (inputValue.value) {
      const event = new CustomEvent('my-event', {
        detail: {
          message: inputValue.value,
          date: new Date(),
        },
      });
      console.log(event);
      this.dispatchEvent(event);
      inputValue.value = '';
    } else {
      alert('Empty field');
    }
  }

  render() {
    return html`
    <section>
      <div class="conatiner-form">
        <h1>Github Profile</h1>
        <input id="userName" type="text" class="input-text" minlength="50" placeholder="User Name" />
        <button type="submit" @click="${this.sendData}">Buscar</button>
        </div>
    </section>
    `
  }
}
window.customElements.define('form-search', FormSearch);




