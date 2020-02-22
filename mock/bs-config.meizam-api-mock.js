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
app.get('/User/Info', (req, res) => {
  console.log('[GET] /User/Info')
  console.log('params:')
  console.log(req.params)
  let status = 0
  let response = {}
  if (1==0) {
    status = 200
    console.log('[OK] 200')
    response = {
      status: 'error',
      error: "must be logged in"
    }
  } else {
    status = 200
    console.log('[OK] 200')
    response = {
      status: 'ok',
      response: {
        ID: 123,
        DisplayName: 'Oded Menashe',
        ProfilePictureUrl: 'https://graph.facebook.com/1362300300/picture?type=large',
        Groups: [
          {
            GroupId: 12,
            DisplayName: 'המיזם',
            Position: 43,
            Points: 112,
            TotalMembers: 55,
            PictureUrl: null
          },
          {
            GroupId: 125,
            DisplayName: 'Yotpo',
            Position: 2,
            Points: 101,
            TotalMembers: 11,
            PictureUrl: null
          }
        ]
      }
    }
  }
  console.log(response)

  res.status(status).send(response)
  console.log()
})
app.get('/Group/Table', (req, res) => {
  console.log('[GET] /Group/Table')
  console.log('params:')
  console.log(req.query)
  const status = 200
  const response = {
    status: 'ok',
    response: {
      ID: req.query.groupId,
      DisplayName: 'Name of Group',
      Users: [
        {
          UserId: 123,
          DisplayName: 'Ekaterina Tankova',
          Position: 2,
          Points: 102,
          ProfilePictureUrl: 'https://s3.us-east-2.amazonaws.com/meizam-files/profile-pics/2110-de1b0eb2-1fd8-4f62-9ea5-596cdfbc820d'
        },
        {
          UserId: 124,
          DisplayName: 'Cao Yu',
          Position: 3,
          Points: 70,
          ProfilePictureUrl: null
        },
        {
          UserId: 621,
          DisplayName: 'Alexa Richardson',
          Position: 1,
          Points: 120,
          ProfilePictureUrl: null
        }
      ]
    }
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
