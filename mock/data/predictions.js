const predictions = [
  {
    GroupId: 12,
    table: {
      UserId: 123,
      PredictionId: 12321,
      DisplayName: 'Ekaterina Tankova',
      Position: 2,
      Points: 102,
      ProfilePictureUrl: 'https://s3.us-east-2.amazonaws.com/meizam-files/profile-pics/2110-de1b0eb2-1fd8-4f62-9ea5-596cdfbc820d',
      WinningTeamLogoUrl: 'http://img.fifa.com/images/flags/4/fra.png'
    },
    view: {
      TotalGroupMembers: 3,
      WinningTeam: 'France'
    }
  },
  {
    GroupId: 12,
    table: {
      UserId: 124,
      PredictionId: 12421,
      DisplayName: 'Cao Yu',
      Position: 3,
      Points: 70,
      ProfilePictureUrl: null,
      WinningTeamLogoUrl: 'http://img.fifa.com/images/flags/4/ita.png'
    },
    view: {
      TotalGroupMembers: 3,
      WinningTeam: 'Italy'
    }
  },
  {
    GroupId: 12,
    table: {  
      UserId: 621,
      PredictionId: 62126,
      DisplayName: 'Alexa Richardson',
      Position: 1,
      Points: 120,
      ProfilePictureUrl: null,
      WinningTeamLogoUrl: 'http://img.fifa.com/images/flags/4/ita.png'
    },
    view: {
      TotalGroupMembers: 3,
      WinningTeam: 'Italy'
    }
  },
  {
    GroupId: 125,
    table: {  
      UserId: 621,
      PredictionId: 1212,
      DisplayName: 'Ekaterina Tankova',
      Position: 1,
      Points: 10,
      ProfilePictureUrl: 'https://s3.us-east-2.amazonaws.com/meizam-files/profile-pics/2110-de1b0eb2-1fd8-4f62-9ea5-596cdfbc820d'
    },
    view: {
      TotalGroupMembers: 1,
      WinningTeam: 'Italy',
      WinningTeamLogoUrl: 'http://img.fifa.com/images/flags/4/ita.png'
    }
  }
]

function getPrediction(predictionId) {
  for (let i=0;i<predictions.length;i++) {
    const prediction = predictions[i];
    if (prediction.table.PredictionId == predictionId) {
      return prediction
    }
  }
  return null
}
module.exports = {
  predictions: predictions,
  getPrediction: getPrediction
}
