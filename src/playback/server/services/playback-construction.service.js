const path = require('path')
const fs = require('fs')
const constructSessionTiming = require('../handle-time').constructSessionTiming
const eventFactory = require('../event-factory').eventFactory

const constructEntireSession = records => {
  const eventPlayback = constructSessionTiming(records)
  const stringified = eventPlayback.map(obj => {
    return JSON.stringify(obj)
  })
  fs.writeFileSync(path.join('src/playback/public' + '/playbackRunner.js'),
    `const eventFactory = (eventType = '', type, options = {}) => {
      switch(eventType) {
        case 'MouseEvent': return new MouseEvent(type, options)
        break
      }
    }
    const arr = [${stringified}].forEach((itm, idx) => {
      setTimeout((itm => {
        const constructor = [${stringified}][idx].constructor.split('()')[0]
        console.log(constructor)
        const eventFromFactory = eventFactory(constructor)
        document.querySelector(itm.target).dispatchEvent(eventFactory(constructor, itm.type, {bubbles: itm.bubbles}))
        console.log(itm.target, itm.type, itm.timeStamp)
      }).bind(this, itm, idx), itm.timeStamp)
    })`, 'utf8')
  fs.writeFileSync(path.join('src/playback/public' + '/playbackRunner.html'),
    '<head><script src="../playbackRunner.js"></script></head>' + records[0].body,
    'utf8')
  return stringified
}

module.exports = {
  constructEntireSession
}