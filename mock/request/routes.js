const userResponses = require('../response/user')
const groupResponses = require('../response/groups')
function register(app) {
    app.get('/User/Info', userResponses.userInfo);
    app.get('/Group/Table', groupResponses.groupTable);
    app.get('/Group/Prediction', groupResponses.groupPrediction);
}

module.exports = {
    register: register
}