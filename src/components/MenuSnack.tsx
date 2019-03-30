import { IconButton, Menu, MenuItem } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React from "react";

interface Props {
  menu: string[];
}

const MenuSnack: React.FC<Props> = props => {
  const { menu } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  return (
    <>
      <IconButton
        onClick={e => setAnchorEl(e.currentTarget)}
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
      >
        <MoreVertIcon color="inherit" />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {menu.map(item => (
          <MenuItem key={item} onClick={() => setAnchorEl(null)}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MenuSnack;
