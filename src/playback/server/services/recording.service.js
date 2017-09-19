const connectRetrieve = require('../persistence/db').connectRetrieve

const retrieve = () => {
  return new Promise((resolve, reject) => {
    connectRetrieve('myproject', { sessionId: { $eq: '1fab40a7-dd94-4a2b-9bc7-aac80ac028fd' } })
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