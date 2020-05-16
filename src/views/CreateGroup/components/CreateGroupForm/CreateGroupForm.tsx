import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { Theme, Grid, Typography } from '@material-ui/core';
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
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	groupImage: {
		height: 200,
		width: 200,
		borderRadius: '50%',
		objectFit: 'cover',
	},
	uploadImage: {
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(4),

		background: theme.palette.primary.main,
		padding: theme.spacing(1),
		color: 'white',
		borderRadius: 4,
		cursor: 'pointer',
	},
}));

interface Props {
	submitForm: (body: CreateGroupFormValues, groupAvatar: string) => void;
}
const CreateGroupForm: FC<Props> = ({ submitForm }) => {
	const classes = useStyles();
	const [groupImage, setGroupImage] = useState('');

	const handleImageSelection = async (e: any) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				const b64 = reader.result;
				if (typeof b64 === 'string') {
					setGroupImage(b64);
				}
			};
			reader.readAsDataURL(file);
		}
	};
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values, actions) => {
				actions.setSubmitting(true);
				submitForm(values, groupImage);
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
										md={6}
									>
										<TextField
											error={!!(touched.groupName && errors.groupName)}
											label='Group Name'
											data-cy='group-name-input'
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
											data-cy='create-group-button'
										>
											Create Group
										</Button>
									</Grid>
									<Grid
										className={classes.groupImageContainer}
										item
										xs={12}
										sm={12}
										md={6}
									>
										<Typography variant='h2' style={{ textAlign: 'center' }}>
											Add your group avatar
										</Typography>
										<input
											id='files'
											style={{ display: 'none' }}
											type='file'
											accept='image/x-png,image/gif,image/jpeg'
											onChange={handleImageSelection}
										/>
										<label htmlFor='files'>
											<Typography className={classes.uploadImage}>
												Upload
											</Typography>
										</label>
										<img
											className={classes.groupImage}
											alt='Logo'
											src={
												groupImage ? groupImage : '/images/logos/group-logo.png'
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
