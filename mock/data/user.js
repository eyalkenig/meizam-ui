const groupsMock = require('./groups')
const user = {
  UserId: 123,
  DisplayName: 'Ekaterina Tankova',
  ProfilePictureUrl: 'https://s3.us-east-2.amazonaws.com/meizam-files/profile-pics/2110-de1b0eb2-1fd8-4f62-9ea5-596cdfbc820d',
  Groups: [
    {
      ...groupsMock.groups[0],
      Position: 2,
      Points: 102
    },
    {
      ...groupsMock.groups[1],
      Position: 1,
      Points: 10
    }
  ]
}

module.exports = {
  user: user
}
