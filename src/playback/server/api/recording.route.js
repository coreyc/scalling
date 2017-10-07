const retrieve = require('../services/recording.service').retrieve
const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

module.exports = app.get('/recording/:sessionId', (req, res) => {
  retrieve(req.params.sessionId).then(result => {
    // fs.writeFileSync('public/test.js', 'setTimeout(() => { console.log(true) }, 2000)', 'utf8')
    // fs.writeFileSync(path.join(__dirname + '/playbacktest2.html'), result[0].body, 'utf8')
    res.sendFile('/playbacktest2.html', {root: 'src/playback/public'})
  })
})