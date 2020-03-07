function getGroupPrediction(options) {
  options = options || {}
  const isDecided = typeof options.isDecided == 'undefined' ? true : options.isDecided;
  const groupA = {
    StageName: "Group A",
    Prediction: [
      { Position: 1, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 1, AwardPoints: 1, TeamId: 19, TeamName: 'Italy', FlagUrl: 'http://img.fifa.com/images/flags/4/ita.png'},
      { Position: 2, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 1, AwardPoints: 0, TeamId: 12, TeamName: 'Turkey', FlagUrl: 'http://img.fifa.com/images/flags/4/tur.png'},
      { Position: 3, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 1, AwardPoints: 1, TeamId: 15, TeamName: 'Wales', FlagUrl: 'http://img.fifa.com/images/flags/4/wal.png'},
      { Position: 4, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 1, AwardPoints: 0, TeamId: 21, TeamName: 'Switzerland', FlagUrl: 'http://img.fifa.com/images/flags/4/sui.png'}
    ]
  }
  const groupB = {
    StageName: "Group B",
    Prediction: [
      { Position: 1, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 1, AwardPoints: 1, TeamId: 190, TeamName: 'Belgium', FlagUrl: 'http://img.fifa.com/images/flags/4/bel.png'},
      { Position: 2, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 1, AwardPoints: 0, TeamId: 120, TeamName: 'Denmark', FlagUrl: 'http://img.fifa.com/images/flags/4/den.png'},
      { Position: 3, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 1, AwardPoints: 0, TeamId: 150, TeamName: 'Russia', FlagUrl: 'http://img.fifa.com/images/flags/4/rus.png'},
      { Position: 4, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 1, AwardPoints: 0, TeamId: 210, TeamName: 'Finland', FlagUrl: 'http://img.fifa.com/images/flags/4/fin.png'}
    ]
  }
  const groupC = {
    StageName: "Group C",
    Prediction: [
      { Position: 1, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 1, AwardPoints: 1, TeamId: 1900, TeamName: 'Netherland', FlagUrl: 'http://img.fifa.com/images/flags/4/ned.png'},
      { Position: 2, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 1, AwardPoints: 1, TeamId: 1200, TeamName: 'Austria', FlagUrl: 'http://img.fifa.com/images/flags/4/aus.png'},
      { Position: 3, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 1, AwardPoints: 1, TeamId: 1500, TeamName: 'Ukraine', FlagUrl: 'http://img.fifa.com/images/flags/4/ukr.png'},
      { Position: 4, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 1, AwardPoints: 1, TeamId: 2100, TeamName: 'D Winner', FlagUrl: ''}
    ]
  }
  const groupD = {
    StageName: "Group D",
    Prediction: [
      { Position: 1, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 1, AwardPoints: 0, TeamId: 1904, TeamName: 'Croatia', FlagUrl: 'http://img.fifa.com/images/flags/4/cro.png'},
      { Position: 2, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 1, AwardPoints: 0, TeamId: 1204, TeamName: 'Czech Republic', FlagUrl: 'http://img.fifa.com/images/flags/4/cze.png'},
      { Position: 3, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 1, AwardPoints: 0, TeamId: 1504, TeamName: 'England', FlagUrl: 'http://img.fifa.com/images/flags/4/eng.png'},
      { Position: 4, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 1, AwardPoints: 0, TeamId: 2104, TeamName: 'C Winner', FlagUrl: ''}
    ]
  }
  const groupE = {
    StageName: "Group E",
    Prediction: [
      { Position: 1, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 1, AwardPoints: 1, TeamId: 1905, TeamName: 'Spain', FlagUrl: 'http://img.fifa.com/images/flags/4/esp.png'},
      { Position: 2, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 1, AwardPoints: 1, TeamId: 1205, TeamName: 'Poland', FlagUrl: 'http://img.fifa.com/images/flags/4/pol.png'},
      { Position: 3, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 1, AwardPoints: 0, TeamId: 1505, TeamName: 'Sweden', FlagUrl: 'http://img.fifa.com/images/flags/4/swe.png'},
      { Position: 4, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 1, AwardPoints: 0, TeamId: 2105, TeamName: 'B Winner', FlagUrl: ''}
    ]
  }
  const groupF = {
    StageName: "Group F",
    Prediction: [
      { Position: 1, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 1, AwardPoints: 0, TeamId: 1906, TeamName: 'France', FlagUrl: 'http://img.fifa.com/images/flags/4/fra.png'},
      { Position: 2, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 1, AwardPoints: 0, TeamId: 1206, TeamName: 'Germany', FlagUrl: 'http://img.fifa.com/images/flags/4/ger.png'},
      { Position: 3, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 1, AwardPoints: 0, TeamId: 1506, TeamName: 'Portugal', FlagUrl: 'http://img.fifa.com/images/flags/4/por.png'},
      { Position: 4, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 1, AwardPoints: 0, TeamId: 2106, TeamName: 'A Winner', FlagUrl: ''}
    ]
  }
  const groupPrediction = [groupA, groupB, groupC, groupD, groupE, groupF]
  return groupPrediction;
}
function getKnockoutPrediction(options) {
  options = options || {}
  const isDecided = typeof options.isDecided == 'undefined' ? true : options.isDecided;
  const top16 = {
    StageName: "Top 16",
    Prediction: [
      { Position: 3, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 2, AwardPoints: 2, TeamId: 19, TeamName: 'Italy', FlagUrl: 'http://img.fifa.com/images/flags/4/ita.png'},
      { Position: 15, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 5, AwardPoints: 5, TeamId: 12, TeamName: 'Turkey', FlagUrl: 'http://img.fifa.com/images/flags/4/tur.png'},
      { Position: 1, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 2, AwardPoints: 2, TeamId: 190, TeamName: 'Belgium', FlagUrl: 'http://img.fifa.com/images/flags/4/bel.png'},
      { Position: 16, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 5, AwardPoints: 0, TeamId: 210, TeamName: 'Finland', FlagUrl: 'http://img.fifa.com/images/flags/4/fin.png'},
      { Position: 13, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 2, AwardPoints: 2, TeamId: 1900, TeamName: 'Netherland', FlagUrl: 'http://img.fifa.com/images/flags/4/ned.png'},
      { Position: 4, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 5, AwardPoints: 0, TeamId: 1200, TeamName: 'Austria', FlagUrl: 'http://img.fifa.com/images/flags/4/aus.png'},
      { Position: 11, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 3, AwardPoints: 3, TeamId: 1904, TeamName: 'Croatia', FlagUrl: 'http://img.fifa.com/images/flags/4/cro.png'},
      { Position: 7, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 3, AwardPoints: 0, TeamId: 1504, TeamName: 'England', FlagUrl: 'http://img.fifa.com/images/flags/4/eng.png'},
      { Position: 9, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 2, AwardPoints: 2, TeamId: 1905, TeamName: 'Spain', FlagUrl: 'http://img.fifa.com/images/flags/4/esp.png'},
      { Position: 8, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 5, AwardPoints: 5, TeamId: 1505, TeamName: 'Sweden', FlagUrl: 'http://img.fifa.com/images/flags/4/swe.png'},
      { Position: 5, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 2, AwardPoints: 2, TeamId: 1906, TeamName: 'France', FlagUrl: 'http://img.fifa.com/images/flags/4/fra.png'},
      { Position: 12, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 2, AwardPoints: 0, TeamId: 1206, TeamName: 'Germany', FlagUrl: 'http://img.fifa.com/images/flags/4/ger.png'},
      { Position: 2, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 4, AwardPoints: 0, TeamId: 1204, TeamName: 'Czech Republic', FlagUrl: 'http://img.fifa.com/images/flags/4/cze.png'},
      { Position: 6, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 3, AwardPoints: 3, TeamId: 15, TeamName: 'Wales', FlagUrl: 'http://img.fifa.com/images/flags/4/wal.png'},
      { Position: 10, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 4, AwardPoints: 0, TeamId: 150, TeamName: 'Russia', FlagUrl: 'http://img.fifa.com/images/flags/4/rus.png'},
      { Position: 14, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 6, AwardPoints: 5, TeamId: 2105, TeamName: 'B Winner', FlagUrl: ''}
    ]
  }
  const top8 = {
    StageName: "Top 8",
    Prediction: [
      { Position: 2, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 4, AwardPoints: 4, TeamId: 19, TeamName: 'Italy', FlagUrl: 'http://img.fifa.com/images/flags/4/ita.png'},
      { Position: 8, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 7, AwardPoints: 0, TeamId: 12, TeamName: 'Turkey', FlagUrl: 'http://img.fifa.com/images/flags/4/tur.png'},
      { Position: 1, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 4, AwardPoints: 4, TeamId: 190, TeamName: 'Belgium', FlagUrl: 'http://img.fifa.com/images/flags/4/bel.png'},
      { Position: 4, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 5, AwardPoints: 0, TeamId: 1504, TeamName: 'England', FlagUrl: 'http://img.fifa.com/images/flags/4/eng.png'},
      { Position: 5, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 4, AwardPoints: 4, TeamId: 1905, TeamName: 'Spain', FlagUrl: 'http://img.fifa.com/images/flags/4/esp.png'},
      { Position: 3, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 4, AwardPoints: 4, TeamId: 1906, TeamName: 'France', FlagUrl: 'http://img.fifa.com/images/flags/4/fra.png'},
      { Position: 6, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 4, AwardPoints: 0, TeamId: 1206, TeamName: 'Germany', FlagUrl: 'http://img.fifa.com/images/flags/4/ger.png'},
      { Position: 7, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 8, AwardPoints: 0, TeamId: 2105, TeamName: 'B Winner', FlagUrl: ''}
    ]
  }
  const top4 = {
    StageName: "Top 4",
    Prediction: [
      { Position: 4, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 9, AwardPoints: 0, TeamId: 12, TeamName: 'Turkey', FlagUrl: 'http://img.fifa.com/images/flags/4/tur.png'},
      { Position: 1, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 6, AwardPoints: 6, TeamId: 190, TeamName: 'Belgium', FlagUrl: 'http://img.fifa.com/images/flags/4/bel.png'},
      { Position: 2, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 6, AwardPoints: 6, TeamId: 1906, TeamName: 'France', FlagUrl: 'http://img.fifa.com/images/flags/4/fra.png'},
      { Position: 3, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 6, AwardPoints: 0, TeamId: 1206, TeamName: 'Germany', FlagUrl: 'http://img.fifa.com/images/flags/4/ger.png'},
    ]
  }
  const final = {
    StageName: "Top 2",
    Prediction: [
      { Position: 1, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 8, AwardPoints: 8, TeamId: 190, TeamName: 'Belgium', FlagUrl: 'http://img.fifa.com/images/flags/4/bel.png'},
      { Position: 2, IsDecided: isDecided, IsCorrect: false, PotentialPoints: 8, AwardPoints: 0, TeamId: 1206, TeamName: 'Germany', FlagUrl: 'http://img.fifa.com/images/flags/4/ger.png'},
    ]
  }

  const winner = {
    StageName: "Winner",
    Prediction: [
      { Position: 1, IsDecided: isDecided, IsCorrect: true, PotentialPoints: 10, AwardPoints: 10, TeamId: 190, TeamName: 'Belgium', FlagUrl: 'http://img.fifa.com/images/flags/4/bel.png'}
    ]
  }
  const knockoutPrediction = [top16, top8, top4, final, winner]
  return knockoutPrediction;
}

