import React from "react";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Filter from "./Filter";

const MiniNavbar = ({ selectedSorting }) => {
  let bundles = ["Bundles", "Country of Origin", "Size"];

  let bundleFlters = bundles.map((item, idx) => (
    <Button
      variant="text"
      endIcon={<KeyboardArrowDownIcon sx={{ m: 0 }} />}
      sx={{ fontSize: "10px", color: "black" }}
      key={idx}
    >
      {item}
    </Button>
  ));

  return (
    <div className="miniNav">
      <p>
        <span style={{ textDecoration: "none" }}>Home</span> / <b>Catalogue</b>
      </p>
      <p className="womenStore">
        Myntra Fashion Store <span className="items">- 626950 items</span>
      </p>

      <div className="filter">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            width: "18%",
          }}
        >
          <strong>FILTERS</strong>
          <span style={{ color: "#d81b60", fontWeight: "500" }}>CLEAR ALL</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            width: "80%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignContent: "center",
            }}
          >
            {bundleFlters}
          </div>
          <Filter selectedSorting={selectedSorting} />
        </div>
      </div>
    </div>
  );
};

export default MiniNavbar;
