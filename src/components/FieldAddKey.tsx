import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useGlobal } from "reactn";
import db from "../db";

const FieldAddKey: React.FC = () => {
  const [key, setKey] = useGlobal("key");
  const [error, setError] = useState(false);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <TextField
        id="outlined-name"
        label="Name"
        value={key}
        onChange={e => setKey(e.target.value)}
        margin="normal"
        variant="outlined"
        error={error}
      />
      <Fab
        color="primary"
        aria-label="Add"
        onClick={() => {
          // added the file to the db if not exist already
          const exist = db
            .get("key")
            .find({ data: key })
            .value();

          if (exist) {
            setError(true);
            toast.error("File already on the db!");
          } else {
            db.get("key")
              .push({ data: key })
              .write();
            setError(false);
            toast.success("File added to the db!");
          }
          setKey("");
        }}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default FieldAddKey;
