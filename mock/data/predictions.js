const groupA = {
  StageName: "Group A",
  Prediction: [
    { Position: 1, IsCorrect: true, AwardPoints: 1, TeamId: 19, TeamName: 'Italy', FlagUrl: 'http://img.fifa.com/images/flags/4/ita.png'},
    { Position: 2, IsCorrect: false, AwardPoints: 0, TeamId: 12, TeamName: 'Turkey', FlagUrl: 'http://img.fifa.com/images/flags/4/tur.png'},
    { Position: 3, IsCorrect: true, AwardPoints: 1, TeamId: 15, TeamName: 'Wales', FlagUrl: 'http://img.fifa.com/images/flags/4/wal.png'},
    { Position: 4, IsCorrect: false, AwardPoints: 0, TeamId: 21, TeamName: 'Switzerland', FlagUrl: 'http://img.fifa.com/images/flags/4/sui.png'}
  ]
}
const groupB = {
  StageName: "Group B",
  Prediction: [
    { Position: 1, IsCorrect: true, AwardPoints: 1, TeamId: 190, TeamName: 'Belgium', FlagUrl: 'http://img.fifa.com/images/flags/4/bel.png'},
    { Position: 2, IsCorrect: false, AwardPoints: 0, TeamId: 120, TeamName: 'Denmark', FlagUrl: 'http://img.fifa.com/images/flags/4/den.png'},
    { Position: 3, IsCorrect: false, AwardPoints: 0, TeamId: 150, TeamName: 'Russia', FlagUrl: 'http://img.fifa.com/images/flags/4/rus.png'},
    { Position: 4, IsCorrect: false, AwardPoints: 0, TeamId: 210, TeamName: 'Finland', FlagUrl: 'http://img.fifa.com/images/flags/4/fin.png'}
  ]
}
const groupC = {
  StageName: "Group C",
  Prediction: [
    { Position: 1, IsCorrect: true, AwardPoints: 1, TeamId: 1900, TeamName: 'Netherland', FlagUrl: 'http://img.fifa.com/images/flags/4/ned.png'},
    { Position: 2, IsCorrect: true, AwardPoints: 1, TeamId: 1200, TeamName: 'Austria', FlagUrl: 'http://img.fifa.com/images/flags/4/aus.png'},
    { Position: 3, IsCorrect: true, AwardPoints: 1, TeamId: 1500, TeamName: 'Ukraine', FlagUrl: 'http://img.fifa.com/images/flags/4/ukr.png'},
    { Position: 4, IsCorrect: true, AwardPoints: 1, TeamId: 2100, TeamName: 'D Winner', FlagUrl: ''}
  ]
}
const groupD = {
  StageName: "Group D",
  Prediction: [
    { Position: 1, IsCorrect: false, AwardPoints: 0, TeamId: 190, TeamName: 'Croatia', FlagUrl: 'http://img.fifa.com/images/flags/4/cro.png'},
    { Position: 2, IsCorrect: false, AwardPoints: 0, TeamId: 120, TeamName: 'Czech Republic', FlagUrl: 'http://img.fifa.com/images/flags/4/cze.png'},
    { Position: 3, IsCorrect: false, AwardPoints: 0, TeamId: 150, TeamName: 'England', FlagUrl: 'http://img.fifa.com/images/flags/4/eng.png'},
    { Position: 4, IsCorrect: false, AwardPoints: 0, TeamId: 210, TeamName: 'C Winner', FlagUrl: ''}
  ]
}
const groupE = {
  StageName: "Group E",
  Prediction: [
    { Position: 1, IsCorrect: true, AwardPoints: 1, TeamId: 190, TeamName: 'Spain', FlagUrl: 'http://img.fifa.com/images/flags/4/esp.png'},
    { Position: 2, IsCorrect: true, AwardPoints: 1, TeamId: 120, TeamName: 'Poland', FlagUrl: 'http://img.fifa.com/images/flags/4/pol.png'},
    { Position: 3, IsCorrect: false, AwardPoints: 0, TeamId: 150, TeamName: 'Sweden', FlagUrl: 'http://img.fifa.com/images/flags/4/swe.png'},
    { Position: 4, IsCorrect: false, AwardPoints: 0, TeamId: 210, TeamName: 'B Winner', FlagUrl: ''}
  ]
}
const groupF = {
  StageName: "Group F",
  Prediction: [
    { Position: 1, IsCorrect: false, AwardPoints: 0, TeamId: 190, TeamName: 'France', FlagUrl: 'http://img.fifa.com/images/flags/4/fra.png'},
    { Position: 2, IsCorrect: false, AwardPoints: 0, TeamId: 120, TeamName: 'Germany', FlagUrl: 'http://img.fifa.com/images/flags/4/ger.png'},
    { Position: 3, IsCorrect: false, AwardPoints: 0, TeamId: 150, TeamName: 'Portugal', FlagUrl: 'http://img.fifa.com/images/flags/4/por.png'},
    { Position: 4, IsCorrect: false, AwardPoints: 0, TeamId: 210, TeamName: 'A Winner', FlagUrl: ''}
  ]
}
const prediction = [groupA, groupB, groupC, groupD, groupE, groupF]

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
    },
    groupStage: {
      GroupStage: {
        Prediction: prediction,
        GainedPoints: 9,
        TotalPotentialPoints: 24
      }
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
    },
    groupStage: {
      GroupStage: {
        Prediction: prediction,
        GainedPoints: 3,
        TotalPotentialPoints: 24
      }
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
    },
    groupStage: {
      GroupStage: {
        Prediction: prediction,
        GainedPoints: 12,
        TotalPotentialPoints: 24
      }
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
    },
    groupStage: {
      GroupStage: {
        Prediction: prediction,
        GainedPoints: 23,
        TotalPotentialPoints: 24
      }
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
