import { GroupsState, GroupsActionTypes, FETCH_GROUPS_SUCCESS } from "./types";

const initialState: GroupsState = {
    groups: []
}

export function groupReducer(
    state = initialState,
    action: GroupsActionTypes
  ): GroupsState {
    switch (action.type) {
      case FETCH_GROUPS_SUCCESS:
        return {
          ...state,
          ...action.payload
        }
      default:
        return state
    }
  }