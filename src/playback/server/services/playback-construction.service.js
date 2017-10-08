const path = require('path')
const fs = require('fs')
const constructSessionTiming = require('../handle-time').constructSessionTiming

const constructEntireSession = records => {
  console.log('records:', records)
  const eventPlayback = constructSessionTiming(records)
  console.log('eventPlayback:', eventPlayback)
  const stringified = eventPlayback.map(obj => {
    return JSON.stringify(obj)
  })
  fs.writeFileSync(path.join('src/playback/public' + '/playbackTest2.js'),
    `const arr = [${stringified}].forEach(itm => {
      setTimeout((itm => {
        console.log(itm.timeStamp)
      }).bind(this, itm), 2000)
    })`, 'utf8')
  fs.writeFileSync(path.join('src/playback/public' + '/playbackTest2.html'),
    '<head><script src="../playbackTest2.js"></script></head>' + records[0].body,
    'utf8')
  return stringified
}

module.exports = {
  constructEntireSession
}