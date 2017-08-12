import expect from 'expect.js'
import { record } from '../../../src/recorder/server/services/recorder.service'

describe('RECORDER SERVICE', () => {
  describe('record', () => {
    it('should exist', () => {
      expect(record).to.be(defined)
    })

    it('should save item to db', () => {
      const item = {}
      record(item).then(result => {
        expect(result).to.be(defined)
      })
    })
  })
})