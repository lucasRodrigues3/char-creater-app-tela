import React from "react";
import { MenuItem, FormControl, InputLabel, Select } from "@mui/material";

const races = {
  Bestial: 0,
  Elfo: 1,
  Fada: 2,
  Goblin: 3,
  Humano: 4,
  Tritão: 5,
};

function Selector({ label, selected, handleChange, array, selectedRace }) {
  const isLineage = label === "Linhagem";
  const selectedArray =
    isLineage && selectedRace !== "" ? array[races[selectedRace]] : array;
  return (
    <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel>{label}</InputLabel>
      <Select value={selected} onChange={handleChange} label={label}>
        {selectedArray.map((item) => (
          <MenuItem key={item.name} value={item.name}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default Selector;
