import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
	Card,
	CardContent,
	Grid,
	Typography,
	Avatar,
	Theme
} from '@material-ui/core';
import MoneyIcon from '@material-ui/icons/Money';
import { PlainFunction } from '../../../../types/interfaces';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		height: '100%'
	},
	content: {
		alignItems: 'center',
		display: 'flex'
	},
	title: {
		fontWeight: 700
	},
	avatar: {
		backgroundColor: theme.palette.error.main,
		height: 56,
		width: 56
	},
	icon: {
		height: 32,
		width: 32
	},
	inline: {
		display: 'inline'
	},
	marginRight: {
		marginRight: '10px'
	}
}));

interface Props {
	groupId: number;
	displayName: string;
	position: number;
	totalMembers: number;
	onGroupClicked: PlainFunction;
}

const UserInGroupBadge: FC<Props> = props => {
	const classes = useStyles();
	const { onGroupClicked, displayName, position, totalMembers } = props;

	return (
		<Card className={classes.root}>
			<CardContent onClick={onGroupClicked}>
				<Grid container justify='space-between'>
					<Grid item>
						<Typography
							className={classes.title}
							color='textSecondary'
							gutterBottom
							variant='body2'
						>
							{displayName}
						</Typography>
						<Typography
							className={`${classes.inline} ${classes.marginRight}`}
							variant='h3'
						>
							{position}
						</Typography>
						<Typography className={classes.inline}>
							(out of {totalMembers})
						</Typography>
					</Grid>
					<Grid item>
						<Avatar className={classes.avatar}>
							<MoneyIcon className={classes.icon} />
						</Avatar>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default UserInGroupBadge;
