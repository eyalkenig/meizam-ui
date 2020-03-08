import React, { useState, FC } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Badge, Hidden, IconButton, Theme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import { PlainFunction } from '../../../../types/interfaces';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    boxShadow: 'none'
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  icon: {
    width: 40
  }
}));

interface Props {
  className?: string;
  onSidebarOpen: PlainFunction;
}

const Topbar: FC<Props> = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();
  const history = useHistory();
  const [notifications] = useState([]);

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <ArrowBackIosIcon onClick={() => history.goBack()} data-cy="back-button"/>
        <div className={classes.flexGrow} />
        <RouterLink to="/">
          <img
            className={classes.icon}
            alt="Logo"
            src="/logo192.png"
          />
        </RouterLink>
        <Hidden mdDown>
          <IconButton
            className={classes.signOutButton}
            color="inherit"
          >
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
            data-cy="open-menu"
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
