const groupsMock = require('./groups')
const user = {
  ID: 123,
  DisplayName: 'Ekaterina Tankova',
  ProfilePictureUrl: 'https://s3.us-east-2.amazonaws.com/meizam-files/profile-pics/2110-de1b0eb2-1fd8-4f62-9ea5-596cdfbc820d',
  Groups: [
    {
      ...groupsMock.groups[0],
      Position: 1,
      Points: 120
    },
    {
      ...groupsMock.groups[1],
      Position: 6,
      Points: 52
    },
  ]
}

module.exports = {
  user: user
}
