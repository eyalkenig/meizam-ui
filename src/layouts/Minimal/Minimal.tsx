import React, { ReactNode, FC } from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
	root: {
		height: '100%'
	},
	content: {
		height: '100%'
	}
}));

interface Props {
	children: ReactNode;
	className: string;
}

const Minimal: FC<Props> = props => {
	const { children } = props;

	const classes = useStyles();

	return (
		<div className={classes.root}>
			<main className={classes.content}>{children}</main>
		</div>
	);
};

export default Minimal;
