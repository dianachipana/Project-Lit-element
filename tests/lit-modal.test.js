/* import { fixture, expect, html  } from '@open-wc/testing';
import sinon from 'sinon/pkg/sinon-esm.js';

import '../src/components/lit-modal';

describe('LitModal validation', () => {
    let el;

    before(async() => {
      const component = html`
      <lit-modal></lit-modal>
      `;
  
      el = await fixture(component);
      await el.updateComplete;
    });

    it('Modal is rendered correctly', async() => {
        expect(el.shadowRoot).not.to.be.null;
      });
    

    it('Modal emit event', async() => {
        const eventSpy = sinon.spy(el, 'dispatchEvent');
        const icon = el.shadowRoot.querySelector('#icon-close');
        icon.click();
        expect(eventSpy).calledOnce;
        expect(eventSpy.args[0][0].type).to.equal('my-event-close');
      });

});
 */