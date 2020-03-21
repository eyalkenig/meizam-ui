import { UserActionTypes, FETCH_USER_INFO, NOT_LOGGED_IN_EXCEPTION } from "./types";

export function fetchUserInfo(): UserActionTypes {
  return {
    type: FETCH_USER_INFO
  }
}

export const notLoggedInException = (): UserActionTypes => ({
  type: NOT_LOGGED_IN_EXCEPTION
})
