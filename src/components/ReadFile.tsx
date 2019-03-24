import { Button } from "@material-ui/core";
import electron, { ipcRenderer } from "electron";
import React from "react";
import { toast } from "react-toastify";
import { useGlobal } from "reactn";

const { dialog } = electron.remote;

const ReadFile: React.FC = () => {
  const addKey: any = useGlobal("addKey");
  return (
    <div>
      <Button
        onClick={() =>
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
              addKey(data);
            }
          )
        }
      >
        Select a file
      </Button>
    </div>
  );
};

export default ReadFile;
