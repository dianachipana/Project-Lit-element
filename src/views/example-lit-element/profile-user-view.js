import { LitElement, css, html } from 'lit-element';
import '../../components/example-searcher-user/form-search';
import '../../components/example-searcher-user/user-profile';
import {getUserPrifile} from '../../utils/api/api-request';
import { nothing } from 'lit-html';

export class ProfileUserView extends LitElement {

    static get styles() {
        return [
            css`
            button {
            background: blue;
            color: white;
            border: none;
            padding: 10px;
          }

          .centered {
            margin:auto;
          }
    
          .spinner {
            border: 4px solid rgba(0, 0, 0, .1);
            border-radius: 50%;
            border-left-color: transparent;
            width: 36px;
            height: 36px;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
          
            100% {
              transform: rotate(360deg);
            }
          }
    
      `
        ];
    }

    static get properties() {
        return {
            userInfo: { type: Object },
            user: { type: String },
            showSpinner: { type: Boolean },
            showMoreInfo: { type: Boolean },
        };
    }

    constructor() {
        super();
        this.user = '';
        this.userInfo = {};
        this.showMoreInfo = false;
        this.showSpinner = false;
    }

    async searchUser(e) {
        this.showMoreInfo = false;
        if (e.detail) {
            this.userName = e.detail.message;
            this.showSpinner = true;
        } 
        const data = await getUserPrifile(this.userName);
        this.showSpinner = false;
        this.userInfo = data
        if (data.errorCode !== 404) {
            this.showMoreInfo = true;
            this.user = e.detail;
        }else{
            setTimeout(() => {
                alert('El usuario no existe')
            }, 500);
        }
    }

    render() {
        return html`      
        <section>
            <form-search @my-event="${this.searchUser}"></form-search>
            ${this.showMoreInfo ?
                html`
                <user-profile .userInfo="${this.userInfo}" @show-more="${this.searchUser}"></user-profiler>
            `: nothing}
        
            ${this.showSpinner ? html`<div class="centered spinner"></div>` : nothing}
        </section>
        `
    }
}
window.customElements.define('profile-user-view', ProfileUserView);

