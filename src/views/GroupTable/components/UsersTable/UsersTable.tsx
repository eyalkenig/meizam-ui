import React, { FC } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
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
	Theme
} from '@material-ui/core';
import getInitials from '../../../../services/utils/getInitials';
import { TableRow as ITableRow } from '../../../../store/groups/types';

const useStyles = makeStyles((theme: Theme) => ({
	root: {},
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
	avatar: {
		marginRight: theme.spacing(2)
	},
	actions: {
		justifyContent: 'flex-end'
	}
}));

interface IProps {
	className: string;
	users: ITableRow[];
}

const UsersTable: FC<IProps> = (props: any) => {
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
												<Avatar
													className={classes.avatar}
													src={user.profilePictureUrl}
												>
													{getInitials(user.name)}
												</Avatar>
												<Typography variant='body1'>{user.name}</Typography>
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
