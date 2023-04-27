import React from "react";
import { IconButton } from "@mui/material";
import Item from "./Item";

function ActionButton({ label, handleFunction, style }) {
  return (
    <Item>
      <IconButton onClick={handleFunction} style={{ ...style }}>
        {label}
      </IconButton>
    </Item>
  );
}

export default ActionButton;
