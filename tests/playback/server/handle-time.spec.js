import { expect } from 'chai'
import sinon from 'sinon'
import { constructSessionTiming } from '../../../src/playback/server/handle-time'

describe('HANDLE-TIME', () => {
  const recordedEventDataStub = [
    {
      type: 'click',
      target: '#someId',
      timeStamp: 1455.90
    },
    {
      type: 'click',
      target: '#someOtherId',
      timeStamp: 2340.55
    }
  ]

  it('should return an array', () => {
    expect(constructSessionTiming(recordedEventDataStub)).to.be.an('array')
  })

  it('should return number of events', () => {
    expect(constructSessionTiming(recordedEventDataStub).length).to.equal(2)
  })

  it('should call setTimeout for each event', done => {
    const timing = constructSessionTiming(recordedEventDataStub)
    const setTimeoutSpy = sinon.spy(setTimeout)
    timing.map(fn => { fn() })
    done()
    expect(setTimeoutSpy.callCount).to.equal(2)
  })
})