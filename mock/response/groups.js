var tableMock = require('../data/table')
var predictionsMock = require('../data/predictions')
var util = require('util');

function groupTable(req, res) {
    console.log('[GET] /Group/Table')
    console.log('params:')
    console.log(req.query)
    const groupId = parseInt(req.query.groupId, 10)
    const status = 200
    let response = {}
    if (groupId === 666) {
      response = {
        status: 'error',
        error: "must be logged in"
      }
    } else {
      response = {
          status: 'ok',
          response: {
              ID: req.query.groupId,
              ...tableMock.getTable(groupId)
          }
      }
    }
    console.log('[OK] 200')
    console.log(response)
    
    res.status(status).send(response)
    console.log()
}

function groupPrediction(req, res) {
    console.log('[GET] /Group/Prediction')
    console.log('params:')
    console.log(req.query)
    let status = 200
    let response = {}
    const predictionId = parseInt(req.query.predictionId, 10);
    const prediction = predictionsMock.getPrediction(predictionId)
    if (!prediction) {
      status = 404
      response = { error: "prediction was not found: " + req.query.predictionId }
    } else {
      response = {
        status: 'ok',
        response: {
          GroupId: prediction.GroupId,
          ...prediction.table,
          ...prediction.view,
          ...prediction.groupStage,
          ...prediction.knockoutStage
        }
      }
    }
    console.log('[OK] 200')
    console.log(util.inspect(response, false, null))
  
    res.status(status).send(response)
    console.log()
}

module.exports = {
    groupTable,
    groupPrediction
}
