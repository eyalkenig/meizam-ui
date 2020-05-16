import React, { FC, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Theme, Card } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { Typography } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import { useField } from 'formik';

const useStyles = makeStyles((theme: Theme) => ({
	container: {},
	lineContainer: {
		display: 'flex',
		alignItems: 'center',
	},
	textBold: {
		fontWeight: 900,
	},
	explanationCard: {
		backgroundColor: theme.palette.primary.light,
		padding: theme.spacing(2),
	},
}));

interface Props {
	name: string;
	title: string;
	explanationTitle: string;
	explanation: string;
}
const SettingItem: FC<Props> = ({
	title,
	explanationTitle,
	explanation,
	...props
}) => {
	const [expanded, setExpanded] = useState(false);
	const [field, meta, helpers] = useField(props);
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className={classes.lineContainer}>
				<Checkbox
					checked={field.value}
					onChange={() => {
						helpers.setValue(!field.value);
						setExpanded(false);
					}}
				/>
				<Typography>{title}</Typography>
				<IconButton onClick={() => setExpanded(prev => !prev)} edge='end'>
					{expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
				</IconButton>
			</div>
			<Collapse in={expanded}>
				<Card className={classes.explanationCard}>
					<Typography className={classes.textBold}>
						{explanationTitle}
					</Typography>
					<Typography>{explanation}</Typography>
				</Card>
			</Collapse>
		</div>
	);
};

export default SettingItem;
