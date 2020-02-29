const groups = [
  {
    GroupId: 12,
    DisplayName: 'המיזם',
    TotalMembers: 3,
    PictureUrl: null
  },
  {
    GroupId: 125,
    DisplayName: 'Yotpo',
    TotalMembers: 1,
    PictureUrl: null
  }
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
