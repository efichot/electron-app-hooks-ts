import {
  CssBaseline,
  Hidden,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core";
import React from "react";
import { hot } from "react-hot-loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useGlobal } from "reactn";
import Navigator from "./components/Navigator";
import "./config/store";
import { drawerWidth, theme } from "./config/theme";
import "./config/toast";

const styles = theme => ({
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
});

const App = props => {
  const { classes } = props;
  const [mobileOpen, setMobileOpen] = useGlobal("mobileOpen");

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer}>
          <Hidden smUp implementation="js">
            <Navigator
              variant="temporary"
              open={mobileOpen}
              onClose={() => setMobileOpen(!mobileOpen)}
            />
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
      </div>
      <ToastContainer />
    </MuiThemeProvider>
  );
};

// @ts-ignore
export default hot(module)(withStyles(styles)(App));
