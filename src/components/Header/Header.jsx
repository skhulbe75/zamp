import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Logo from "../../assets/images/logo.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Tabs, Tab } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import "../../index.css";

//The header component
const Header = () => {
  const [value, setValue] = useState(0);

  const navItems = ["Men", "Women", "Kids", "Home & Living", "Beauty"];

  const nav = navItems.map((e, i) => (
    <span className="header--navbar" key={i}>
      <Tab value={e.toLowerCase} label={e} className="header--navbar--nav" />
    </span>
  ));

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", color: "black" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 20px",
        }}
      >
        <section>
          <img
            src={Logo}
            alt=""
            width="40"
            style={{ transform: "translate(0,25%)" }}
          />
          {nav}
        </section>

        <section style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              display: "flex",
              background: "#f5f5f6",
              height: "40px",
              width: "250px",
              marginRight: "10px",
              borderRadius: "10px",
            }}
          >
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
            <input
              type="text"
              style={{
                border: "none",
                color: "#696e79",
                background: "#f5f5f6",
                outline: "none",
              }}
              placeholder="Search for Products"
            />
          </span>
          <Tabs value={value} onChange={(e, val) => setValue(val)}>
            <Tab
              icon={<PersonOutlineOutlinedIcon sx={{ width: "20px", m: 0 }} />}
              label={<label style={{ fontSize: "10px" }}>Profile</label>}
            />
            <Tab
              icon={<FavoriteBorderIcon sx={{ width: "20px" }} />}
              label={<label style={{ fontSize: "10px" }}>Wishlist</label>}
            />
            <Tab
              icon={<ShoppingBagOutlinedIcon sx={{ width: "20px" }} />}
              label={<label style={{ fontSize: "10px" }}>Bag</label>}
            />
          </Tabs>
        </section>
      </nav>
    </AppBar>
  );
};

export default Header;
