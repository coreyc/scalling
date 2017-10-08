const retrieve = require('../services/recording.service').retrieve
const app = require('express')()
const path = require('path')
const fs = require('fs')

module.exports = app.get('/recording/:sessionId', (req, res) => {
  retrieve(req.params.sessionId).then(result => {
    res.sendFile('/playbackRunner.html', {root: 'src/playback/public'})
  })
})