import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Theme } from '@material-ui/core';
import { useField } from 'formik';
const useStyles = makeStyles((theme: Theme) => ({
	container: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: theme.spacing(4),
	},
}));

interface Props {
	name: string;
}
const GroupTypeControl: FC<Props> = props => {
	const [field, meta, helpers] = useField(props);
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<ButtonGroup variant='contained' color='primary'>
				<Button
					color={field.value ? 'secondary' : 'primary'}
					onClick={() => helpers.setValue(true)}
				>
					Public
				</Button>
				<Button
					color={!field.value ? 'secondary' : 'primary'}
					onClick={() => helpers.setValue(false)}
				>
					Private
				</Button>
			</ButtonGroup>
		</div>
	);
};

export default GroupTypeControl;
