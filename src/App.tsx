import { Hidden } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { hot } from "react-hot-loader";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useGlobal } from "reactn";
import Drawer from "./components/Drawer";
import MiniDrawer from "./components/MiniDrawer";
import "./config/store";
import "./config/toast";
import Authentication from "./pages/Authentication";
import Database from "./pages/Database";
import Storage from "./pages/Storage";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    minHeight: "100vh"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      flexShrink: 0
    }
  },
  appContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  }
}));

const App: React.FC = props => {
  const classes = useStyles();
  const [miniDrawer, setMiniDrawer] = useGlobal("miniDrawer");
  const sm = useMediaQuery("(max-width:600px)");

  return (
    <div className={classes.root}>
      <HashRouter>
        <nav
          className={classes.drawer}
          style={{ width: sm ? "0px" : miniDrawer ? "66px" : "256px" }}
        >
          <Hidden smUp implementation="js">
            {miniDrawer ? <MiniDrawer /> : <Drawer />}
          </Hidden>
          <Hidden xsDown implementation="css">
            {miniDrawer ? <MiniDrawer /> : <Drawer />}
          </Hidden>
        </nav>
        <div className={classes.appContent}>
          <Switch>
            <Route path="/Authentication" component={Authentication} />
            <Route path="/Database" component={Database} />
            <Route path="/Storage" component={Storage} />
            <Redirect to="/Authentication" />
          </Switch>
          <ToastContainer />
        </div>
      </HashRouter>
    </div>
  );
};

export default hot(module)(App);
