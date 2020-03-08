import { makeStyles } from '@material-ui/styles';
import {
  Theme,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper,
  Avatar
} from '@material-ui/core';
import React, { FC } from 'react';
import { TeamPrediction } from '../../../../store/predictions/types';
import CorrectPredictionChip from '../CorrectPredictionChip';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: '350px'
  },
  smallFlag: {
    width: '17px',
    height: '17px',
    position: 'relative',
    top: '4px',
    display: 'inline-block',
    marginRight: '10px'
  },
  smallerPadding: {
    padding: '6px'
  }
}));
interface Props {
  prediction: TeamPrediction[];
  showPosition?: boolean;
}
const PredictionGroupStageTable: FC<Props> = props => {
  const { prediction, showPosition, ...rest } = props;
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table>
        <TableBody>
          {prediction.map((row: TeamPrediction) => (
            <TableRow key={row.teamId} data-cy="prediction-table-row" data-position={row.position}>
              {showPosition &&
              <TableCell component="th" scope="row">
                {row.position}
              </TableCell>
              }
              <TableCell className={classes.smallerPadding}>
                <Avatar variant="rounded"
                      component="span"
                      className={classes.smallFlag}
                      src={row.flagUrl} />
                <span>
                  {row.teamName}
                </span>
              </TableCell>
              <TableCell align="right">
                <CorrectPredictionChip isCorrect={row.isCorrect} points={row.awardPoints} isDecided={row.isDecided} potentialPoints={row.potentialPoints}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PredictionGroupStageTable;
