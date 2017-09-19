const retrieve = require('../services/recording.service').retrieve
const express = require('express')
const app = express()

module.exports = app.get('/recording', (req, res) => {
  res.send('retrieved from recording service:', retrieve())
})