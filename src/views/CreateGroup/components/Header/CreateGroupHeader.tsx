import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Theme, Grid } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme: Theme) => ({
	root: {},
	card: {
		padding: theme.spacing(4),
	},
	cardContent: {
		justifyContent: 'space-between',
	},
	text: {
		marginTop: 10,
	},
}));

const Header: FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Fade in={true} timeout={250}>
				<Card elevation={4} className={classes.card}>
					<Grid container className={classes.cardContent}>
						<Grid item sm={12}>
							<Typography variant='h3' data-cy='create-group-header'>
								Create Group
							</Typography>
							<Typography className={classes.text} color='textSecondary'>
								Think you can beat your friends? build your own group and invite
								them to bet the matches.
							</Typography>
						</Grid>
					</Grid>
				</Card>
			</Fade>
		</div>
	);
};

export default Header;
