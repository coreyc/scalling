import { expect } from 'chai'
import { record } from '../../../src/recorder/server/services/recording.service'

xdescribe('RECORDER SERVICE', () => {
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