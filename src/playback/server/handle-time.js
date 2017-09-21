const constructSessionTiming = (session = []) => {
  return session.map(event => {
    if (event.type !== 'initialHtml') {
      return () => { setTimeout(() => { event.target.dispatchEvent(event.type) }, event.timeStamp) }
    }
  })
}

module.exports = {
  constructSessionTiming
}