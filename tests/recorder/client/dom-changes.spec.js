import { expect } from 'chai'
import observeDomChanges from '../../../src/recorder/client/dom-changes'

expect.

describe('DOM-CHANGES', () => {
  describe('observeDomChanges', () => {
    it('should observe change to body element', () => {
      const spy = expect.spyOn(console, 'log')
      observeDomChanges()
      document.body.appendChild(document.createTextNode( '' ))
      expect(spy).toHaveBeenCalled()
    })
  })
})
