import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const currencies = [
  {
    value: "Popular",
    label: "Short by : Popularity",
  },
  {
    value: "Discount",
    label: "Short by : Better Discount",
  },
  {
    value: "Price high",
    label: "Price : High To Low",
  },
  {
    value: "Price low",
    label: "Price : Low To High",
  },
];

const Filter = ({ selectedSorting }) => {
  const [currency, setCurrency] = useState("Price high");

  const handleChange = (event) => {
    setCurrency(event.target.value);
    selectedSorting(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { width: "25ch", ml: 2 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="filled-select-currency"
          select
          label="Sort"
          value={currency}
          onChange={handleChange}
          variant="standard"
          // color="primary"
        >
          {currencies.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
};

export default Filter;
