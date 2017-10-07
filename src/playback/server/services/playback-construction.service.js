const path = require('path')
const fs = require('fs')
const constructSessionTiming = require('../handle-time').constructSessionTiming

const constructEntireSession = records => {
  const eventPlayback = constructSessionTiming(records)
  fs.writeFileSync(path.join('src/playback/public' + '/playbackTest2.js'), 'setTimeout(() => { console.log(true) }, 2000)', 'utf8')
  fs.writeFileSync(path.join('src/playback/public' + '/playbackTest2.html'),
    '<head><script src="../playbackTest2.js"></script></head>' + records[0].body,
    'utf8')
}

module.exports = {
  constructEntireSession
}