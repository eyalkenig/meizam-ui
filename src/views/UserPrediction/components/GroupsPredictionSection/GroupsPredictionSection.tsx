import React, { FC } from 'react';
import StagePredictionTable from '../StagePredictionTable';
import { StagePredictions } from '../../../../store/predictions/types';
import PredictionSection from '../PredictionSection';

interface Props {
  groupsPrediction: StagePredictions
}
const GroupsPredictionSection: FC<Props> = props => {
  const { groupsPrediction, ...rest } = props;

  return (
    <PredictionSection header="Groups Stage"
                       label={`${groupsPrediction.gainedPoints}/${groupsPrediction.totalAvailablePoints} Points`}
                       progress={(groupsPrediction.gainedPoints/groupsPrediction.totalAvailablePoints)*100}>
      <StagePredictionTable stagePredictions={groupsPrediction.prediction} showPosition={true} />
    </PredictionSection>
  );
};

export default GroupsPredictionSection;
