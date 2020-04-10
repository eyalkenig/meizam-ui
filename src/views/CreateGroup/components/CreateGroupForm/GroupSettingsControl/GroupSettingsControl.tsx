import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import SettingItem from './SettingItem';
import { CreateGroupFormValues, settingValues } from '../formInitialValues';

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		marginTop: theme.spacing(4),
	},
}));

interface Props {
	values: CreateGroupFormValues;
	setFieldValue(field: string, value: any, shouldValidate?: boolean): void;
}
const GroupSettingsControl: FC<Props> = ({ values, setFieldValue }) => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<FormControl component='fieldset'>
				<FormLabel component='legend'>Group settings</FormLabel>
				<FormGroup>
					{settingValues.map(setting => (
						<SettingItem
							title={setting.title}
							explanationTitle={setting.explanationTitle}
							explanation={setting.explanation}
							value={values[setting.key]}
							setValue={(newVal: boolean) => {
								setFieldValue(setting.key, newVal);
							}}
						/>
					))}
				</FormGroup>
			</FormControl>
		</div>
	);
};

export default GroupSettingsControl;
