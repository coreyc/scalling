const connectInsert = require('../persistence/db').connectInsert
const uuidv4 = require('uuid/v4');

const record = data => {
  return new Promise((resolve, reject) => {
    data.sessionId = uuidv4()
    connectInsert('myproject', data)
      .then(result => { resolve(result) })
      .catch(e => { reject(e) })
  })
}

// API -- POST /recordings 
// queue
// returns 200

// SERVICE -- record(data)
// post data to db fn

// DB -- insert(data)
// Mongo collection.insert(queue)

module.exports = {
  record
}