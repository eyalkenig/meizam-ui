import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';

import { Theme } from '@material-ui/core';
import { Header } from './components';
import CreateGroupForm from './components/CreateGroupForm';
import { CreateGroupBody } from '../../store/groups/types';
import { useDispatch } from 'react-redux';
import { createGroup } from '../../store/groups/actions';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(4),
		display: 'flex',
		flexDirection: 'column',
	},
}));

const CreateGroup: FC = () => {
	const dispatch = useDispatch();

	const submitForm = (body: CreateGroupBody) => {
		dispatch(createGroup(body));
	};
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Header />
			<CreateGroupForm submitForm={submitForm} />
		</div>
	);
};

export default CreateGroup;
