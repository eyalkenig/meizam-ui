import axiosWrapper from './axios-wrapper';
import { TableRow, CreateGroupBody } from '../../store/groups/types';
import {
	Prediction,
	TeamPrediction,
	StagePrediction,
	StagePredictions,
} from '../../store/predictions/types';

export default class MeizamApi {
	static async FetchUserInfo(): Promise<any> {
		const response = await axiosWrapper.get('/User/Info');
		if (response.data.status != 'ok') {
			console.log(response.data);
			throw new Error(response.data.error);
		}
		const data = response.data.response;
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
					pictureUrl: group.PictureUrl,
					firstPlace: MeizamApi.mapUserPredictionInfo(group.FirstPlace),
					surroundings: group.Surroundings
						? group.Surroundings.map((surrounding: any) => {
								return MeizamApi.mapUserPredictionInfo(surrounding);
						  })
						: null,
				};
			}),
		};
	}

	static async FetchGroupTable(groupId: number): Promise<any> {
		const response = await axiosWrapper.get('/Group/Table', {
			params: { groupId: groupId },
		});
		if (response.data.status != 'ok') {
			console.log(response.data);
			throw new Error(response.data.error);
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
					winningTeamLogoUrl: userRow.WinningTeamLogoUrl,
				};
			}),
		};
	}
	static async FetchPrediction(predictionId: number): Promise<Prediction> {
		const response = await axiosWrapper.get('/Group/Prediction', {
			params: { predictionId: predictionId },
		});
		if (response.data.status != 'ok') {
			console.log(response.data);
			throw new Error(response.data.error);
		}
		const data = response.data.response;
		return {
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
			groupsStage: MeizamApi.adaptPredictionStage(data.GroupStage),
			knockoutStage: MeizamApi.adaptPredictionStage(data.KnockoutStage),
		};
	}

	static async CreateGroup(body: CreateGroupBody) {
		const response = await axiosWrapper.post('/Group/CreateGroup', body);
		if (response.data.status !== 'ok') {
			throw new Error(response.data.error);
		}

		return {
			id: response.data.id,
		};
	}

	private static adaptPredictionStage(stage: any): StagePredictions {
		return {
			prediction: stage.Prediction.map(
				(groupPrediction: any): StagePrediction => {
					return {
						stageName: groupPrediction.StageName,
						prediction: groupPrediction.Prediction.map(
							(team: any): TeamPrediction => {
								return {
									position: team.Position,
									teamId: team.TeamId,
									teamName: team.TeamName,
									flagUrl: team.FlagUrl,
									awardPoints: team.AwardPoints,
									isCorrect: team.IsCorrect,
									isDecided: team.IsDecided,
									potentialPoints: team.PotentialPoints,
								};
							}
						),
					};
				}
			),
			gainedPoints: stage.GainedPoints,
			totalAvailablePoints: stage.TotalPotentialPoints,
		};
	}

	private static mapUserPredictionInfo(source: any): any {
		if (source) {
			return {
				id: source.UserId,
				predictionId: source.PredictionId,
				name: source.DisplayName,
				position: source.Position,
				points: source.Points,
				profilePictureUrl: source.ProfilePictureUrl,
				winningTeamLogoUrl: source.WinningTeamLogoUrl,
			};
		} else {
			return null;
		}
	}
}
