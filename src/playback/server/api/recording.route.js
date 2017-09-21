const retrieve = require('../services/recording.service').retrieve
const express = require('express')
const app = express()

module.exports = app.get('/recording/:sessionId', (req, res) => {
  res.status(200).send(retrieve(req.params.sessionId))
  // res.render('index', (err, html) => {
  //   res.send(html)
  // })
})