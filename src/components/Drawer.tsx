import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import { makeStyles } from "@material-ui/styles";
import classNames from "classnames";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobal } from "reactn";
import useReactRouter from "use-react-router";
import { categories, logo, settings } from "../config/drawer";

const useStyles = makeStyles(theme => ({
  paper: {
    width: "256px",
    overflow: "hidden"
  },
  categoryHeader: {
    paddingTop: 16,
    paddingBottom: 16
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white
  },
  item: {
    paddingTop: 4,
    paddingBottom: 4,
    color: "rgba(255, 255, 255, 0.7)"
  },
  itemCategory: {
    backgroundColor: "#232f3e",
    boxShadow: "0 -1px 0 #404854 inset",
    paddingTop: 16,
    paddingBottom: 16
  },
  firebase: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.common.white,
    padding: "20px"
  },
  itemActionable: {
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.08)"
    }
  },
  itemActiveItem: {
    color: "#4fc3f7"
  },
  itemPrimary: {
    color: "inherit",
    fontSize: theme.typography.fontSize,
    "&$textDense": {
      fontSize: theme.typography.fontSize
    }
  },
  textDense: {},
  divider: {
    marginTop: theme.spacing(2)
  },
  link: {
    textDecoration: "none"
  },
  logo: {
    width: "40px",
    marginRight: "5px"
  },
  dividerSettings: {
    transform: "rotate(90deg)",
    width: "35px",
    position: "absolute",
    right: "30px",
    top: "25px"
  },
  settings: {
    position: "absolute",
    top: "7px",
    right: "2px"
  },
  switch: {
    position: "fixed",
    bottom: "0px",
    cursor: "pointer",
    width: "256px"
  },
  chevron: {
    fontSize: "30px",
    marginLeft: "190px"
  }
}));

const Navigator: React.FC = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useGlobal("mobileOpen");
  const [miniDrawer, setMiniDrawer] = useGlobal("miniDrawer");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const sm = useMediaQuery("(max-width:600px)");
  const { location } = useReactRouter();
  const page = location.pathname.split("/")[1];

  return (
    <Drawer
      variant={sm ? "temporary" : "permanent"}
      open={mobileOpen}
      onClose={() => setMobileOpen(!mobileOpen)}
      classes={{ paper: classes.paper }}
    >
      <ListItem
        className={classNames(
          classes.firebase,
          classes.item,
          classes.itemCategory
        )}
      >
        <img alt="logo" src={logo} className={classes.logo} />
        Paperbase
      </ListItem>
      <List disablePadding style={{ overflow: "auto", marginBottom: "50px" }}>
        <ListItem className={classNames(classes.item, classes.itemCategory)}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary
            }}
          >
            Project Overview
            <Divider className={classes.dividerSettings} />
            <Tooltip title="Settings" placement="bottom-end">
              <IconButton
                color="inherit"
                className={classes.settings}
                onClick={e => setAnchorEl(e.currentTarget)}
              >
                <SettingsIcon />
              </IconButton>
            </Tooltip>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              {settings.map(setting => (
                <MenuItem key={setting} onClick={() => setAnchorEl(null)}>
                  {setting}
                </MenuItem>
              ))}
            </Menu>
          </ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon }) => (
              <Link to={`/${childId}`} key={childId} className={classes.link}>
                <ListItem
                  button
                  dense
                  className={classNames(
                    classes.item,
                    classes.itemActionable,
                    page === childId && classes.itemActiveItem
                  )}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.itemPrimary,
                      textDense: classes.textDense
                    }}
                  >
                    {childId}
                  </ListItemText>
                </ListItem>
              </Link>
            ))}
            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
      <div
        className={classes.switch}
        onClick={() => setMiniDrawer(!miniDrawer)}
      >
        <Divider className={classes.divider} />
        <ListItem
          className={classNames(classes.item, classes.itemCategory)}
          style={{ float: "right" }}
        >
          <ChevronLeftIcon className={classes.chevron} />
        </ListItem>
      </div>
    </Drawer>
  );
};

export default Navigator;
