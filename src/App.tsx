import { createMuiTheme, CssBaseline, Theme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { hot } from "react-hot-loader";
import { setGlobal } from "reactn";
import Home from "./pages/Home";

const theme: Theme = createMuiTheme({
  palette: {
    type: "dark"
  },
  typography: { useNextVariants: true }
});

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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
};

export default hot(module)(App);
