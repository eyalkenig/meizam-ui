import { makeStyles } from '@material-ui/styles';
import {
  Theme,
  Typography,
  AppBar,
  Tabs,
  Tab,
  Box,
  Hidden,
  Grid,
  GridSize
} from '@material-ui/core';
import React, { FC } from 'react';
import PredictionGroupStageTable from '../PredictionGroupStageTable/PredictionGroupStageTable';
import { StagePrediction } from '../../../../store/predictions/types';
import SwipeableViews from 'react-swipeable-views';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  tabsRoot: {
    display: 'grid'
  },
  grid: {
    padding: '16px'
  },
  stageName: {
    textAlign: 'center',
    marginBottom: theme.spacing(1)
  }
}));
interface Props {
  stagePredictions: StagePrediction[]
  showPosition?: boolean
  tableInRowsMax?: GridSize
}
const StagePredictionTable: FC<Props> = props => {
  const { stagePredictions, showPosition, tableInRowsMax,...rest } = props;
  const gridRowsMax = tableInRowsMax ? tableInRowsMax : 4;
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
      <Hidden mdUp>
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
              {stagePredictions.map((group: StagePrediction, index: number) => (
                <Tab label={group.stageName} {...a11yProps(index)} />
              ))}
          </Tabs>
        </AppBar>
        <SwipeableViews
          index={value}
          onChangeIndex={handleChangeIndex}
        >
        {stagePredictions.map((stage: StagePrediction, index: number) => (
          <TabPanel value={value} index={index}>
            <div data-cy={`stage ${stage.stageName}`}>
              <PredictionGroupStageTable prediction={stage.prediction} showPosition={showPosition}/>
            </div>
          </TabPanel>
        ))}
      </SwipeableViews>
    </Hidden>
    <Hidden smDown>
    <Grid container spacing={1} className={classes.grid}>
      {stagePredictions.map((stage: StagePrediction, index: number) => (
					<Grid
						item
						key={index}
						lg={gridRowsMax}
						md={gridRowsMax}
						xl={gridRowsMax}
            xs={12}
					>
            <div data-cy={`stage ${stage.stageName}`}>
              <Typography variant="h6" className={classes.stageName}>{stage.stageName}</Typography>
              <PredictionGroupStageTable prediction={stage.prediction} showPosition={showPosition}/>
            </div>
					</Grid>
        ))}
			</Grid>
    </Hidden>
  </div>
  );

};

export default StagePredictionTable;
