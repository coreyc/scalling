const path = require('path')
const fs = require('fs')
const constructSessionTiming = require('../handle-time').constructSessionTiming

const constructEntireSession = records => {
  const eventPlayback = constructSessionTiming(records)
  const stringified = eventPlayback.map(obj => {
    return JSON.stringify(obj)
  })
  fs.writeFileSync(path.join('src/playback/public' + '/playbackRunner.js'),
    `const arr = [${stringified}].forEach(itm => {
      setTimeout((itm => {
        document.querySelector(itm.target).dispatchEvent(new KeyboardEvent(itm.type, {bubbles: itm.bubbles}))
        console.log(itm.target, itm.type, itm.timeStamp)
      }).bind(this, itm), itm.timeStamp)
    })`, 'utf8')
  fs.writeFileSync(path.join('src/playback/public' + '/playbackRunner.html'),
    '<head><script src="../playbackRunner.js"></script></head>' + records[0].body,
    'utf8')
  return stringified
}

module.exports = {
  constructEntireSession
}