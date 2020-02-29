import React, { FC } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles, withStyles } from '@material-ui/styles';
import {
	Card,
	CardContent,
	Avatar,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Typography,
	Theme,
	Badge
} from '@material-ui/core';
import getInitials from '../../../../services/utils/getInitials';
import { TableRow as ITableRow } from '../../../../store/groups/types';
import { PlainFunction } from '../../../../types/interfaces';

const SmallAvatar = withStyles((theme: Theme) => ({
	root: {
	  width: 17,
	  height: 17,
	  border: `2px solid ${theme.palette.background.paper}`,
	},
  }))(Avatar);

const useStyles = makeStyles((theme: Theme) => ({
	root: {},
	badge: {
		marginRight: '16px'
	},
	content: {
		padding: 0
	},
	inner: {
		minWidth: 0
	},
	nameContainer: {
		display: 'flex',
		alignItems: 'center'
	},
	avatar: {},
	actions: {
		justifyContent: 'flex-end'
	}
}));

interface Props {
	className?: string;
	users: ITableRow[];
	onUserClicked: PlainFunction;
}

const UsersTable: FC<Props> = props => {
	const { className, users, ...rest } = props;
	users.sort((a: any, b: any) => (a.position > b.position ? 1 : -1));
	const classes = useStyles();

	return (
		<Card {...rest} className={clsx(classes.root, className)}>
			<CardContent className={classes.content}>
				<PerfectScrollbar>
					<div className={classes.inner}>
						<Table>
							<TableHead>
								<TableRow>
									<TableCell padding='checkbox'></TableCell>
									<TableCell>Name</TableCell>
									<TableCell>Points</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{users.map((user: any) => (
									<TableRow hover key={user.id} data-cy='table-row'>
										<TableCell>{user.position}</TableCell>
										<TableCell>
											<div className={classes.nameContainer}>
												<Badge
													className={classes.badge}
													overlap="circle"
													anchorOrigin={{
														vertical: 'bottom',
														horizontal: 'right',
													}}
													badgeContent={<SmallAvatar src={user.winningTeamLogoUrl} data-cy='winner-flag' />}
												>
													<Avatar
														className={classes.avatar}
														src={user.profilePictureUrl}
														onClick={() => props.onUserClicked(user.predictionId)}
														data-cy='user-profile-picture'
													>
														{getInitials(user.name)}
													</Avatar>
												</Badge>
												<Typography variant='body1' onClick={() => props.onUserClicked(user.predictionId)}>{user.name}</Typography>
											</div>
										</TableCell>
										<TableCell>{user.points}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</PerfectScrollbar>
			</CardContent>
		</Card>
	);
};

export default UsersTable;
