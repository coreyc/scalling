const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/myproject'

// client ajax post to server, server stores data in db (or other persistence store)

const insert = (db, data, callback) => {
  const collection = db.collection('documents')

  collection.insert(data)
    .then(result => result)
    .catch(e => e)
  // , (err, result) => {
  //   callback(result)
  // })
}

const connectInsert = data => {
  return MongoClient.connect(url).then(db => {
    insert(db, data, () => {
      db.close()
    })
  })
}

// , (err, db) => {
//   insertDocuments(db, () => {
//     db.close()
//   })

export {
  insert,
  connectInsert
}