const connectRetrieve = require('../persistence/db').connectRetrieve
const constructSessionTiming = require('../handle-time').constructSessionTiming

const retrieve = sessionId => {
  return new Promise((resolve, reject) => {
    connectRetrieve('myproject', { sessionId: { $eq: sessionId } })
      .then(dbRecords => {
        // console.log('dbRecords:', dbRecords)
        const eventPlayback = constructSessionTiming(dbRecords)
        console.log('eventPlayback:', eventPlayback)
        resolve(eventPlayback)
      })
      .catch(e => { reject(e) })
  })
}

module.exports = {
  retrieve
}