import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

// DB Init
const adapter = new FileSync("db.json", {
  defaultValue: { key: [] }
});
const db = low(adapter);

export default db;
