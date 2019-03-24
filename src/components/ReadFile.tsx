import { Button } from "@material-ui/core";
import electron, { ipcRenderer } from "electron";
import React from "react";
import { toast } from "react-toastify";
import db from "../db";

const { dialog } = electron.remote;

const selectFile = e => {
  dialog.showOpenDialog(
    {
      properties: ["openFile"],
      filters: [
        {
          name: "markdown",
          extensions: ["md", "markdown", "txt"]
        }
      ]
    },
    fileNames => {
      // fileNames is an array that contains all the selected
      if (fileNames === undefined) {
        toast.error("No file selected");
        return;
      }
      const data = ipcRenderer.sendSync("openFile", fileNames[0]);

      const exist = db
        .get("key")
        .find({ data })
        .value();

      if (exist) {
        toast.error("File already on the db!");
      } else {
        db.get("key")
          .push({ data })
          .write();
        toast.success("File added to the db!");
      }
    }
  );
};

const ReadFile: React.FC = () => {
  return (
    <div>
      <Button onClick={selectFile}>Select a file</Button>
    </div>
  );
};

export default ReadFile;
