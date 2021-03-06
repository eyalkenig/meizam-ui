import React, { useState, useEffect, FC } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';

import validate from 'validate.js';
import { makeStyles } from '@material-ui/styles';
import {
	Grid,
	Button,
	TextField,
	Link,
	Typography,
	Theme
} from '@material-ui/core';

const schema = {
	username: {
		presence: { allowEmpty: false, message: 'is required' }
	},
	password: {
		presence: { allowEmpty: false, message: 'is required' },
		length: {
			maximum: 128
		}
	}
};

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		backgroundColor: theme.palette.background.paper,
		height: '100%'
	},
	grid: {
		height: '100%'
	},
	quoteContainer: {
		[theme.breakpoints.down('md')]: {
			display: 'none'
		}
	},
	quote: {
		backgroundImage: 'url("/images/EURO_2020_login.jpg")',
		height: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center'
	},
	quoteInner: {
		textAlign: 'center',
		flexBasis: '600px'
	},
	smallPhoto: {
		[theme.breakpoints.up('md')]: {
			display: 'none'
		},
		backgroundImage: 'url("/images/EURO_2020_login_only_back.jpg")',
		height: '100%',
		width: '120%',
		position: 'absolute',
		backgroundSize: '100% 100%',
		backgroundRepeat: 'no-repeat'
	},
	mobileTextPhoto: {
		[theme.breakpoints.up('md')]: {
			display: 'none'
		},
		backgroundImage: 'url("/images/EURO_2020_login_only_text.png")',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		height: '84%',
		width: '100%',
		position: 'absolute'
	},
	quoteText: {
		color: theme.palette.common.white,
		fontWeight: 300
	},
	name: {
		marginTop: theme.spacing(3),
		color: theme.palette.common.white
	},
	bio: {
		color: theme.palette.common.white
	},
	contentContainer: {},
	content: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column'
	},
	contentHeader: {
		display: 'flex',
		alignItems: 'center',
		paddingTop: theme.spacing(5),
		paddingBototm: theme.spacing(2),
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2)
	},
	logoImage: {
		marginLeft: theme.spacing(4)
	},
	contentBody: {
		flexGrow: 1,
		display: 'flex',
		alignItems: 'center',
		[theme.breakpoints.down('md')]: {
			justifyContent: 'center'
		}
	},
	form: {
		paddingLeft: 100,
		paddingRight: 100,
		paddingBottom: 125,
		flexBasis: 700,
		[theme.breakpoints.down('md')]: {
			paddingTop: '260px'
		},
		[theme.breakpoints.down('sm')]: {
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(2)
		}
	},
	title: {
		marginTop: theme.spacing(3)
	},
	socialButtons: {
		marginTop: theme.spacing(3)
	},
	socialIcon: {
		marginRight: theme.spacing(1)
	},
	sugestion: {
		marginTop: theme.spacing(2)
	},
	textField: {
		marginTop: theme.spacing(2)
	},
	signInButton: {
		margin: theme.spacing(2, 0)
	},
	signUp: {
		position: 'relative'
	}
}));

const SignIn: FC = () => {
	const history = useHistory();

	const classes = useStyles();

	const [formState, setFormState] = useState({
		isValid: false,
		values: {},
		touched: {},
		errors: {}
	});

	useEffect(() => {
		const errors = validate(formState.values, schema);

		setFormState(formState => ({
			...formState,
			isValid: errors ? false : true,
			errors: errors || {}
		}));
	}, [formState.values]);

	const handleBack = () => {
		history.goBack();
	};

	const handleChange = (event: any) => {
		event.persist();

		setFormState(formState => ({
			...formState,
			values: {
				...formState.values,
				[event.target.name]:
					event.target.type === 'checkbox'
						? event.target.checked
						: event.target.value
			},
			touched: {
				...formState.touched,
				[event.target.name]: true
			}
		}));
	};

	const hasError = (field: any) =>
		(formState as any).touched[field] && (formState as any).errors[field]
			? true
			: false;

	return (
		<div className={classes.root}>
			<Grid className={classes.grid} container>
				<Grid className={classes.quoteContainer} item lg={5}>
					<div className={classes.quote}>
						<div className={classes.quoteInner}></div>
					</div>
				</Grid>
				<Grid className={classes.content} item lg={7} xs={12}>
					<div className={classes.content}>
						<div className={classes.contentBody}>
							<div className={classes.smallPhoto}></div>
							<div className={classes.mobileTextPhoto}></div>
							<form
								className={classes.form}
								action='http://www.meizam.club/Account/LoginV2'
								method='post'
							>
								<Typography className={classes.title} variant='h2'>
									Sign in
								</Typography>
								<TextField
									className={classes.textField}
									fullWidth
									id='UserName'
									label='Username'
									name='username'
									onChange={handleChange}
									type='text'
									value={(formState.values as any).username || ''}
									variant='filled'
								/>
								<TextField
									className={classes.textField}
									error={hasError('password')}
									fullWidth
									helperText={
										hasError('password')
											? (formState.errors as any).password[0]
											: null
									}
									label='Password'
									name='password'
									onChange={handleChange}
									id='Password'
									type='password'
									value={(formState.values as any).password || ''}
									variant='filled'
								/>
								<Button
									className={classes.signInButton}
									color='primary'
									disabled={!formState.isValid}
									fullWidth
									size='large'
									type='submit'
									variant='contained'
								>
									Sign in now
								</Button>
								<Typography color='textSecondary' variant='body1' className={classes.signUp}>
									Don't have an account?{' '}
									<Link component={RouterLink} to='/sign-up' variant='h6'>
										Sign up
									</Link>
								</Typography>
							</form>
						</div>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default SignIn;
