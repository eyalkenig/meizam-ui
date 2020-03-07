import { makeStyles } from '@material-ui/styles';
import {
  Theme, Chip, Tooltip
} from '@material-ui/core';
import { FC } from 'react';
import React from 'react';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  labelSmall: {
    fontSize: '9px'
  },
  iconSmall: {
    width: '12px',
    height: '12px'
  },
  incorrectColor: {
    background: '#f78888'
  },
  correctColor: {
    background: '#9ee6a0'
  },
  potentialPoints: {
    background: theme.palette.grey[400]
  }
}));
interface Props {
  isCorrect: boolean;
  isDecided: boolean;
  points: number;
  potentialPoints: number;
}
const CorrectPredictionChip: FC<Props> = props => {
  const { isCorrect, points, isDecided, potentialPoints, ...rest } = props;
  const classes = useStyles();
  function SmallerIcon() {
    return (
      <DoneIcon />
    );
  }
  const getPointText = (points: number, addSign: boolean) => {
    if (points == 0) {
      return '0 Points';
    }
    let pointsText = '';
    if (points == 1 || points == -1) {
      pointsText = '1 Point';
    } else {
      pointsText = `${points} Points`;
    }
    if (addSign) {
      if (points > 0) {
        pointsText = `+${pointsText}`;
      } else {
        pointsText = `-${pointsText}`;
      }
    }
    return pointsText;
  }
  return (
    <div className={classes.root}>
    {!isDecided &&
    <Tooltip title="Potential" placement="left">
      <Chip color="primary" size="small" icon={<HourglassEmptyIcon fontSize="small" classes={{fontSizeSmall: classes.iconSmall}} />} label={getPointText(potentialPoints, false)} classes={{
        labelSmall: classes.labelSmall,
        colorPrimary: classes.potentialPoints
      }} />
    </Tooltip>
    }
    {isCorrect && isDecided && points > 0 &&
      <Chip color="primary" size="small" icon={<DoneIcon fontSize="small" classes={{fontSizeSmall: classes.iconSmall}} />} label={getPointText(points, true)} classes={{
        labelSmall: classes.labelSmall,
        colorPrimary: classes.correctColor
      }} />
    }
    {!isCorrect && isDecided && points <= 0 &&
      <Chip color="primary" size="small" icon={<CloseIcon fontSize="small" classes={{fontSizeSmall: classes.iconSmall}} />} label={getPointText(points, true)} classes={{
        labelSmall: classes.labelSmall,
        colorPrimary: classes.incorrectColor
      }} />
    }
    </div>
  );
};

export default CorrectPredictionChip;
