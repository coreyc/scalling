const path = require('path')
const fs = require('fs')
const constructSessionTiming = require('../handle-time').constructSessionTiming

const constructEntireSession = records => {
  const eventPlayback = constructSessionTiming(records)
  const stringified = eventPlayback.map(obj => JSON.stringify(obj))

  fs.writeFileSync(path.join('src/playback/public' + '/playbackRunner.js'),
    `const eventFactory = (itm, constructor) => {
      switch(constructor) {
        case 'MouseEvent':
          if(itm.type === 'mousemove') {
            document.getElementById('pb_cursor').style.left = itm.pageX
            document.getElementById('pb_cursor').style.top = itm.pageY
          }
          return new MouseEvent(itm.type, {bubbles: itm.bubbles})
        break
        case 'KeyboardEvent': return new KeyboardEvent(itm.type, {bubbles: itm.bubbles, code: itm.code})
        break
      }
    }
    const arr = [${stringified}].forEach((itm, idx) => {
      setTimeout((itm => {
        const constructor = [${stringified}][idx].constructor
        document.querySelector(itm.target).dispatchEvent(eventFactory(itm, constructor))
        console.log(itm.target, itm.type, itm.timeStamp)
      }).bind(this, itm, idx), itm.timeStamp)
    })
    
    const moveMouse = () => {
      
    }
    `, 'utf8')

  fs.writeFileSync(path.join('src/playback/public' + '/playbackRunner.html'),
    '<head><script src="../playbackRunner.js"></script><link rel="stylesheet" href="../playbackRunner.css"></head>'
      + '<div id="pb_cursor" class="pb_cursor"></div>'
      + records[0].body,
    'utf8')

  return stringified
}

module.exports = {
  constructEntireSession
}