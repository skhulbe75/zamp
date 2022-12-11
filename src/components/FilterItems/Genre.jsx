import React from "react";
import "./Style.scss";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { RadioGroup } from "@mui/material";
import { pink } from "@mui/material/colors";

function Genre({ changeGenre }) {
  const genreType = ["men", "women", "boys", "girls"];

  const displayGenre = genreType.map((type, index) => (
    <FormControlLabel
      value={type}
      control={
        <Radio
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
      label={<label style={{ textTransform: "capitalize" }}>{type}</label>}
      key={index}
    />
  ));

  return (
    <div className="filterItems">
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="men"
        name="radio-buttons-group"
        onChange={(e) => changeGenre(e.target.value)}
      >
        {displayGenre}
      </RadioGroup>
    </div>
  );
}

export default Genre;
