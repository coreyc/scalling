const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/myproject'

// client ajax post to server, server stores data in db (or other persistence store)

const insert = (db, data) => {
  const collection = db.collection('documents')

  return collection.insert(data)
    .then(result => {
      console.log('result from insert fn:', result)
      //db.close()
      return result
    })
    .catch(e => {
      console.log('error from insert fn:', e)
      //db.close()
      return e
    })
  // , (err, result) => {
  //   callback(result)
  // })
}

const connectInsert = (db, data) => {
  return MongoClient.connect(url).then(db => {
    insert(db, data)
  })
}

// , (err, db) => {
//   insertDocuments(db, () => {
//     db.close()
//   })

module.exports = {
  insert,
  connectInsert
}