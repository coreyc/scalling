const constructSessionTiming = (session = []) => {
  return session.map(event => {
    if (event.type !== 'initialHtml') {
      const target = event.target
      const type = event.type
      const timeStamp = event.timeStamp
      return ((target, type, timeStamp) => {
        console.log('target:', target)
        console.log('type:', type)
        console.log('timeStamp:', timeStamp)
        setTimeout(((target, type, timeStamp) => {
          console.log('type from setTimeout', type)
          target.dispatchEvent(type)
        }).apply(this, ['body', type, timeStamp]), timeStamp)
      }).apply(this, ['body', type, timeStamp])
    } else {
      return null
    }
  }).filter(fn => fn !== null)
}

module.exports = {
  constructSessionTiming
}