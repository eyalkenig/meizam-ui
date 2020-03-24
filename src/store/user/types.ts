import { TableRow } from '../groups/types';

export const FETCH_USER_INFO = 'FETCH_USER_INFO'
export const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS'
export const FETCH_USER_INFO_FAILURE = 'FETCH_USER_INFO_FAILURE'
export const NOT_LOGGED_IN_EXCEPTION = 'NOT_LOGGED_IN_EXCEPTION'

interface FetchUserInfoAction {
    type: typeof FETCH_USER_INFO
}
interface FetchUserInfoSuccessAction {
    type: typeof FETCH_USER_INFO_SUCCESS
    payload: UserState
}
interface FetchUserInfoFailureAction {
    type: typeof FETCH_USER_INFO_FAILURE
    payload: string
}
interface NotLoggedInExceptionAction {
    type: typeof NOT_LOGGED_IN_EXCEPTION
}
export type UserActionTypes = FetchUserInfoAction | FetchUserInfoSuccessAction | FetchUserInfoFailureAction | NotLoggedInExceptionAction

export interface UserPrediction {
    userId: number;
    predictionId: number;
    displayName: string;
    position: number;
    points: number;
    profilePictureUrl: string;
    winningTeamLogoUrl: string;
}

export interface UserGroupState {
    groupId: number;
    points: number;
    position: number;
    displayName: string;
    totalMembers: number;
    pictureUrl: string;
    prediction?: UserPrediction;
    firstPlace?: TableRow;
    surroundings?: TableRow[];
}

export interface UserState {
    id: number;
    displayName: string;
    profilePicture: string;
    groups: UserGroupState[];
}

