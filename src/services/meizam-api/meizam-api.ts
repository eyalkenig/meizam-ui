import axios from 'axios';
import { Prediction, PredictionGroupStageRow, GroupPrediction } from '../../store/predictions/types';

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
      groupId: groupId,
      table: response.data.response.Users.map((userRow: any) => {
        return {
          id: userRow.UserId,
          name: userRow.DisplayName,
          position: userRow.Position,
          points: userRow.Points,
          profilePictureUrl: userRow.ProfilePictureUrl,
          predictionId: userRow.PredictionId,
          winningTeamLogoUrl: userRow.WinningTeamLogoUrl
        }
      })
    }
  }
  static FetchPrediction(predictionId: number): Promise<Prediction> {
    return new Promise((resolve, reject) => {
      MeizamApi.get(`/Group/Prediction`, { predictionId: predictionId }).then(response => {
        if (response.data.status != 'ok') {
          console.log(response.data)
          throw new Error(response.data.error)
        }
        const data = response.data.response;
        resolve({
          id: predictionId,
          metadata: {
            displayName: data.DisplayName,
            points: data.Points,
            position: data.Position,
            profilePicture: data.ProfilePictureUrl,
            winningTeam: data.WinningTeam,
            winningTeamLogoUrl: data.WinningTeamLogoUrl,
            groupId: data.GroupId,
            totalGroupMembers: data.TotalGroupMembers,
          },
          groupsStage: {
            prediction: data.GroupStage.Prediction.map((groupPrediction: any): GroupPrediction =>{
              return {
                stageName: groupPrediction.StageName,
                prediction: groupPrediction.Prediction.map((team: any): PredictionGroupStageRow => {
                  return {
                    position: team.Position,
                    teamId: team.TeamId,
                    teamName: team.TeamName,
                    flagUrl: team.FlagUrl,
                    awardPoints: team.AwardPoints,
                    isCorrect: team.IsCorrect
                  }
                })
              }
            }),
            gainedPoints: data.GroupStage.GainedPoints,
            totalAvailablePoints: data.GroupStage.TotalPotentialPoints
          }
        });
      }).catch(error => {
        reject(error)
      })
    });
  }

  private static post(path: string, body: any): Promise<any> {
    const baseUrl = MeizamApi.getBaseAndSetCredentials()
    return axios.post(`${baseUrl}${path}`, body)
  }

  private static get(path: string, params: any): Promise<any> {
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
