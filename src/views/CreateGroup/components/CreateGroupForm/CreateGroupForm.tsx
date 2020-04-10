import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { Theme, Grid } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Card from '@material-ui/core/Card';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import GroupTypeControl from './GroupTypeControl';
import { Formik } from 'formik';
import validationSchema from './validationSchema';
import PasswordInput from './PasswordInput';
import GroupSettingsControl from './GroupSettingsControl';
import { initialValues } from './formInitialValues';

const useStyles = makeStyles((theme: Theme) => ({
	card: {
		padding: theme.spacing(1),
		marginTop: theme.spacing(4),
		display: 'flex',
		flexDirection: 'column',
	},
	inputsContainer: {
		display: 'flex',
		flexDirection: 'column',
		padding: theme.spacing(4),
	},
	actionButton: {
		marginTop: theme.spacing(4),
		width: '35%',
		[theme.breakpoints.down('lg')]: {
			width: '100%',
		},
		alignSelf: 'center',
	},
	groupImageContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	groupImage: {
		width: '350px',
		height: '350px',
	},
}));

const CreateGroupForm: FC = () => {
	const classes = useStyles();
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values, actions) => {
				actions.setSubmitting(true);
			}}
			validationSchema={validationSchema}
		>
			{({ values, getFieldProps, touched, errors, setFieldValue }) => {
				return (
					<Fade in={true} timeout={500}>
						<Card elevation={4} className={classes.card}>
							<Grid container>
								<Grid
									className={classes.inputsContainer}
									item
									xs={12}
									sm={12}
									md={5}
								>
									<TextField
										error={!!(touched.groupName && errors.groupName)}
										label='Group Name'
										helperText={
											(touched.groupName && errors.groupName) ||
											'Group name is public'
										}
										variant='outlined'
										{...getFieldProps('groupName')}
									/>
									<GroupTypeControl
										isPublic={values.isPublic}
										setPublic={(value: boolean) =>
											setFieldValue('isPublic', value)
										}
									/>
									<Collapse in={!values.isPublic}>
										<PasswordInput
											error={errors.password}
											touched={touched.password}
											{...getFieldProps('password')}
										/>
									</Collapse>

									<GroupSettingsControl
										values={values}
										setFieldValue={setFieldValue}
									/>
									<Button
										className={classes.actionButton}
										variant='contained'
										color='primary'
										endIcon={<GroupRoundedIcon />}
									>
										Create Group
									</Button>
								</Grid>
								<Grid
									className={classes.groupImageContainer}
									item
									xs={12}
									sm={12}
									md={7}
								>
									Choose group image TBD
									<img
										className={classes.groupImage}
										alt='Logo'
										src='/images/logos/meizam-euro2020.svg'
									/>
								</Grid>
							</Grid>
						</Card>
					</Fade>
				);
			}}
		</Formik>
	);
};

export default CreateGroupForm;
