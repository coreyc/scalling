const fs = require('fs')
const connectRetrieve = require('../persistence/db').connectRetrieve
const constructEntireSession = require('./playback-construction.service').constructEntireSession

const retrieve = sessionId => {
  return new Promise((resolve, reject) => {
    connectRetrieve('myproject', { sessionId: { $eq: sessionId } })
      .then(dbRecords => {
        const pb = constructEntireSession(dbRecords)
        //fs.writeFileSync('public/test.js', 'setTimeout(() => { console.log(true) }, 2000)', 'utf8')
        resolve(pb)
      })
      .catch(e => { reject(e) })
  })
}

module.exports = {
  retrieve
}

/*

1. Fetch initialHTML from mongo
2. res.sendFile(initialHTML)
3. construct event playback
4. put in js file
5. link to js file from initialHTML file

*/