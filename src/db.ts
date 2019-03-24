import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

// DB Init
const adapter = new FileSync("db.json", {
  defaultValue: { keys: [] }
});
const db = low(adapter);

export default db;
