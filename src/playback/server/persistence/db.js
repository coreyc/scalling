const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/myproject'

const retrieve = db => {
  const collection = db.collection('documents')

  return collection.find().toArray()
    .then(result => {
      console.log('result from find fn:', result)
      //db.close()
      return result
    })
    .catch(e => {
      console.log('error from find fn:', e)
      //db.close()
      return e
    })
}

const connectRetrieve = db => {
  return MongoClient.connect(url).then(db => {
    retrieve(db)
  })
}

module.exports = {
  retrieve,
  connectRetrieve
}