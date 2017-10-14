const fs = require('fs')
const connectRetrieve = require('../persistence/db').connectRetrieve
const constructEntireSession = require('./playback-construction.service').constructEntireSession

const retrieve = sessionId => {
  return new Promise((resolve, reject) => {
    connectRetrieve('myproject', { sessionId: { $eq: sessionId } })
      .then(dbRecords => {
        console.log('dbRecords:', dbRecords)
        const pb = constructEntireSession(dbRecords)
        resolve(pb)
      })
      .catch(e => { reject(e) })
  })
}

module.exports = {
  retrieve
}