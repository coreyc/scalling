const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/recordings', (req, res) => {
  res.send('posted to recordings')
  console.log(req.body)
})

app.listen(3000, () => {
  console.log('Connected on port 3000!')
})