import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import One from "./Database/One";
import Two from "./Database/Two";

const tabs = ["One", "Two"];

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
  searchBar: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
  },
  searchInput: {
    fontSize: theme.typography.fontSize
  },
  block: {
    display: "block"
  },
  addUser: {
    marginRight: theme.spacing(1)
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
          <Switch>
            <Route path="/Database/One" component={One} />
            <Route path="/Database/Two" component={Two} />
            <Redirect to="/Database/One" />
          </Switch>
        </Paper>
      </main>
    </div>
  );
};

export default Database;
