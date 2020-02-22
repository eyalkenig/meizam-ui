import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer, Theme } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TableChartIcon from '@material-ui/icons/TableChart';
import { Profile, SidebarNav } from './components';
import { connect } from 'react-redux';
import { RootState } from '../../../../store';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const mapStateToProps = (state: RootState) => {
  return {
      user: state.user
  }
}

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

const Sidebar = (props: any) => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
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
      title: 'Go to old site',
      href: 'http://www.meizam.club',
      absolutePath: true,
      icon: <ExitToAppIcon />
    }
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        className={clsx(classes.root, className)}
      >
        <Profile userName={props.user.displayName} avatar={props.user.profilePicture} />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
        />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

const SidebarContainer = connect(
  mapStateToProps
)(Sidebar)

export default SidebarContainer;
