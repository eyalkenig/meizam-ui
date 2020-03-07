import React, { FC } from 'react';
import GroupsPrediction from '../GroupsPrediction';
import { GroupsStagePrediction } from '../../../../store/predictions/types';
import PredictionSection from '../PredictionSection';

interface Props {
  groupsPrediction: GroupsStagePrediction
}
const GroupsStats: FC<Props> = props => {
  const { groupsPrediction, ...rest } = props;

  return (
    <PredictionSection header="Groups Stage"
                       label={`${groupsPrediction.gainedPoints}/${groupsPrediction.totalAvailablePoints} Points`}
                       progress={(groupsPrediction.gainedPoints/groupsPrediction.totalAvailablePoints)*100}>
      <GroupsPrediction groups={groupsPrediction.prediction}/>
    </PredictionSection>
  );
};

export default GroupsStats;
