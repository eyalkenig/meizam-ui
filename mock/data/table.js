var predictionsMock = require('./predictions')

function getTable(groupId) {
    const tableUsers = []
    predictionsMock.predictions.forEach(prediction => {
        if (prediction.GroupId == groupId) {
            tableUsers.push(prediction.table)
        }
    })
    return {
        DisplayName: 'Name of Group',
        Users: tableUsers
    }
}
module.exports = {
    getTable: getTable
}