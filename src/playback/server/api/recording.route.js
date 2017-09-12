const express = require('express')
const app = express()

module.exports = app.get('/recording', (req, res) => {
  res.send('cool')
})