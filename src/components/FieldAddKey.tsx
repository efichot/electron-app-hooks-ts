import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { ipcRenderer } from "electron";
import React, { useState } from "react";
import { useGlobal } from "reactn";

const FieldAddKey: React.FC = () => {
  const [key, setKey] = useGlobal("key");
  const [done, setDone] = useState(true);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <TextField
        id="outlined-name"
        label="Name"
        value={key}
        onChange={e => setKey(e.target.value)}
        margin="normal"
        variant="outlined"
        error={!done}
      />
      <Fab
        color="primary"
        aria-label="Add"
        onClick={() => {
          setDone(ipcRenderer.sendSync("addKey", key));
          setKey("");
        }}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default FieldAddKey;
