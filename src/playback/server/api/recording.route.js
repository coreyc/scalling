const retrieve = require('../services/recording.service').retrieve
const express = require('express')
const app = express()

module.exports = app.get('/recording', (req, res) => {
  retrieve()
    .then(result => {
      res.send('retrieved from recording service:', result)
    })
    .catch(e => {
      console.log('err:', e)
    })
})