const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const recordingRouter = require('./api/recording.route')

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app.post('/recordings', (req, res) => {
//   res.send('posted to recordings')
//   console.log('recordings router:', req.body)
// })

app.use(recordingRouter)

app.listen(3000, () => {
  console.log('Connected on port 3000!')
})