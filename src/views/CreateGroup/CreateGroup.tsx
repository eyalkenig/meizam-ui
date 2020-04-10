import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';

import { Theme } from '@material-ui/core';
import { Header } from './components';
import CreateGroupForm from './components/CreateGroupForm';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(4),
		display: 'flex',
		flexDirection: 'column',
	},
}));

const CreateGroup: FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Header />
			<CreateGroupForm />
		</div>
	);
};

export default CreateGroup;
