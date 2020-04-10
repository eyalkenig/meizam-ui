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
import { FieldInputProps } from 'formik';

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		marginTop: theme.spacing(4),
	},
	input: {
		width: '100%',
	},
}));

interface Props extends FieldInputProps<unknown> {
	touched?: boolean;
	error?: string;
}

const PasswordInput: FC<Props> = ({ error, touched, ...props }) => {
	const [showPassword, setShowPassword] = useState(false);
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<FormControl
				variant='outlined'
				error={!!(touched && error)}
				className={classes.input}
			>
				<InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
				<OutlinedInput
					id='outlined-adornment-password'
					type={showPassword ? 'text' : 'password'}
					{...props}
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
					{touched && error}
				</FormHelperText>
			</FormControl>
		</div>
	);
};

export default PasswordInput;
