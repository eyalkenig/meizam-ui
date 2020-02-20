import axios from 'axios';

export default class MeizamApi {
  static async FetchUserInfo(): Promise<any> {
    const response = await MeizamApi.post('/Group/LoadUserPrediction', { p_id: 3519 })
    return response.data
  }

  static async FetchGroupTable(groupId: number): Promise<any> {
    const response = await MeizamApi.post(`/Group/LoadTable`, { g_id: groupId })
    return response.data
  }

  private static async post(path: string, body: any): Promise<any> {
    const baseUrl = MeizamApi.getBaseAndSetCredentials()
    return axios.post(`${baseUrl}${path}`, body)
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
