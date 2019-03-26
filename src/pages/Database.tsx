import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme => ({
  contentWrapper: {
    margin: "40px 16px"
  }
}));

const Database: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.contentWrapper}>
      <Typography color="textSecondary" align="center">
        No users for this project yet
      </Typography>
    </div>
  );
};

export default Database;
