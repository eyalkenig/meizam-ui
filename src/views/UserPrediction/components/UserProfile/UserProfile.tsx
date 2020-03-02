import { makeStyles } from '@material-ui/styles';
import {
  Avatar,
  Typography,
  Theme,
  CardContent,
  Card,
  CircularProgress
} from '@material-ui/core';
import React, { FC } from 'react';
import clsx from 'clsx';
import { Prediction, PredictionMetadata } from '../../../../store/predictions/types';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  details: {
    display: 'flex'
  },
  avatar: {
    marginLeft: 'auto',
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0
  },
  avatarRoot: {
    display: 'inline',
    marginRight: '5px'
  },
  small: {
    width: '17px',
    height: '17px',
    position: 'relative',
    top: '3px',
    display: 'inline-block',
    marginRight: '6px'
  },
  winningTeam: {
    marginRight: '6px'
  },
}));
interface Props {
	className?: string;
  metadata: PredictionMetadata;
}
interface User {
  name: string
  avatar: string
  points: string
  position: string
  totalMembers: string
  winningTeam: string
  winningTeamLogoUrl: string
}
const UserProfile: FC<Props> = props => {
  const { className, metadata, ...rest } = props;
  const classes = useStyles();

  const user = {
    name: metadata.displayName,
    avatar: metadata.profilePicture,
    points: metadata.points,
    position: metadata.position,
    totalMembers: metadata.totalGroupMembers,
    winningTeam: metadata.winningTeam,
    winningTeamLogoUrl: metadata.winningTeamLogoUrl
  }

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
      data-cy="user-prediction-card"
    >
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography
              gutterBottom
              variant="h2"
            >
              {user.name}
            </Typography>
            <Typography
              color="textSecondary"
              variant="body1"
            >
              Points: {user.points}
            </Typography>
            <Typography
              variant="body1"
            >
              Position: {user.position} / {user.totalMembers}
            </Typography>
            <div>
              <Typography
              display='inline'
              className={classes.winningTeam}
                variant="body1"
              >
                Winning Team:
              </Typography>
              {user.winningTeamLogoUrl ?
                <Avatar variant="circle" 
                        component="span"
                        className={classes.small}
                        src={user.winningTeamLogoUrl}
                        data-cy="user-prediction-card-winning-flag"
                /> : null
              }
              
              <Typography display='inline'
              >
                {user.winningTeam}
              </Typography>
            </div>
          </div>
          <Avatar
            data-cy="user-prediction-card-user-avatar"
            className={classes.avatar}
            src={user.avatar}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
