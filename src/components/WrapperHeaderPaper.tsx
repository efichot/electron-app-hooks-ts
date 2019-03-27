import { makeStyles, Paper } from "@material-ui/core";
import React from "react";
import Header from "./Header";

const useStyles = makeStyles(theme => ({
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

interface Props {
  page: string;
  tabs?: string[];
}

const WrapperHeaderPaper: React.FC<Props> = ({ page, tabs, children }) => {
  const classes = useStyles();

  return (
    <>
      <Header page={page} tabs={tabs} />
      <main className={classes.mainContent}>
        <Paper className={classes.paper}>{children}</Paper>
      </main>
    </>
  );
};

export default WrapperHeaderPaper;
