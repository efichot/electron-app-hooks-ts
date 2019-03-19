import React from "react";
import { hot } from "react-hot-loader";
import { setGlobal } from "reactn";
import Home from "./pages/Home";

setGlobal({
  number: 1,
  persos: [
    {
      name: "Etienne",
      age: 28
    },
    {
      name: "Janai",
      age: 26
    }
  ]
});

const App: React.FC = () => {
  return <Home />;
};

export default hot(module)(App);
