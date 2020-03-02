import { makeStyles } from '@material-ui/styles';
import {
  Theme,
  Typography,
  AppBar,
  Tabs,
  Tab,
  Box
} from '@material-ui/core';
import React, { FC } from 'react';
import PredictionGroupStageTable from '../PredictionGroupStageTable/PredictionGroupStageTable';
import { GroupPrediction } from '../../../../store/predictions/types';
import SwipeableViews from 'react-swipeable-views';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    display: 'grid'
  }
}));
interface Props {
  groups: GroupPrediction[]
}
const GroupsPrediction: FC<Props> = props => {
  const { groups, ...rest } = props;
  const classes = useStyles();

  interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }
  const [value, setValue] = React.useState(0);
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={1}>{children}</Box>}
      </Typography>
    );
  }
  function a11yProps(index: any) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
  return (
    <div>
      <AppBar position="static" color="default" elevation={0}>
        <Tabs
            value={value}
            onChange={handleChange}
            className={classes.tabsRoot}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {groups.map((group: GroupPrediction, index: number) => (
              <Tab label={group.stageName} {...a11yProps(index)} />
            ))}
        </Tabs>
      </AppBar>
      <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
      >
      {groups.map((group: GroupPrediction, index: number) => (
        <TabPanel value={value} index={index}>
          <PredictionGroupStageTable prediction={group.prediction} />
        </TabPanel>
      ))}
    </SwipeableViews>
  </div>
  );

};

export default GroupsPrediction;
