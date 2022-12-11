import React, { useState } from "react";
import "./Style.scss";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { pink } from "@mui/material/colors";
import { FormGroup, FormControlLabel } from "@mui/material";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function FilterWithPrice({ setPriceFilter }) {
  const priceFilter = ["500", "1000", "1500", "2000", "2500"];
  const [includedPrice, setIncludedPrice] = useState([]);
  const handleChange = (e) => {
    let temp = [...includedPrice];
    let value = e.target.name;
    if (temp.includes(value)) {
      let index = temp.indexOf(value);
      temp.splice(index, 1);
    } else {
      temp.push(value);
    }
    setIncludedPrice(temp);
    setPriceFilter(temp);
  };

  const prices = priceFilter.map((price, index) => (
    <FormGroup key={index}>
      <FormControlLabel
        control={
          <Checkbox
            onChange={handleChange}
            name={price}
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
              "& .MuiSvgIcon-root": {
                fontSize: 16,
              },
            }}
          />
        }
        label={<label>{`Rs.${price - 500} to Rs.${price}`}</label>}
      />
    </FormGroup>
  ));

  return (
    <div className="filterItems">
      <div className="categories">
        <h4>PRICE</h4>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <SearchIcon />
        </IconButton>
      </div>

      {prices}
    </div>
  );
}

export default FilterWithPrice;
