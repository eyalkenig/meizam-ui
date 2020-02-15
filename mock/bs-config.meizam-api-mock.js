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
    id: 123,
    displayName: 'Oded Menashe',
    profilePicture: 'https://graph.facebook.com/1362300300/picture?type=large',
    groups: [
      {
        groupId: 12,
        displayName: 'המיזם',
        position: 43,
        points: 112,
        totalMembers: 55
      },
      {
        groupId: 125,
        displayName: 'Yotpo',
        position: 2,
        points: 101,
        totalMembers: 11
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
