import { makeStyles } from '@material-ui/styles';
import {
  Typography,
  Theme,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  LinearProgress,
  Chip
} from '@material-ui/core';
import React, { FC } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GroupsPrediction from '../GroupsPrediction';
import { GroupsStagePrediction } from '../../../../store/predictions/types';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  groupsLabel: {
    marginRight: '35px'
  },
  noPadding: {
    padding: '1px 0px 3px'
  },
  chip: {
    top: '-4px'
  },
  incorrectColor: {
    background: '#f78888'
  },
  correctColor: {
    background: '#9ee6a0'
  }
}));
interface Props {
  groupsPrediction: GroupsStagePrediction
}
const GroupsStats: FC<Props> = props => {
  const { groupsPrediction, ...rest } = props;
  const classes = useStyles();

  return (groupsPrediction &&
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography className={classes.groupsLabel}>
        Groups Stage 
        </Typography>
        <Chip label={`${groupsPrediction.gainedPoints}/${groupsPrediction.totalAvailablePoints} Points`}
              variant="outlined"
              size="small"
              className={classes.chip}/>
      </ExpansionPanelSummary>
      <LinearProgress value={(groupsPrediction.gainedPoints/groupsPrediction.totalAvailablePoints)*100} variant="determinate" classes={{
        barColorPrimary: classes.correctColor,
        colorPrimary: classes.incorrectColor
      }}/>
      <ExpansionPanelDetails className={classes.noPadding}>
        <GroupsPrediction groups={groupsPrediction.prediction}/>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default GroupsStats;
