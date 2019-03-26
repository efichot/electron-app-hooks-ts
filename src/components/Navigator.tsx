import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DnsRoundedIcon from "@material-ui/icons/DnsRounded";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import PhonelinkSetupIcon from "@material-ui/icons/PhonelinkSetup";
import PermMediaOutlinedIcon from "@material-ui/icons/PhotoSizeSelectActual";
import PublicIcon from "@material-ui/icons/Public";
import SettingsIcon from "@material-ui/icons/Settings";
import SettingsEthernetIcon from "@material-ui/icons/SettingsEthernet";
import SettingsInputComponentIcon from "@material-ui/icons/SettingsInputComponent";
import TimerIcon from "@material-ui/icons/Timer";
import { makeStyles } from "@material-ui/styles";
import classNames from "classnames";
import React from "react";
import { useGlobal } from "reactn";

const categories = [
  {
    id: "Develop",
    children: [
      { id: "Authentication", icon: <PeopleIcon />, active: true },
      { id: "Database", icon: <DnsRoundedIcon /> },
      { id: "Storage", icon: <PermMediaOutlinedIcon /> },
      { id: "Hosting", icon: <PublicIcon /> },
      { id: "Functions", icon: <SettingsEthernetIcon /> },
      { id: "ML Kit", icon: <SettingsInputComponentIcon /> }
    ]
  },
  {
    id: "Quality",
    children: [
      { id: "Analytics", icon: <SettingsIcon /> },
      { id: "Performance", icon: <TimerIcon /> },
      { id: "Test Lab", icon: <PhonelinkSetupIcon /> }
    ]
  }
];

const useStyles = makeStyles(theme => ({
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
    color: theme.palette.common.white
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
  }
}));

const Navigator: React.FC = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useGlobal("mobileOpen");
  const sm = useMediaQuery("(max-width:600px)");

  return (
    <Drawer
      variant={sm ? "temporary" : "permanent"}
      open={mobileOpen}
      onClose={() => setMobileOpen(!mobileOpen)}
    >
      <List disablePadding>
        <ListItem
          className={classNames(
            classes.firebase,
            classes.item,
            classes.itemCategory
          )}
        >
          Paperbase
        </ListItem>
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
            {children.map(({ id: childId, icon, active }) => (
              <ListItem
                button
                dense
                key={childId}
                className={classNames(
                  classes.item,
                  classes.itemActionable,
                  active && classes.itemActiveItem
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
            ))}
            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default Navigator;
