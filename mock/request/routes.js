const userResponses = require('../response/user')
const groupResponses = require('../response/groups')
function register(app) {
    app.get('/User/Info', userResponses.userInfo);
    app.get('/Group/Table', groupResponses.groupTable);
    app.get('/Group/Prediction', groupResponses.groupPrediction);
    app.post('/Group/CreateGroup', groupResponses.create);
}

module.exports = {
    register: register
}