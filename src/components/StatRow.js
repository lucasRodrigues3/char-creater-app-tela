import React from "react";
import { IconButton } from "@mui/material";
import Item from "./Item";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

function StatRow({ label, state }) {
  return (
    <div
      style={{
        display: "flex",
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        marginBlock: "2em",
      }}
    >
      <Item>{label}</Item>
      <Item>{state}</Item>
      {/* <IconButton>
        <RemoveIcon />
      </IconButton> */}
      <IconButton>
        <AddIcon />
      </IconButton>
    </div>
  );
}

export default StatRow;
