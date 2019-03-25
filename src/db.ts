import electron from "electron";
import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import path from "path";

const { app } = electron.remote;

// DB Init
const adapter = new FileSync(path.join(app.getPath("userData"), "db.json"), {
  defaultValue: { keys: [] }
});
const db = low(adapter);

export default db;
