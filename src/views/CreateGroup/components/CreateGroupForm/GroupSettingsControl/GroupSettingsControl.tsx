import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import SettingItem from './SettingItem';
import { settingValues } from '../formInitialValues';

const useStyles = makeStyles(theme => ({
	container: {
		display: 'flex',
		marginTop: theme.spacing(4),
	},
}));

interface Props {}
const GroupSettingsControl: FC<Props> = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<FormControl component='fieldset'>
				<FormLabel component='legend'>Group settings</FormLabel>
				<FormGroup>
					{settingValues.map(setting => (
						<SettingItem
							key={setting.key}
							title={setting.title}
							explanationTitle={setting.explanationTitle}
							explanation={setting.explanation}
							name={setting.key}
						/>
					))}
				</FormGroup>
			</FormControl>
		</div>
	);
};

export default GroupSettingsControl;
