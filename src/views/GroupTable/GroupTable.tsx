import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { UsersToolbar, UsersTable } from './components';
import { Theme, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { fetchGroupTable } from '../../store/groups/actions';
import { UserGroupState } from '../../store/user/types';
import useSelector from '../../hooks/useSelector';
import { userGroupsSelector } from '../../store/selectors/user';
import { groupTableViewSelector } from '../../store/selectors/groups';
import { fetchPrediction } from '../../store/predictions/actions';
import { useHistory } from 'react-router-dom';

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

const GroupTable: FC = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const userGroups = useSelector(userGroupsSelector);
	const tableView = useSelector(groupTableViewSelector);
	if (tableView.selectedGroupId === 0) {
		if (userGroups.length > 0) {
			dispatch(fetchGroupTable(userGroups[0].groupId));
		}
	}
	const currentGroup = userGroups.find(
		(x: UserGroupState) => x.groupId === tableView.selectedGroupId
	);
	return (
		<div className={classes.root}>
			<Typography className={classes.center} variant='h2'>
				{currentGroup ? currentGroup.displayName : null}
			</Typography>
			<UsersToolbar />
			<div className={classes.content}>
				<UsersTable users={tableView.table}
							onUserClicked={(predictionId: number) => {
								history.push(`/prediction/${predictionId}`);
							}} />
			</div>
		</div>
	);
};

const GroupTableContainer = GroupTable;

export default GroupTableContainer;
