import { expect } from 'chai'
import sinon from 'sinon'
import observeDomChanges from '../../../src/recorder/client/dom-changes'

xdescribe('DOM-CHANGES', () => {
  describe('observeDomChanges', () => {
    it('should observe change to body element', () => {
      const spy = sinon.spy(console, 'log')
      observeDomChanges()
      document.body.appendChild(document.createTextNode( '' ))
      expect(spy.called).to.be.true
    })
  })
})
