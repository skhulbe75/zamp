import React, { useContext, useState, useEffect } from "react";
import "./Style.scss";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { FormControlLabel, FormGroup } from "@mui/material";
import ProductListContext from "../../store/ProductListContext";
import { pink } from "@mui/material/colors";

const Filter = ({ selectedGenre, filterType, onFilterSet }) => {
  const productList = useContext(ProductListContext);
  const [filterValue, setFilterValue] = useState([]);

  const showFilter = (e, i) => {
    return e.genre === selectedGenre;
  };

  const handleChange = (e) => {
    let temp = [...filterValue];
    let value = e.target.name;
    if (temp.includes(value)) {
      let index = temp.indexOf(value);
      temp.splice(index, 1);
    } else {
      temp.push(value);
    }
    setFilterValue(temp);
  };

  const removeDuplicates = (thing, index, self) =>
    self.findIndex((t) => t[filterType] === thing[filterType]) === index;

  useEffect(() => {
    setFilterValue([]);
  }, [selectedGenre]);

  useEffect(() => {
    onFilterSet(filterType, filterValue);
  }, [filterValue]);

  return (
    <>
      <div className="filterItems">
        <div className="categories">
          <h4>{filterType.toUpperCase()}</h4>
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
        {productList
          .filter(showFilter)
          .filter(removeDuplicates)
          .map((item) => (
            <FormGroup key={item.id}>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleChange}
                    name={item[filterType]}
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
                label={
                  <label style={{ textTransform: "capitalize" }}>
                    {item[filterType]}
                  </label>
                }
              />
            </FormGroup>
          ))}
      </div>
    </>
  );
};

export default Filter;
