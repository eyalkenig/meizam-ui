import React, { FC } from 'react';
import StagePredictionTable from '../StagePredictionTable';
import { StagePredictions } from '../../../../store/predictions/types';
import PredictionSection from '../PredictionSection';

interface Props {
  knockoutPrediction: StagePredictions
}
const KnockoutPredictionSection: FC<Props> = props => {
  const { knockoutPrediction, ...rest } = props;

  return (
    <PredictionSection header="Knockout"
                       label={`${knockoutPrediction.gainedPoints}/${knockoutPrediction.totalAvailablePoints} Points`}
                       progress={(knockoutPrediction.gainedPoints/knockoutPrediction.totalAvailablePoints)*100}>
      <StagePredictionTable stagePredictions={knockoutPrediction.prediction} tableInRowsMax="auto"/>
    </PredictionSection>
  );
};

export default KnockoutPredictionSection;
