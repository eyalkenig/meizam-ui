import React, { FC } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
	Card,
	CardContent,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
	Theme,
} from '@material-ui/core';
import { TableRow as ITableRow } from '../../../../store/groups/types';
import { PlainFunction } from '../../../../types/interfaces';
import UserTableRow from './UserTableRow'

const useStyles = makeStyles((theme: Theme) => ({
	root: {},
	content: {
		padding: 0
	},
	inner: {
		minWidth: 0
	},
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
									<UserTableRow user={user} onUserClicked={props.onUserClicked}/>
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
