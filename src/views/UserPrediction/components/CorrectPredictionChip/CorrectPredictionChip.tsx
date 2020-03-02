import { makeStyles } from '@material-ui/styles';
import {
  Theme, Chip
} from '@material-ui/core';
import { FC } from 'react';
import React from 'react';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';

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
  }
}));
interface Props {
  isCorrect: boolean;
  points: number;
}
const CorrectPredictionChip: FC<Props> = props => {
  const { isCorrect, points, ...rest } = props;
  const classes = useStyles();
  function SmallerIcon() {
    return (
      <DoneIcon />
    );
  }
  const getPointText = (points: number) => {
    if (points == 1) {
      return '+1 Point'
    } else if (points == -1) {
      return '-1 Point'
    } else if (points > 1) {
      return `+${points} Points`
    } else if (points < 0) {
      return `-${points} Points`
    }
    return `0 Points`
  }
  return (
    <div className={classes.root}>
    {isCorrect && points > 0 &&
      <Chip color="primary" size="small" icon={<DoneIcon fontSize="small" classes={{fontSizeSmall: classes.iconSmall}} />} label={getPointText(points)} classes={{
        labelSmall: classes.labelSmall,
        colorPrimary: classes.correctColor
      }} />
    }
    {!isCorrect && points <= 0 &&
      <Chip color="primary" size="small" icon={<CloseIcon fontSize="small" classes={{fontSizeSmall: classes.iconSmall}} />} label={getPointText(points)} classes={{
        labelSmall: classes.labelSmall,
        colorPrimary: classes.incorrectColor
      }} />
    }
    </div>
  );
};

export default CorrectPredictionChip;
