import { GroupsActionTypes, FETCH_GROUPS, GroupsState, FETCH_GROUPS_SUCCESS, FETCH_GROUPS_FAILURE } from "./types";

export function fetchGroupInfo(): GroupsActionTypes {
    return {
      type: FETCH_GROUPS
    }
}

export function fetchGroupInfoSuccess(userState: GroupsState): GroupsActionTypes {
    return {
      type: FETCH_GROUPS_SUCCESS,
      payload: userState
    }
}

export function fetchGroupInfoFailure(error: string): GroupsActionTypes {
    return {
      type: FETCH_GROUPS_FAILURE,
      payload: error
    }
}

