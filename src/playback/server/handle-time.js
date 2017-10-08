const constructSessionTiming = (session = []) => {
  const sessionEvents = session.map(event => {
    return (event.type !== 'initialHtml')
      ? {target: event.target,
        type: event.type,
        timeStamp: event.timeStamp}
      : null
  }).filter(fn => fn !== null)
  return sessionEvents
}

module.exports = {
  constructSessionTiming
}