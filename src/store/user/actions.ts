import { UserActionTypes, FETCH_USER_INFO } from "./types";

export function fetchUserInfo(): UserActionTypes {
    return {
      type: FETCH_USER_INFO
    }
}
