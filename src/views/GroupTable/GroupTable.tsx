import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { UsersToolbar, UsersTable } from './components';
import { Theme, Typography, CircularProgress } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { fetchGroupTable, searchGroupTable } from '../../store/groups/actions';
import { UserGroupState } from '../../store/user/types';
import useSelector from '../../hooks/useSelector';
import { userGroupsSelector } from '../../store/selectors/user';
import { groupTableViewSelector, groupTableFilteredViewSelector, groupsSelector } from '../../store/selectors/groups';
import { fetchPrediction } from '../../store/predictions/actions';
import { useHistory } from 'react-router-dom';
import { RouterMatch } from '../../types/interfaces';
import { TableRow } from '../../store/groups/types';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(3)
	},
	content: {
		marginTop: theme.spacing(2)
	},
	center: {
		textAlign: 'center'
	}
}));
interface Props {
	match: RouterMatch
}
const GroupTable: FC<Props> = props => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const userGroups = useSelector(userGroupsSelector);
	const tableView = useSelector(groupTableViewSelector);
	const groups = useSelector(groupsSelector);
	const filteredUsersTable = useSelector(groupTableFilteredViewSelector);
	const groupIdParam = props.match.params.groupId;
	if (tableView.selectedGroupId === 0) {
		if (groupIdParam) {
			dispatch(fetchGroupTable(groupIdParam));
		} else if (userGroups.length > 0) {
			dispatch(fetchGroupTable(userGroups[0].groupId));
		}
	} else if (groupIdParam && groupIdParam != tableView.selectedGroupId) {
		dispatch(fetchGroupTable(groupIdParam));
	}

	const currentGroup = userGroups.find(
		(x: UserGroupState) => x.groupId.toString() === tableView.selectedGroupId.toString()
	);

	return (
		<div className={classes.root}>
			<Typography className={classes.center} variant='h2'>
				{currentGroup ? currentGroup.displayName : null}
			</Typography>
			<UsersToolbar searchText={groups.searchText} onSearchInputChange={(text: string) => {
				dispatch(searchGroupTable(text))
			}} />
			<div className={classes.content}>
				{
					groups.fetching ?
					<div className={classes.center}>
						<CircularProgress/>
					</div>
					:
					groups.hasFetchingError ?
					<Typography align='center' paragraph>Oops.... Something went wrong</Typography>
					:
					filteredUsersTable.length === 0 ?
					<Typography align='center' paragraph>Oops, no matching users</Typography>	
					:
					<UsersTable users={filteredUsersTable}
								onUserClicked={(predictionId: number) => {
									history.push(`/prediction/${predictionId}`);
								}} 
					/>
				}
			</div>
		</div>
	);
};

const GroupTableContainer = GroupTable;

export default GroupTableContainer;
