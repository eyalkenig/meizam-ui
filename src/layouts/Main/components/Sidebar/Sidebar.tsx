import React, { FC } from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer, Theme } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TableChartIcon from '@material-ui/icons/TableChart';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { Profile, SidebarNav } from './components';
import useSelector from '../../../../hooks/useSelector';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { userSelector } from '../../../../store/selectors/user';
import { PlainFunction, Page } from '../../../../types/interfaces';

const useStyles = makeStyles((theme: Theme) => ({
	drawer: {
		width: 240,
		[theme.breakpoints.up('lg')]: {
			marginTop: 64,
			height: 'calc(100% - 64px)'
		}
	},
	root: {
		backgroundColor: theme.palette.common.white,
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		padding: theme.spacing(2)
	},
	divider: {
		margin: theme.spacing(2, 0)
	},
	nav: {
		marginBottom: theme.spacing(2)
	}
}));

interface Props {
	onClose: PlainFunction;
	open: boolean;
	variant: 'permanent' | 'persistent' | 'temporary';
}

const Sidebar: FC<Props> = props => {
	const { open, variant, onClose } = props;

	const { displayName, profilePicture } = useSelector(userSelector);

	const classes = useStyles();

	const pages: Array<Page> = [
		{
			title: 'Feed',
			href: '/feed',
			icon: <DashboardIcon />
		},
		{
			title: 'Group Table',
			href: '/table',
			icon: <TableChartIcon />
		},
		{
			title: 'Create Group',
			href: '/group/create',
			icon: <AddBoxIcon />
		},
		{
			title: 'Go to old site',
			href: 'http://www.meizam.club',
			absolutePath: true,
			icon: <ExitToAppIcon />
		}
	];

	return (
		<Drawer
			anchor='left'
			classes={{ paper: classes.drawer }}
			onClose={onClose}
			open={open}
			variant={variant}
		>
			<div className={clsx(classes.root)}>
				<Profile userName={displayName} avatar={profilePicture} />
				<Divider className={classes.divider} />
				<SidebarNav className={classes.nav} pages={pages} />
			</div>
		</Drawer>
	);
};

const SidebarContainer = Sidebar;

export default SidebarContainer;
