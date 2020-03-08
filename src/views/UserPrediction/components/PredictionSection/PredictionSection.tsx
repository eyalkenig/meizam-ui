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

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  groupsLabel: {
    flexGrow: 1
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
  header: string
  label: string
  progress: number
}
const PredictionSection: FC<Props> = props => {
  const { header, label, progress, children, ...rest } = props;
  const classes = useStyles();

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography className={classes.groupsLabel}>
        {header}
        </Typography>
        <Chip label={label}
              variant="outlined"
              size="small"
              className={classes.chip}/>
      </ExpansionPanelSummary>
      <LinearProgress value={progress} variant="determinate" classes={{
        barColorPrimary: classes.correctColor,
        colorPrimary: classes.incorrectColor
      }}/>
      <ExpansionPanelDetails className={classes.noPadding}>
        {children}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default PredictionSection;