const groupPrediction = getGroupPrediction();
const knockoutPrediction = getKnockoutPrediction();
const predictions = [
  {
    GroupId: 12,
    table: {
      UserId: 123,
      PredictionId: 12321,
      DisplayName: 'Ekaterina Tankova',
      Position: 2,
      Points: 76,
      ProfilePictureUrl: 'https://s3.us-east-2.amazonaws.com/meizam-files/profile-pics/2110-de1b0eb2-1fd8-4f62-9ea5-596cdfbc820d',
      WinningTeamLogoUrl: 'http://img.fifa.com/images/flags/4/bel.png'
    },
    view: {
      TotalGroupMembers: 3,
      WinningTeam: 'Belgium'
    },
    groupStage: {
      GroupStage: {
        Prediction: groupPrediction,
        GainedPoints: 9,
        TotalPotentialPoints: 24
      }
    },
    knockoutStage: {
      KnockoutStage: {
        Prediction: knockoutPrediction,
        GainedPoints: 67,
        TotalPotentialPoints: 148
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
        Prediction: groupPrediction,
        GainedPoints: 3,
        TotalPotentialPoints: 24
      }
    },
    knockoutStage: {
      KnockoutStage: {
        Prediction: knockoutPrediction,
        GainedPoints: 67,
        TotalPotentialPoints: 135
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
        Prediction: groupPrediction,
        GainedPoints: 12,
        TotalPotentialPoints: 24
      }
    },
    knockoutStage: {
      KnockoutStage: {
        Prediction: knockoutPrediction,
        GainedPoints: 67,
        TotalPotentialPoints: 135
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
        Prediction: getGroupPrediction({isDecided: false}),
        GainedPoints: 0,
        TotalPotentialPoints: 24
      },
    },
    knockoutStage: {
      KnockoutStage: {
        Prediction: getKnockoutPrediction({isDecided: false}),
        GainedPoints: 0,
        TotalPotentialPoints: 148
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
