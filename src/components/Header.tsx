import {
  AppBar,
  Avatar,
  Button,
  Grid,
  Hidden,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Tooltip,
  Typography
} from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useGlobal } from "reactn";
import useReactRouter from "use-react-router";
const materialIcon = require("../assets/images/material-ui.png");

const lightColor = "rgba(255, 255, 255, 0.7)";

const useStyles = makeStyles(theme => ({
  secondaryBar: {
    zIndex: 0
  },
  menuButton: {
    marginLeft: -theme.spacing(1)
  },
  iconButtonAvatar: {
    padding: 4
  },
  link: {
    textDecoration: "none",
    color: lightColor,
    "&:hover": {
      color: theme.palette.common.white
    }
  },
  button: {
    borderColor: lightColor
  }
}));
const Header: React.FC = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useGlobal("mobileOpen");
  const { history, location, match } = useReactRouter();
  const [tab, setTab] = useGlobal("tab");

  return (
    <>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={4} alignItems="center">
            <Hidden smUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs />
            <Grid item>
              <Typography className={classes.link} component="a">
                Go to docs
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip title="Alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton color="inherit" className={classes.iconButtonAvatar}>
                <Avatar src={materialIcon} />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={4}>
            <Grid item xs>
              <Typography color="inherit" variant="h5">
                {location.pathname.split("/")[1]}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                className={classes.button}
                variant="outlined"
                color="inherit"
                size="small"
              >
                Web setup
              </Button>
            </Grid>
            <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Tabs
          value={tab}
          textColor="inherit"
          onChange={(event, newValue) => setTab(newValue)}
        >
          <Tab
            textColor="inherit"
            label="Users"
            onClick={() => history.push(`/Authentication/Users`)}
          />
          <Tab
            textColor="inherit"
            label="Sign-in method"
            onClick={() => history.push(`/Authentication/Sign-in`)}
          />
          <Tab
            textColor="inherit"
            label="Templates"
            onClick={() => history.push(`/Authentication/Templates`)}
          />
          <Tab
            textColor="inherit"
            label="Usage"
            onClick={() => history.push(`/Authentication/Usage`)}
          />
        </Tabs>
      </AppBar>
    </>
  );
};

export default Header;
