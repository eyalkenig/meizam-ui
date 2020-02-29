import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Theme, CircularProgress } from '@material-ui/core';

import { UserProfile } from './components';
import { useSelector, useDispatch } from 'react-redux';
import { predictionSelector } from '../../store/selectors/prediction';
import { fetchPrediction } from '../../store/predictions/actions';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(4)
  },
  alignCenter: {
    textAlign: 'center'
  }
}));
interface RouterMatch {
  params: any
}
interface Props {
  match: RouterMatch
}
const UserPredictionContainer: FC<Props> = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const predictionView = useSelector(predictionSelector);
  if (!predictionView.fetching && predictionView.prediction.id == 0) {
    const predictionId = props.match.params.predictionId;
    if (predictionId) {
      dispatch(fetchPrediction(predictionId))
    }
  }
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={4}
          md={6}
          xl={4}
          xs={12}
        >
          {predictionView.fetching ?
          <div className={classes.alignCenter}>
            <CircularProgress/>
          </div>
          :
          <UserProfile prediction={predictionView.prediction} />
          }
        </Grid>
        <Grid
          item
          lg={8}
          md={6}
          xl={8}
          xs={12}
        >
        </Grid>
      </Grid>
    </div>
  );
};

export default UserPredictionContainer;
