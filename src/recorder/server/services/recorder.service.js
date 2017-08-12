import { insert } from '../persistence/db'

const record = data => {
  return new Promise((resolve, reject) => {
    insert(data)
      .then
      .catch
  })
}

// API -- POST /recordings 
// queue
// returns 200

// SERVICE -- record(data)
// post data to db fn

// DB -- insert(data)
// Mongo collection.insert(queue)

export {
  record
}