import { remote } from "electron";
import { toast } from "react-toastify";
import { addReducer, getGlobal, setGlobal } from "reactn";
import db from "./db";

// Old store
let oldStore: any = localStorage.getItem("store");
oldStore = JSON.parse(oldStore);

// Initial Store
setGlobal({
  mobileOpen: false,
  miniDrawer: oldStore ? oldStore.miniDrawer : false,
  key: "",
  keys: db.get("keys").value()
});

// Persist Store
remote.getCurrentWindow().on("close", () => {
  localStorage.setItem("store", JSON.stringify(getGlobal()));
});

// Reducers
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
