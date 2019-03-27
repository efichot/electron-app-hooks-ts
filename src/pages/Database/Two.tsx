import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles(theme => ({
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

const Two: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.contentWrapper}>
        <Typography color="textSecondary" align="center">
          Two
        </Typography>
      </div>
    </>
  );
};

export default Two;