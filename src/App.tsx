import { Hidden, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { hot } from "react-hot-loader";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Header from "./components/Header";
import Navigator from "./components/Navigator";
import "./config/store";
import { drawerWidth } from "./config/theme";
import "./config/toast";
import Authentication from "./pages/Authentication";
import Database from "./pages/Database";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    minHeight: "100vh"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
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
  }
}));

const App: React.FC = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HashRouter>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="js">
            <Navigator />
          </Hidden>
          <Hidden xsDown implementation="css">
            <Navigator />
          </Hidden>
        </nav>
        <div className={classes.appContent}>
          <Header />
          <main className={classes.mainContent}>
            <Paper className={classes.paper}>
              <Switch>
                <Route path="/Authentication" component={Authentication} />
                <Route path="/Database" component={Database} />
                <Redirect to="/Authentication" />
              </Switch>
            </Paper>
          </main>
        </div>
        <ToastContainer />
      </HashRouter>
    </div>
  );
};

export default hot(module)(App);
