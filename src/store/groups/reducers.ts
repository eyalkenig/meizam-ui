import { GroupsState, GroupsActionTypes, FETCH_GROUP_TABLE_SUCCESS, Group } from "./types";

const initialState: GroupsState = {
    groups: [],
    tableView: {
      selectedGroupId: 0,
      table: []
    }
}

export function groupReducer(
    state = initialState,
    action: GroupsActionTypes
  ): GroupsState {
    switch (action.type) {
      case FETCH_GROUP_TABLE_SUCCESS:
        return {
          ...state,
          tableView: {
            selectedGroupId: action.payload.groupId,
            table: action.payload.table
          }
        }
      default:
        return state
    }
  }