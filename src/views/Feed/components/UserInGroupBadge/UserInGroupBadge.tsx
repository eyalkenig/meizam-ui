import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar, Theme } from '@material-ui/core';
import MoneyIcon from '@material-ui/icons/Money';
import { UserGroupBadge } from '../../types';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.error.main,
    height: 56,
    width: 56
  },
  icon: {
    height: 32,
    width: 32
  },
  inline: {
    display: 'inline'
  },
  marginRight: {
    marginRight: '10px'
  }
}));

const UserInGroupBadge = (props: UserGroupBadge) => {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              {props.displayName}
            </Typography>
            <Typography className={`${classes.inline} ${classes.marginRight}`} variant="h3">{props.position}</Typography>
            <Typography className={classes.inline}>(out of {props.totalMembers})</Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <MoneyIcon className={classes.icon} />
            </Avatar>
          </Grid>
          </Grid>
      </CardContent>
    </Card>
  );
};

UserInGroupBadge.propTypes = {
  groupId: PropTypes.number.isRequired,
  displayName: PropTypes.string.isRequired,
  position: PropTypes.number,
  totalMembers: PropTypes.number,
  onGroupClicked: PropTypes.func
}

export default UserInGroupBadge;
