import {
  Button,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Paper,
  TextField,
  Typography
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import electron, { ipcRenderer } from "electron";
import React from "react";
import { toast } from "react-toastify";
import { useGlobal } from "reactn";
import Header from "../components/Header";

const { dialog } = electron.remote;

const useStyles = makeStyles(theme => ({
  appContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
  },
  mainContent: {
    flex: 1,
    padding: "48px 36px 0",
    background: "#eaeff1"
  },
  paper: {
    maxWidth: 936,
    margin: "auto",
    overflow: "hidden"
  },
  contentWrapper: {
    margin: "40px 16px"
  }
}));

const Storage: React.FC = () => {
  const classes = useStyles();
  const [keys]: any = useGlobal("keys");
  const deleteKey: any = useGlobal("deleteKey");
  const addKey: any = useGlobal("addKey");
  const [key, setKey] = useGlobal("key");

  return (
    <div className={classes.appContent}>
      <Header page="Storage" />
      <main className={classes.mainContent}>
        <Paper className={classes.paper}>
          <div className={classes.contentWrapper}>
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
                      const data = ipcRenderer.sendSync(
                        "openFile",
                        fileNames[0]
                      );
                      addKey(data);
                    }
                  )
                }
              >
                Select a file
              </Button>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TextField
                id="outlined-name"
                label="Name"
                value={key}
                onChange={e => setKey(e.target.value)}
                margin="normal"
                variant="outlined"
              />
              <Fab
                color="primary"
                aria-label="Add"
                onClick={() => {
                  addKey(key);
                  setKey("");
                }}
              >
                <AddIcon />
              </Fab>
            </div>
            <div>
              <Typography variant="h6">Avatar with text and icon</Typography>
              <div>
                <List>
                  {keys.map((key, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={key.data} />
                      <ListItemSecondaryAction>
                        <IconButton
                          aria-label="Delete"
                          onClick={() => deleteKey(key.data)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </div>
            </div>
          </div>
        </Paper>
      </main>
    </div>
  );
};

export default Storage;
