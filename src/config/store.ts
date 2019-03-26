import { toast } from "react-toastify";
import { addReducer, setGlobal } from "reactn";
import db from "./db";

// Initial Store
setGlobal({
  mobileOpen: false,
  tab: 0,
  key: "",
  keys: db.get("keys").value()
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
