import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";
import { useGlobal } from "reactn";

const ListKeys: React.FC = () => {
  const [keys]: any = useGlobal("keys");
  const deleteKey: any = useGlobal("deleteKey");
  return (
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
  );
};

export default ListKeys;
