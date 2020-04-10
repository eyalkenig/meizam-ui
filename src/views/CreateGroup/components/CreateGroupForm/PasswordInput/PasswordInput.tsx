import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useField } from 'formik';

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		marginTop: theme.spacing(4),
	},
	input: {
		width: '100%',
	},
}));

interface Props {
	label: string;
	name: string;
}

const PasswordInput: FC<Props> = ({ label, ...props }) => {
	const [showPassword, setShowPassword] = useState(false);
	const [field, meta] = useField(props);
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<FormControl
				variant='outlined'
				error={!!(meta.touched && meta.error)}
				className={classes.input}
			>
				<InputLabel htmlFor='outlined-adornment-password'>{label}</InputLabel>
				<OutlinedInput
					id='outlined-adornment-password'
					{...props}
					{...field}
					type={showPassword ? 'text' : 'password'}
					endAdornment={
						<InputAdornment position='end'>
							<IconButton
								onClick={() => setShowPassword(prev => !prev)}
								onMouseDown={() => {}}
								edge='end'
							>
								{showPassword ? <Visibility /> : <VisibilityOff />}
							</IconButton>
						</InputAdornment>
					}
					labelWidth={70}
				/>
				<FormHelperText id='outlined-weight-helper-text'>
					{meta.touched && meta.error}
				</FormHelperText>
			</FormControl>
		</div>
	);
};

export default PasswordInput;
