const record = require('../services/recording.service').record
const express = require('express')
const app = express()

module.exports = app.post('/recording', (req, res) => {
  record(req.body)
    .then(result => {
      res.send('posted to recording service')    
      console.log('recording router:', req.body)
    })
    .catch(e => {
      console.log('err:', e)
    })
})

