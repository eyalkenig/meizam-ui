var userMock = require('../data/user')

function userInfo(req, res) {
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
        ...userMock.user
      }
    }
  }
  console.log(response)

  res.status(status).send(response)
  console.log()
}

module.exports = {
  userInfo
}
