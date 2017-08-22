const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/myproject'

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
}

const connectInsert = (db, data) => {
  return MongoClient.connect(url).then(db => {
    insert(db, data)
  })
}

module.exports = {
  insert,
  connectInsert
}