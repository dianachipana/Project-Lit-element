import { fixture, expect, html  } from '@open-wc/testing';
import sinon from 'sinon/pkg/sinon-esm.js';
import '../src/components/example-searcher-user/form-search';

describe('FormSearch validation', () => {
    let el;

    before(async() => {
      const component = html`
      <form-search></form-search>
      `;
  
      el = await fixture(component);
      await el.updateComplete;
    });

    it('Form is rendered correctly', async() => {
        expect(el.shadowRoot).not.to.be.null;
      });
    
      
    it('Fill input empty', async() => {
      const inputText = el.shadowRoot.querySelector('#userName');
      const buttonSubmit = el.shadowRoot.querySelector('button[type=submit]');
      inputText.value = '';
      buttonSubmit.click();

      expect(inputText.value).to.equal('');

  
    });

    it('Fill input field', async() => {
        const eventSpy = sinon.spy(el, 'dispatchEvent');
        const inputText = el.shadowRoot.querySelector('#userName');
        const buttonSubmit = el.shadowRoot.querySelector('button[type=submit]');
        inputText.value = 'Input test';
        buttonSubmit.click();
        expect(eventSpy).calledOnce;
        expect(eventSpy.args[0][0].type).to.equal('my-event');
      });

});
