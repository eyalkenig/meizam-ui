import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Theme } from '@material-ui/core';
import { UserInGroupBadge } from './components';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../hooks';
import { UserGroupState } from '../../store/user/types';
import { fetchGroupTable } from '../../store/groups/actions';
import { useHistory } from 'react-router-dom';
import { userGroupsSelector } from '../../store/selectors/user';
import { PlainFunction } from '../../types/interfaces';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(4)
	},
	feedGroup: {}
}));

interface IProps {
	onGroupClicked: PlainFunction;
}

const Feed: FC<IProps> = props => {
	const dispatch = useDispatch();
	const classes = useStyles();
	const history = useHistory();
	const groups = useSelector(userGroupsSelector);

	return (
		<div className={classes.root}>
			<Grid container spacing={4}>
				{groups.map((group: UserGroupState, index: number) => (
					<Grid
						item
						key={index}
						lg={3}
						sm={6}
						xl={3}
						xs={12}
						data-cy='feed-group'
					>
						<UserInGroupBadge
							displayName={group.displayName}
							groupId={group.groupId}
							position={group.position}
							totalMembers={group.totalMembers}
							onGroupClicked={() => {
								history.push(`/table/${group.groupId}`);
							}}
						/>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

const FeedContainer = Feed;

export default FeedContainer;
