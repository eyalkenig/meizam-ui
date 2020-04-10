export const FETCH_GROUP_TABLE = 'FETCH_GROUP_TABLE';
export const FETCH_GROUP_TABLE_SUCCESS = 'FETCH_GROUP_TABLE_SUCCESS';
export const FETCH_GROUP_TABLE_FAILURE = 'FETCH_GROUP_TABLE_FAILURE';
export const SEARCH_GROUP_TABLE = 'SEARCH_GROUP_TABLE';
export const CREATE_GROUP = 'CREATE_GROUP';
export const CREATE_GROUP_SUCCESS = 'CREATE_GROUP_SUCCESS';
export const CREATE_GROUP_FAILURE = 'CREATE_GROUP_FAILURE';

export interface FetchGroupTableAction {
	type: typeof FETCH_GROUP_TABLE;
	payload: number;
}
interface FetchGroupTableSuccessAction {
	type: typeof FETCH_GROUP_TABLE_SUCCESS;
	payload: FetchTableResult;
}
interface FetchGroupTableFailureAction {
	type: typeof FETCH_GROUP_TABLE_FAILURE;
	payload: string;
}
export interface SearchGroupTableAction {
	type: typeof SEARCH_GROUP_TABLE;
	payload: string;
}

export interface CreateGroupAction {
	type: typeof CREATE_GROUP;
	payload: CreateGroupBody;
}

export interface CreateGroupSuccessAction {
	type: typeof CREATE_GROUP_SUCCESS;
}

export interface CreateGroupFailureAction {
	type: typeof CREATE_GROUP_FAILURE;
}

export type GroupsActionTypes =
	| FetchGroupTableAction
	| FetchGroupTableSuccessAction
	| FetchGroupTableFailureAction
	| SearchGroupTableAction
	| CreateGroupAction
	| CreateGroupSuccessAction
	| CreateGroupFailureAction;

export type TournamentType = 'euro' | 'mondial';

export interface FetchTableResult {
	groupId: number;
	table: TableRow[];
}

export interface TableRow {
	id: number;
	name: string;
	position: number;
	points: number;
	profilePictureUrl: string;
	predictionId: number;
	winningTeamLogoUrl: string;
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
	searchText: string;
	fetching: boolean;
	hasFetchingError: boolean;
}

export interface CreateGroupBody {
	groupName: string;
	isPublic: boolean;
	password?: string;
	createMonkey: boolean;
	allowGamePredictions: boolean;
}
