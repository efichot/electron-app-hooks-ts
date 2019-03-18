import { hot } from "react-hot-loader";
import React, { setGlobal } from "reactn";
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

const App = () => {
  return <Home />;
};

export default hot(module)(App);
