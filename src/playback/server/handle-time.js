const constructSessionTiming = session => {
  return session.map(event => {
    return () => { setTimeout(() => { event.target.dispatchEvent(event.type) }, event.timeStamp) }
  })
}

export {
  constructSessionTiming
}