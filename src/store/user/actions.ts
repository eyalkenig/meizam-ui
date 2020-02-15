import { UserActionTypes, FETCH_USER_INFO, UserState, FETCH_USER_INFO_SUCCESS, FETCH_USER_INFO_FAILURE } from "./types";

export function fetchUserInfo(): UserActionTypes {
    return {
      type: FETCH_USER_INFO
    }
}

export function fetchUserInfoSuccess(userState: UserState): UserActionTypes {
    return {
      type: FETCH_USER_INFO_SUCCESS,
      payload: userState
    }
}

export function fetchUserInfoFailure(error: string): UserActionTypes {
    return {
      type: FETCH_USER_INFO_FAILURE,
      payload: error
    }
}

