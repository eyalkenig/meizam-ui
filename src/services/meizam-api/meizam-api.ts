import axios from 'axios';

export default class MeizamApi {
  static async FetchUserInfo(): Promise<any> {
    const baseUrl = process.env.REACT_APP_MEIZAM_API_BASE_HOST;
    if (baseUrl && baseUrl.indexOf('localhost') >= 0) {
      console.log('running on localhost')
    } else {
      axios.defaults.withCredentials = true;
    }
    const response = await axios.post(`${baseUrl}/Group/LoadUserPrediction`, { p_id: 3519 })
    return response.data
  }
}
