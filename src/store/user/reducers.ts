import { UserState, UserActionTypes, FETCH_USER_INFO_SUCCESS } from "./types";

const initialState: UserState = {
    id: 0,
    displayName: '',
    profilePicture: '',
    groups: []
}

export function userReducer(
    state = initialState,
    action: UserActionTypes
  ): UserState {
    switch (action.type) {
      case FETCH_USER_INFO_SUCCESS:
        return {
          ...state,
          ...action.payload
        }
      default:
        return state
    }
  }