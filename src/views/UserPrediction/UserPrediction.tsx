import React, { FC } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Theme, CircularProgress, Typography, Button } from '@material-ui/core';

import { UserProfile } from './components';
import { useSelector, useDispatch } from 'react-redux';
import { predictionSelector } from '../../store/selectors/prediction';
import { fetchPrediction } from '../../store/predictions/actions';
import { RouterMatch } from '../../types/interfaces';
import GroupsPredictionSection from './components/GroupsPredictionSection';
import KnockoutPredictionSection from './components/KnockoutPredictionSection';
import ErrorMessage from '../../components/ErrorMessage';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(4)
  },
  alignCenter: {
    textAlign: 'center'
  },
}));
interface Props {
  match: RouterMatch
}
const UserPredictionContainer: FC<Props> = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const predictionView = useSelector(predictionSelector);
  const predictionId = props.match.params.predictionId;
  if (predictionView.prediction.id != predictionId) {
    dispatch(fetchPrediction(predictionId));
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
        >
          {predictionView.fetching ?
          <div className={classes.alignCenter}>
            <CircularProgress/>
          </div>
          :
          predictionView.hasFetchingError ?
          <ErrorMessage errorMessage="Oops.... Something went wrong"
                        showTryAgain={true}
                        onTryAgain={() => dispatch(fetchPrediction(predictionId))}/>
          :
          <div>
            {predictionView.prediction.metadata &&
              <UserProfile metadata={predictionView.prediction.metadata} />}
            {predictionView.prediction.groupsStage &&
              <GroupsPredictionSection groupsPrediction={predictionView.prediction.groupsStage} />}
            {predictionView.prediction.knockoutStage &&
              <KnockoutPredictionSection knockoutPrediction={predictionView.prediction.knockoutStage} />}
          </div>
          }
        </Grid>
      </Grid>
    </div>
  );
};

export default UserPredictionContainer;
