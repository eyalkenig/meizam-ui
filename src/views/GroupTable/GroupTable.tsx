import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { UsersToolbar, UsersTable } from './components';
import { Theme, Typography } from '@material-ui/core';
import { RootState } from '../../store';
import { connect } from 'react-redux';
import { fetchGroupTable } from '../../store/groups/actions';
import { UserGroupState } from '../../store/user/types';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  center: {
    textAlign: 'center'
  }
}));

const mapStateToProps = (state: RootState) => {
  return {
    userGroups: state.user.groups,
    tableView: state.groups.tableView
  }
}

const GroupTable = (props: any) => {
  const classes = useStyles();
  const { tableView, dispatch, userGroups } = props;
  if (tableView.selectedGroupId == 0) {
    if (userGroups.length > 0) {
      dispatch(fetchGroupTable(userGroups[0].groupId))
    }
  }
  const currentGroup = userGroups.find((x: UserGroupState) => x.groupId == tableView.selectedGroupId)
  return (
    <div className={classes.root}>
      <Typography className={classes.center} variant="h2">{currentGroup ? currentGroup.displayName : null}</Typography>
      <UsersToolbar />
      <div className={classes.content}>
        <UsersTable users={tableView.table} />
      </div>
    </div>
  );
};

const GroupTableContainer = connect(
  mapStateToProps
)(GroupTable)

export default GroupTableContainer;
