import { Button } from "@material-ui/core";
import electron, { ipcRenderer } from "electron";
import React from "react";

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
        console.log("No file selected");
        return;
      }
      const done = ipcRenderer.sendSync("openFile", fileNames[0]);
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
