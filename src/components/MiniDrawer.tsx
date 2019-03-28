import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
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
    width: "66px"
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
  itemActionable: {
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.08)"
    }
  },
  itemActiveItem: {
    color: "#4fc3f7"
  },
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
  settings: {
    padding: "0 0 0 5px"
  }
}));

const MiniDrawer: React.FC = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useGlobal("mobileOpen");
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
      <List disablePadding>
        <ListItem className={classNames(classes.item, classes.itemCategory)}>
          <img alt="logo" src={logo} className={classes.logo} />
        </ListItem>
        <Link to={`/Home`} className={classes.link}>
          <ListItem
            button
            dense
            className={classNames(
              classes.item,
              classes.itemCategory,
              classes.itemActionable
            )}
            style={{
              boxShadow: "none",
              paddingLeft: "22px",
              paddingBottom: "0px"
            }}
          >
            <Tooltip title="Overview" placement="right">
              <ListItemIcon>
                <HomeIcon style={{ fontSize: "24px" }} />
              </ListItemIcon>
            </Tooltip>
          </ListItem>
        </Link>
        <ListItem className={classNames(classes.item, classes.itemCategory)}>
          <Tooltip title="Settings" placement="right">
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
        </ListItem>
        {categories.map(({ id, children }) => (
          <div key={id} style={{ marginTop: "10px", paddingLeft: "7px" }}>
            {children.map(({ id: childId, icon }) => (
              <Link to={`/${childId}`} key={childId} className={classes.link}>
                <Tooltip title={childId} placement="right">
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
                  </ListItem>
                </Tooltip>
              </Link>
            ))}
            <Divider className={classes.divider} />
          </div>
        ))}
      </List>
    </Drawer>
  );
};

export default MiniDrawer;
