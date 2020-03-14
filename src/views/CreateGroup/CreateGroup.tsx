import React, { FC } from "react";
import { makeStyles } from "@material-ui/styles";
import { Grid, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(5)
  }
}));

const CreateGroup: FC = () => {
  const classes = useStyles();
  return <div className={classes.root}>Create group</div>;
};

export default CreateGroup;
