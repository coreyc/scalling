const connectInsert = require('../persistence/db').connectInsert

const record = data => {
  return new Promise((resolve, reject) => {
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