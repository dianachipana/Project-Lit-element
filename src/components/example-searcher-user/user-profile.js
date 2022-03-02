import { LitElement, html } from 'lit-element';
import { material } from '../../utils/fonts';
import { stylesUserProfile } from '../../utils/user-profile-styles';

export class UserProfile extends LitElement {
  static get styles() {
    return [material, stylesUserProfile];
  }

  static get properties() {
    return {
      userInfo: { type: Object },
    };
  }

  constructor() {
    super();
    this.userInfo = {};
  }

  render() {
    return html`
           <section>
            <div class="container-search-user">
                <div class="container-img">
                    <img src="${this.userInfo.avatar_url}">
                </div>
                <h2>${this.userInfo.name}</h2>
                <p>${this.userInfo.login}</p>
                <p class="title-job">${this.userInfo.bio}</p>
                <button>Edit Profile</button>
                <div class="container-info">
                ${
                  this.userInfo.followers !== null && this.userInfo.following !== null
                    ? html`
                        <a href="${this.userInfo.followers_url}">
                          <img src="assets/svg/people.svg" />
                          <span>${this.userInfo.followers}</span> followers
                        </a>
                        .
                        <a href="${this.userInfo.following_url}">
                          <span>${this.userInfo.following}</span>
                          following
                        </a>
                      `
                    : html``
                }
                    
                    ${
                      this.userInfo.company !== null
                        ? html` <p class="mt"><img src="assets/svg/company.svg" />${this.userInfo.company}</p> `
                        : html``
                    }

                    ${
                      this.userInfo.location !== null
                        ? html` <p><img src="assets/svg/location.svg" />${this.userInfo.location}</p> `
                        : html``
                    }

                    ${
                      this.userInfo.email !== null
                        ? html` <p><img src="assets/svg/email.svg" /> ${this.userInfo.email}</p> `
                        : html``
                    }

                    ${
                      this.userInfo.blog !== ''
                        ? html`
                            <a href="${this.userInfo.blog}">
                              <img src="assets/svg/blog.svg"/>
                              ${this.userInfo.blog}
                            
                            </a>
                          `
                        : html``
                    }
                </div>
            </div>
            </div>
        </section>
        `;
  }
}
window.customElements.define('user-profile', UserProfile);
