import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import { useGlobal } from "reactn";

const FieldAddKey: React.FC = () => {
  const [key, setKey] = useGlobal("key");
  const addKey: any = useGlobal("addKey");
  return (
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
  );
};

export default FieldAddKey;
