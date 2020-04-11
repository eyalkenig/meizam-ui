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
import { Formik, Form } from 'formik';
import validationSchema from './validationSchema';
import PasswordInput from './PasswordInput';
import GroupSettingsControl from './GroupSettingsControl';
import { initialValues, CreateGroupFormValues } from './formInitialValues';

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

interface Props {
	submitForm: (body: CreateGroupFormValues) => void;
}
const CreateGroupForm: FC<Props> = ({ submitForm }) => {
	const classes = useStyles();

	const handleImageSelection = (e: any) => {
		// dispatch to saga and handle transform to base64 as a sideeffect.
		console.log();
		const fr = new FileReader();
		const photo = fr.readAsDataURL(e.target.files[0]);
		console.log(photo);
	};
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values, actions) => {
				actions.setSubmitting(true);
				submitForm(values);
			}}
			validationSchema={validationSchema}
			validateOnMount
		>
			{({
				values,
				getFieldProps,
				touched,
				errors,
				isValid,
				isSubmitting,
				handleSubmit,
			}) => {
				console.log(values);
				return (
					<Fade in timeout={500}>
						<Card elevation={4} className={classes.card}>
							<Form onSubmit={handleSubmit}>
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
										<GroupTypeControl name='isPublic' />
										<Collapse in={!values.isPublic}>
											<PasswordInput label='Password' name='password' />
										</Collapse>
										<GroupSettingsControl />
										<Button
											className={classes.actionButton}
											disabled={!isValid || isSubmitting}
											type='submit'
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
										<input
											type='file'
											name='myImage'
											accept='image/x-png,image/gif,image/jpeg'
											onChange={handleImageSelection}
										/>
										<img
											className={classes.groupImage}
											alt='Logo'
											src={
												values.uploadedImage
													? values.uploadedImage
													: '/images/logos/meizam-euro2020.svg'
											}
										/>
									</Grid>
								</Grid>
							</Form>
						</Card>
					</Fade>
				);
			}}
		</Formik>
	);
};

export default CreateGroupForm;
