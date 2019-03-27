import { makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import Header from "../components/Header";

const tabs = ["Five", "Six", "Seven"];

const useStyles = makeStyles(theme => ({
  appContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  },
  mainContent: {
    flex: 1,
    padding: "48px 36px 0",
    background: "#eaeff1"
  },
  paper: {
    maxWidth: 936,
    margin: "auto",
    overflow: "hidden"
  },
  contentWrapper: {
    margin: "40px 16px"
  }
}));

const Database: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.appContent}>
      <Header page="Database" tabs={tabs} />
      <main className={classes.mainContent}>
        <Paper className={classes.paper}>
          <div className={classes.contentWrapper}>
            <Typography color="textSecondary" align="center">
              No users for this project yet
            </Typography>
          </div>
        </Paper>
      </main>
    </div>
  );
};

export default Database;
