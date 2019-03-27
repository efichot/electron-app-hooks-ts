import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import WrapperHeaderPaper from "../components/WrapperHeaderPaper";
import Sign_in from "./Authentication/Sign_in";
import Users from "./Authentication/Users";

const tabs = ["Users", "Sign-in", "Template", "Usage"];

const Authentication: React.FC = () => {
  return (
    <WrapperHeaderPaper page="Authentication" tabs={tabs}>
      <Switch>
        <Route path="/Authentication/Users" component={Users} />
        <Route path="/Authentication/Sign-in" component={Sign_in} />
        <Redirect to="/Authentication/Users" />
      </Switch>
    </WrapperHeaderPaper>
  );
};

export default Authentication;
