export const FETCH_GROUPS = 'FETCH_GROUPS'
export const FETCH_GROUPS_SUCCESS = 'FETCH_GROUPS_SUCCESS'
export const FETCH_GROUPS_FAILURE = 'FETCH_GROUPS_FAILURE'

interface FetchGroupsAction {
    type: typeof FETCH_GROUPS
}
interface FetchGroupsSuccessAction {
    type: typeof FETCH_GROUPS_SUCCESS
    payload: GroupsState
}
interface FetchGroupsFailureAction {
    type: typeof FETCH_GROUPS_FAILURE
    payload: string
}

export type GroupsActionTypes = FetchGroupsAction | FetchGroupsSuccessAction | FetchGroupsFailureAction

export type TournamentType = 'euro' | 'mondial'

export interface Group {
    id: number;
    displayName: string;
    totalMembers: number;
    tournamentType: TournamentType;
}

export interface GroupsState {
    groups: Group[];
}

