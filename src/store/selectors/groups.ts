import { RootState } from '../';

export const groupsSelector = (state: RootState) => state.groups;

export const groupTableViewSelector = (state: RootState) =>
	groupsSelector(state).tableView;
