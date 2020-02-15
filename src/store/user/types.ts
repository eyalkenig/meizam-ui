export const FETCH_USER_INFO = 'FETCH_USER_INFO'
export const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCCESS'
export const FETCH_USER_INFO_FAILURE = 'FETCH_USER_INFO_FAILURE'

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

export type UserActionTypes = FetchUserInfoAction | FetchUserInfoSuccessAction | FetchUserInfoFailureAction

export interface UserPrediction {
    id: number;
}
export interface UserGroupState {
    groupId: number;
    points: number;
    position: number;
    displayName: string;
    totalMembers: number;
    prediction?: UserPrediction;
}

export interface UserState {
    id: number;
    displayName: string;
    profilePicture: string;
    groups: UserGroupState[];
}

