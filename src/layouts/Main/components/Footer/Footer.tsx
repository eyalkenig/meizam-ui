import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(4)
	}
}));

const Footer = (props: any) => {
	const { ...rest } = props;

	const classes = useStyles();

	return <div {...rest} className={clsx(classes.root)}></div>;
};

export default Footer;
