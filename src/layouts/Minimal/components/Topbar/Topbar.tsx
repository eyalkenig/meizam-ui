import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {
		boxShadow: 'none'
	},
	icon: {
		width: 60
	}
}));

interface Props {
	className: string;
}
const Topbar: FC<Props> = props => {
	const { className, ...rest } = props;

	const classes = useStyles();

	return (
		<AppBar
			{...rest}
			className={clsx(classes.root, className)}
			color='primary'
			position='fixed'
		>
			<Toolbar>
				<RouterLink to='/'>
					<img
						className={classes.icon}
						alt='Logo'
						src='/images/logos/meizam-euro2020.svg'
					/>
				</RouterLink>
			</Toolbar>
		</AppBar>
	);
};

export default Topbar;
