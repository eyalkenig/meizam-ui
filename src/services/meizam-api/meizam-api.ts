import axios from 'axios';

export default class MeizamApi {
  static async FetchUserInfo(): Promise<any> {
    const response = await MeizamApi.get('/User/Info', {})
    if (response.data.status != 'ok') {
      console.log(response.data)
      throw new Error(response.data.error)
    }
    const data = response.data.response
    return {
      id: data.ID,
      displayName: data.DisplayName,
      profilePicture: data.ProfilePictureUrl,
      groups: data.Groups.map((group: any) => {
        return {
          groupId: group.GroupId,
          displayName: group.DisplayName,
          position: group.Position,
          points: group.Points,
          totalMembers: group.TotalMembers,
          pictureUrl: group.PictureUrl
        }
      })
    }
  }

  static async FetchGroupTable(groupId: number): Promise<any> {
    const response = await MeizamApi.get(`/Group/Table`, { groupId: groupId })
    if (response.data.status != 'ok') {
      console.log(response.data)
      throw new Error(response.data.error)
    }
    return {
      groupId: response.data.response.ID,
      table: response.data.response.Users.map((userRow: any) => {
        return {
          id: userRow.UserId,
          name: userRow.DisplayName,
          position: userRow.Position,
          points: userRow.Points,
          profilePictureUrl: userRow.ProfilePictureUrl
        }
      })
    }
  }

  private static async post(path: string, body: any): Promise<any> {
    const baseUrl = MeizamApi.getBaseAndSetCredentials()
    return axios.post(`${baseUrl}${path}`, body)
  }

  private static async get(path: string, params: any): Promise<any> {
    const baseUrl = MeizamApi.getBaseAndSetCredentials()
    return axios.get(`${baseUrl}${path}`, { params })
  }

  private static getBaseAndSetCredentials(): string | undefined {
    const baseUrl = MeizamApi.getBaseUrl()
    if (baseUrl && baseUrl.indexOf('localhost') >= 0) {
      console.log('running on localhost')
    } else {
      axios.defaults.withCredentials = true;
    }
    return baseUrl
  }

  private static getBaseUrl(): string | undefined {
    return process.env.REACT_APP_MEIZAM_API_BASE_HOST
  }
}
