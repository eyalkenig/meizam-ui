const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors(), express.json())

app.post('/Group/LoadUserPrediction', (req, res) => {
  console.log('[POST] /Group/LoadUserPrediction')
  console.log('body:')
  console.log(req.body)
  const status = 200
  const response = {
    'groups': [
      {
        id: 12,
        displayName: 'first group',
        position: 43,
        total: 55
      },
      {
        id: 125,
        displayName: 'second group',
        position: 1,
        total: 4
      }
    ]
  }
  console.log('[OK] 200')
  console.log(response)

  res.status(status).send(response)
  console.log()
})

module.exports = {
  port: 3533,
  open: false,
  logLevel: 'debug',
  server: {
    middleware: {
      1: app
    }
  }
}
