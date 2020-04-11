import { RootState } from '../';
import { TableRow } from '../groups/types';

export const groupsSelector = (state: RootState) => state.groups;

export const groupTableViewSelector = (state: RootState) =>
	groupsSelector(state).tableView;

export const groupTableFilteredViewSelector = (state: RootState) =>
	groupTableViewSelector(state).table.filter((row: TableRow) => {
		return (
			row.name
				.toLowerCase()
				.indexOf(groupsSelector(state).searchText.toLowerCase()) >= 0
		);
	});

export const createGroupSelector = (state: RootState) => state.createGroup;
