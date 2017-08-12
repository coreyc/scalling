const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

// client ajax post to server, server stores data in db (or other persistence store)

const insert = (db, callback) => {
  const collection = db.collection('documents')
  
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], (err, result) => {
    assert.equal(err, null)
    assert.equal(3, result.result.n)
    assert.equal(3, result.ops.length)
    console.log("Inserted 3 documents into the document collection")
    callback(result)
  })
}

const url = 'mongodb://localhost:27017/myproject';

MongoClient.connect(url, (err, db) => {
  assert.equal(null, err)
  console.log("Connected correctly to server")

  insertDocuments(db, () => {
    db.close()
  })
})

export {
  insert
}