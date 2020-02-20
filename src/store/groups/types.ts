export const FETCH_GROUP_TABLE = 'FETCH_GROUP_TABLE'
export const FETCH_GROUP_TABLE_SUCCESS = 'FETCH_GROUP_TABLE_SUCCESS'
export const FETCH_GROUP_TABLE_FAILURE = 'FETCH_GROUP_TABLE_FAILURE'

export interface FetchGroupTableAction {
    type: typeof FETCH_GROUP_TABLE
    payload: number;
}
interface FetchGroupTableSuccessAction {
    type: typeof FETCH_GROUP_TABLE_SUCCESS
    payload: FetchTableResult
}
interface FetchGroupTableFailureAction {
    type: typeof FETCH_GROUP_TABLE_FAILURE
    payload: string
}

export type GroupsActionTypes = FetchGroupTableAction | FetchGroupTableSuccessAction | FetchGroupTableFailureAction

export type TournamentType = 'euro' | 'mondial'

export interface FetchTableResult {
    groupId: number;
    table: TableRow[];
}

export interface TableRow {
    position: number;
    userId: number;
    displayName: string;
    profilePicture: string;
    points: number;
}


export interface Group {
    id: number;
    displayName: string;
    totalMembers: number;
    tournamentType: TournamentType;
}

export interface TableView {
    selectedGroupId: number;
    table: TableRow[];
}

export interface GroupsState {
    groups: Group[];
    tableView: TableView;
}

