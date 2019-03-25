import { CssBaseline, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { hot } from "react-hot-loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Navigator from "./components/Navigator";
import "./config/store";
import { drawerWidth } from "./config/theme";
import "./config/toast";

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
    flexDirection: "column"
  },
  mainContent: {
    flex: 1,
    padding: "48px 36px 0",
    background: "#eaeff1"
  }
}));

const App: React.FC = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <nav className={classes.drawer}>
        <Hidden smUp implementation="js">
          <Navigator />
        </Hidden>
        <Hidden xsDown implementation="css">
          <Navigator />
        </Hidden>
      </nav>
      {/* <div className={classes.appContent}>
          <Header onDrawerToggle={this.handleDrawerToggle} />
          <main className={classes.mainContent}>
            <Content />
          </main>
        </div> */}
      <ToastContainer />
    </div>
  );
};

export default hot(module)(App);
