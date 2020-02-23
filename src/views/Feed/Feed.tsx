import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Theme } from '@material-ui/core';
import PropTypes from 'prop-types';
import {
  UserInGroupBadge
} from './components';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { UserGroupState } from '../../store/user/types';
import { fetchGroupTable } from '../../store/groups/actions';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(4)
  },
  feedGroup: {}
}));

const mapStateToProps = (state: RootState) => {
  return {
      groups: state.user.groups
  }
}
const Feed = (props: any, context: any) => {
  const { groups, dispatch } = props;
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
      {
        groups.map((group: UserGroupState, index: number) => (
          <Grid
            item
            key={index}
            lg={3}
            sm={6}
            xl={3}
            xs={12}
            data-cy="feed-group"
          >
            <UserInGroupBadge
              displayName={group.displayName}
              groupId={group.groupId}
              position={group.position}
              totalMembers={group.totalMembers}
              onGroupClicked={() => {
                dispatch(fetchGroupTable(group.groupId))
                history.push("/table")
              }} />
          </Grid>
      ))}
      </Grid>
    </div>
  );
};

Feed.propTypes = {
  onGroupClicked: PropTypes.func
}
const FeedContainer = connect(
  mapStateToProps
)(Feed)

export default FeedContainer;
