import { createMuiTheme, CssBaseline, Theme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { ipcRenderer } from "electron";
import React from "react";
import { hot } from "react-hot-loader";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { addReducer, setGlobal } from "reactn";
import "./db";
import db from "./db";
import Home from "./pages/Home";

//Toast
ipcRenderer.on("success", (event, arg) => {
  toast.success(arg);
});

ipcRenderer.on("error", (event, arg) => {
  toast.error(arg);
});

ipcRenderer.on("warn", (event, arg) => {
  toast.warn(arg);
});

ipcRenderer.on("info", (event, arg) => {
  toast.info(arg);
});

//Theme
const theme: Theme = createMuiTheme({
  palette: {
    type: "dark"
  },
  typography: { useNextVariants: true }
});

//Store
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
  ],
  key: "",
  keys: db.get("keys").value()
});

addReducer("addKey", (global, data) => {
  const exist = db
    .get("keys")
    .find({ data })
    .value();
  if (exist) {
    toast.error("File already on the db!");
    return {
      keys: db.get("keys").value()
    };
  } else {
    db.get("keys")
      .push({ data })
      .write();
    toast.success("File added to the db!");
    return {
      keys: db.get("keys").value()
    };
  }
});

addReducer("deleteKey", (global, data) => {
  db.get("keys")
    .remove({ data })
    .write();
  toast.warn("File deleted of the db!");
  return {
    keys: db.get("keys").value()
  };
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default hot(module)(App);
