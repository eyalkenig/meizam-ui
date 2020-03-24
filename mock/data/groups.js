const groups = [
  {
    GroupId: 12,
    DisplayName: 'Yotpo',
    TotalMembers: 4,
    PictureUrl: null,
    FirstPlace: {
      UserId: 123,
      PredictionId: 62126,
      DisplayName: "Ekaterina Tankova",
      Position: 1,
      Points: 120,
      ProfilePictureUrl: 'https://s3.us-east-2.amazonaws.com/meizam-files/profile-pics/2110-de1b0eb2-1fd8-4f62-9ea5-596cdfbc820d',
      WinningTeamLogoUrl: 'http://img.fifa.com/images/flags/4/bel.png',
    },
    Surroundings: [{
      UserId: 123,
      PredictionId: 62126,
      DisplayName: "Ekaterina Tankova",
      Position: 1,
      Points: 120,
      ProfilePictureUrl: 'https://s3.us-east-2.amazonaws.com/meizam-files/profile-pics/2110-de1b0eb2-1fd8-4f62-9ea5-596cdfbc820d',
      WinningTeamLogoUrl: 'http://img.fifa.com/images/flags/4/bel.png',
    }, {
      UserId: 621,
      PredictionId: 12321,
      DisplayName: "Alexa Richardson",
      Position: 2,
      Points: 76,
      ProfilePictureUrl: null,
      WinningTeamLogoUrl: 'http://img.fifa.com/images/flags/4/ita.png',
    }, {
      UserId: 124,
      PredictionId: 12421,
      DisplayName: "Cao Yu",
      Position: 3,
      Points: 70,
      ProfilePictureUrl: null,
      WinningTeamLogoUrl: 'http://img.fifa.com/images/flags/4/ger.png',
    },
    {
      UserId: 125,
      PredictionId: 12423,
      DisplayName: "Yao Ming",
      Position: 4,
      Points: 62,
      ProfilePictureUrl: null,
      WinningTeamLogoUrl: 'http://img.fifa.com/images/flags/4/ita.png',
    }
    ]
  }, 
  {
    GroupId: 125,
    DisplayName: 'המיזם',
    TotalMembers: 12,
    PictureUrl: null,
    FirstPlace: {
      UserId: 56,
      PredictionId: 3526,
      DisplayName: "עידן עמדי",
      Position: 1,
      Points: 150,
      ProfilePictureUrl: null,
      WinningTeamLogoUrl: 'http://img.fifa.com/images/flags/4/isr.png',
    },
    Surroundings: [{
      UserId: 60,
      PredictionId: 3530,
      DisplayName: "Šarūnas Jasikevičius",
      Position: 5,
      Points: 80,
      ProfilePictureUrl: null,
      WinningTeamLogoUrl: 'http://img.fifa.com/images/flags/4/bel.png',
    }, {
      UserId: 123,
      PredictionId: 3531,
      DisplayName: "Ekaterina Tankova",
      Position: 6,
      Points: 52,
      ProfilePictureUrl: 'https://s3.us-east-2.amazonaws.com/meizam-files/profile-pics/2110-de1b0eb2-1fd8-4f62-9ea5-596cdfbc820d',
      WinningTeamLogoUrl: 'http://img.fifa.com/images/flags/4/ita.png',
    }, {
      UserId: 61,
      PredictionId: 3532,
      DisplayName: "Gur Shelef",
      Position: 7,
      Points: 51,
      ProfilePictureUrl: null,
      WinningTeamLogoUrl: 'http://img.fifa.com/images/flags/4/bel.png',
    }
    ]
  },
]

function getGroup(groupId) {
  for (let i=0;i<groups.length;i++) {
    const group = groups[i];
    if (group.GroupId == groupId) {
      return group
    }
  }
  return null
}
module.exports = {
  groups: groups,
  getGroup: getGroup
}
