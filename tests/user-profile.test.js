import { fixture, expect, html  } from '@open-wc/testing';
import '../src/components/example-searcher-user/user-profile';

describe('User Profile', () => {
    let el;

    before(async() => {
      const component = html`
      <user-profile></user-profile>
      `;
  
      el = await fixture(component);
      await el.updateComplete;
    });

    it('Have correct  type defined', async() => {
        expect(el.userInfo).to.be.a('object');
      });

      it('Have defaul prop', async() => {
        expect(el.userInfo).to.eql({});
      });

      it('Validar que cuano sea null retorne un html vacio ', async() => {
        const result = await fixture(html``)
   

      });

      it('Snapshot', () => {
        expect(el).shadowDom.to.equalSnapshot();
      });
});
