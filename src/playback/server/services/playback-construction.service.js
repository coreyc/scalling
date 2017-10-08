const path = require('path')
const fs = require('fs')
const constructSessionTiming = require('../handle-time').constructSessionTiming

const constructEntireSession = records => {
  console.log('records:', records)
  const eventPlayback = constructSessionTiming(records)
  console.log('eventPlayback:', eventPlayback)
  eventPlayback.map(fn => {
    console.log('fn:', fn)
    console.log('AAA', fn.toString())
    return fn.toString()
  })
  fs.writeFileSync(path.join('src/playback/public' + '/playbackTest2.js'), eventPlayback, 'utf8')
  fs.writeFileSync(path.join('src/playback/public' + '/playbackTest2.html'),
    '<head><script src="../playbackTest2.js"></script></head>' + records[0].body,
    'utf8')
  return eventPlayback
}

module.exports = {
  constructEntireSession
}