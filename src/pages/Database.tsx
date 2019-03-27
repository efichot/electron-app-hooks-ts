import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import WrapperHeaderPaper from "../components/WrapperHeaderPaper";
import One from "./Database/One";
import Two from "./Database/Two";

const tabs = ["One", "Two"];

const Database: React.FC = () => {
  return (
    <WrapperHeaderPaper page="Database" tabs={tabs}>
      <Switch>
        <Route path="/Database/One" component={One} />
        <Route path="/Database/Two" component={Two} />
        <Redirect to="/Database/One" />
      </Switch>
    </WrapperHeaderPaper>
  );
};

export default Database;
