import { GroupsActionTypes, FETCH_GROUP_TABLE } from "./types";

export function fetchGroupTable(groupId: number): GroupsActionTypes {
  return {
    type: FETCH_GROUP_TABLE,
    payload: groupId
  }
}
