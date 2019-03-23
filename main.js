const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const fs = require("fs");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

let mainWindow;

//Electron window
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 900,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile("index.html");

  mainWindow.on("closed", function() {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  if (mainWindow === null) {
    createWindow();
  }
});

// Menu Creation
const template = [
  {
    label: "Edit",
    submenu: [
      { role: "undo" },
      { role: "redo" },
      { type: "separator" },
      { role: "cut" },
      { role: "copy" },
      { role: "paste" },
      { role: "pasteandmatchstyle" },
      { role: "delete" },
      { role: "selectall" }
    ]
  },
  {
    label: "View",
    submenu: [
      { role: "reload" },
      { role: "forcereload" },
      { role: "toggledevtools" },
      { type: "separator" },
      { role: "resetzoom" },
      { role: "zoomin" },
      { role: "zoomout" },
      { type: "separator" },
      { role: "togglefullscreen" }
    ]
  },
  {
    role: "window",
    submenu: [{ role: "minimize" }, { role: "close" }]
  },
  {
    role: "help",
    submenu: [
      {
        label: "Learn More",
        click() {
          require("electron").shell.openExternal("https://electronjs.org");
        }
      }
    ]
  },
  {
    label: "Developer",
    submenu: [
      {
        label: "Developer Tools",
        accelerator:
          process.platform === "darwin" ? "Alt+Command+I" : "Crtl+Shift+I",
        click() {
          mainWindow.webContents.openDevTools();
        }
      }
    ]
  }
];

if (process.platform === "darwin") {
  template.unshift({
    label: app.getName(),
    submenu: [
      { role: "about" },
      { type: "separator" },
      { role: "services" },
      { type: "separator" },
      { role: "hide" },
      { role: "hideothers" },
      { role: "unhide" },
      { type: "separator" },
      { role: "quit" }
    ]
  });

  // Edit menu
  template[1].submenu.push(
    { type: "separator" },
    {
      label: "Speech",
      submenu: [{ role: "startspeaking" }, { role: "stopspeaking" }]
    }
  );

  // Window menu
  template[3].submenu = [
    { role: "close" },
    { role: "minimize" },
    { role: "zoom" },
    { type: "separator" },
    { role: "front" }
  ];
}

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

// DB Init
const adapter = new FileSync("db.json");
const db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ user: {}, count: 0, key: [] }).write();

// Set a user using Lodash shorthand syntax
db.set("user.name", "typicode").write();

// Increment count
db.update("count", n => n + 1).write();

// IPC listener
ipcMain.on("openFile", (event, arg) => {
  fs.readFile(arg, "utf-8", (err, data) => {
    if (err) {
      event.sender.send(
        "error",
        "An error ocurred reading the file :" + err.message
      );
      return;
    }
    // added the file to the db if not exist already
    const key = db
      .get("key")
      .find({ data })
      .value();

    if (key) {
      event.returnValue = false;
      event.sender.send("error", "File already on the db!");
    } else {
      db.get("key")
        .push({ data })
        .write();
      event.returnValue = true;
      event.sender.send("success", "File added to the db!");
    }
  });
});

ipcMain.on("addKey", (event, arg) => {
  // added the file to the db if not exist already
  const key = db
    .get("key")
    .find({ data: arg })
    .value();

  if (key) {
    event.returnValue = false;
    event.sender.send("error", "File already on the db!");
  } else {
    db.get("key")
      .push({ data: arg })
      .write();
    event.returnValue = true;
    event.sender.send("success", "File added to the db!");
  }
});
