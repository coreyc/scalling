const connectRetrieve = require('../persistence/db').connectRetrieve

const retrieve = () => {
  return new Promise((resolve, reject) => {
    connectRetrieve('myproject')
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
  retrieve
}