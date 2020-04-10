import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Theme } from '@material-ui/core';
import { PlainFunction } from '../../../../../types/interfaces';
const useStyles = makeStyles((theme: Theme) => ({
	container: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: theme.spacing(4),
	},
}));

interface Props {
	isPublic: boolean;
	setPublic: PlainFunction;
}
const GroupTypeControl: FC<Props> = ({ setPublic, isPublic }) => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			{' '}
			<ButtonGroup variant='contained' color='primary'>
				<Button
					color={isPublic ? 'secondary' : 'primary'}
					onClick={() => setPublic(true)}
				>
					Public
				</Button>
				<Button
					color={!isPublic ? 'secondary' : 'primary'}
					onClick={() => setPublic(false)}
				>
					Private
				</Button>
			</ButtonGroup>
		</div>
	);
};

export default GroupTypeControl;
