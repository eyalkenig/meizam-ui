export const FETCH_PREDICTION = 'FETCH_PREDICTION'
export const FETCH_PREDICTION_SUCCESS = 'FETCH_PREDICTION_SUCCESS'
export const FETCH_PREDICTION_FAILURE = 'FETCH_PREDICTION_FAILURE'

export interface FetchPredictionAction {
    type: typeof FETCH_PREDICTION
    payload: number;
}
interface FetchPredictionSuccessAction {
    type: typeof FETCH_PREDICTION_SUCCESS
    payload: Prediction
}
interface FetchPredictionFailureAction {
    type: typeof FETCH_PREDICTION_FAILURE
    payload: string
}

export type PredictionActionTypes = FetchPredictionAction | FetchPredictionSuccessAction | FetchPredictionFailureAction

export interface PredictionMetadata {
    groupId: number;
    position: number;
    points: number;
    displayName: string;
    profilePicture: string;
    winningTeam: string;
    winningTeamLogoUrl: string;
    totalGroupMembers: number;
}


export interface PredictionGroupStageRow {
    position: number;
    teamId: number;
    teamName: string;
    flagUrl: string;
    awardPoints: number;
    isCorrect: boolean;
}
export interface GroupPrediction {
    stageName: string;
    prediction: PredictionGroupStageRow[];
}

export interface GroupsStagePrediction {
   prediction: GroupPrediction[];
   gainedPoints: number;
   totalAvailablePoints: number;
}

export interface Prediction {
    id: number;
    metadata?: PredictionMetadata;
    groupsStage?: GroupsStagePrediction;
}

export interface PredictionState {
    prediction: Prediction;
    fetching: boolean;
}

