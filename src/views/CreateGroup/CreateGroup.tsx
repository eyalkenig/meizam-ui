import React, { FC, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { Theme } from '@material-ui/core';
import Header from './components/Header';
import CreateGroupForm from './components/CreateGroupForm';
// import { CreateGroupBody } from '../../store/groups/types';
// import { createGroupSelector } from '../../store/selectors/groups';
// import { createGroup, resetCreateGroupState } from '../../store/groups/actions';
import { useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import useSelector from '../../hooks/useSelector';
import { useHistory } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(4),
		display: 'flex',
		flexDirection: 'column',
	},
	errorMessage: {
		marginTop: theme.spacing(4),
		textAlign: 'center',
	},
	spinner: {
		marginTop: theme.spacing(4),
		alignSelf: 'center',
	},
}));

const CreateGroup: FC = () => {
	const dispatch = useDispatch();
	// const { submitted, submitting, hasError } = useSelector(createGroupSelector);
	const classes = useStyles();
	const history = useHistory();

	// useEffect(() => {
	// 	submitted && history.push('/Feed');
	// 	return () => {
	// 		dispatch(resetCreateGroupState());
	// 	};
	// }, [submitted, history, dispatch]);

	// const submitForm = (body: CreateGroupBody, groupAvatar: string) => {
	// 	if (groupAvatar) {
	// 		body.groupAvatar = groupAvatar;
	// 	}
	// 	dispatch(createGroup(body));
	// };

	return (
		<div className={classes.root} data-cy='create-group-container'>
			<Header />
{/* 
			{hasError ? (
				<ErrorMessage
					errorMessage='Something went wrong, please try again'
					showTryAgain={false}
				/>
			) : submitting ? (
				<CircularProgress className={classes.spinner} />
			) : (
				<CreateGroupForm submitForm={submitForm} />
			)} */}

			<CreateGroupForm submitForm={() => null} />

		</div>
	);
};

export default CreateGroup;
