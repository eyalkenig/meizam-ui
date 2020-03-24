import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../hooks';
import { UserGroupState } from '../../store/user/types';
import { useHistory } from 'react-router-dom';
import { userGroupsSelector, userSelector } from '../../store/selectors/user';
import { PlainFunction } from '../../types/interfaces';
import UserTableRow from '../GroupTable/components/UsersTable/UserTableRow'; 
import UserGroupTable from './components/UserGroupTable';

import { 
	Theme,
	Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(4),
	},
	headline: {
		marginBottom: 30,
	},
}));

interface Props {
	onGroupClicked: PlainFunction;
}

const Feed: FC<Props> = props => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const history = useHistory();
	const user = useSelector(userSelector);
	const groups = useSelector(userGroupsSelector);

	const handleUserNameClicked = (predictionId: number) => {
		history.push(`/prediction/${predictionId}`);
	};
	
	const showTable = (tableId: number) => {
		history.push(`/table/${tableId}`);
	};

	return (
		<div className={classes.root}>
			<Typography className={classes.headline} variant="h5">Your Groups</Typography>
			<UserGroupTable 
				groups={groups} 
				user={user} 
				groupNameClicked={showTable} 
				showTableClicked={showTable} 
				userNameClicked={handleUserNameClicked}
			/>
		</div>
	);
};

const FeedContainer = Feed;

export default FeedContainer;
