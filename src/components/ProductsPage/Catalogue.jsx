import React, { useContext, useState } from "react";
import Card from "../../layouts/Card";
import Grid from "@mui/material/Grid";

import ProductListContext from "../../store/ProductListContext";

const Catalogue = ({ genre, filters, onSort, pageNum, priceFilter }) => {
  // getting the response form the API using the context
  const productList = useContext(ProductListContext);
  // List the number of products per page
  let productsPerPage = 16;
  // used for pagination
  const pageFilter = (e, i) => {
    if (i < productsPerPage * pageNum || i >= productsPerPage * (pageNum + 1)) {
      return false;
    }
    return true;
  };
  // used to filter list based on genre
  const filterGenre = (e, i) => {
    return e.genre === genre;
  };
  // used to filter list based on categories
  const filterCategories = (e, i) => {
    if (filters[0]?.value.length === 0) {
      return true;
    }
    return filters[0].value.includes(e.category);
  };
  // used to filter list based on brand
  const filterBrand = (e, i) => {
    if (filters[1]?.value.length === 0) {
      return true;
    }
    return filters[1].value.includes(e.brand);
  };
  // used to filter list based on color
  const filterColor = (e, i) => {
    if (filters[2]?.value.length === 0) {
      return true;
    }
    return filters[2].value.includes(e.color);
  };
  // used to filter list based on discount
  const filterDiscount = (e, i) => {
    if (filters[3]?.value.length === 0) {
      return true;
    }
    return filters[3].value.includes(e.discount);
  };
  // used to filter list based on price
  const filterPrice = (e, i) => {
    let lowerBound = 0;
    let upperBound = 0;
    if (priceFilter.length === 0) {
      return true;
    }
    if (priceFilter.length === 1) {
      lowerBound = priceFilter[0] - 500;
      upperBound = priceFilter[0];
    } else {
      lowerBound = Math.min(...priceFilter) - 500;
      upperBound = Math.max(...priceFilter);
    }
    console.log(lowerBound, upperBound);
    if (e.price > lowerBound && e.price < upperBound) {
      return true;
    }
    return false;
  };
  // used to filter list and short it based on products
  const shortProducts = (a, b) => {
    switch (onSort) {
      case "Price high":
        return b.price - a.price;

      case "Price low":
        return a.price - b.price;

      case "Popular":
        return b.rating - a.rating;

      case "Discount":
        return b.discount - a.discount;

      default:
        break;
    }
  };

  return (
    <div className="cards">
      <Grid container spacing={6}>
        {productList
          .sort(shortProducts)
          .filter(filterGenre)
          .filter(filterCategories)
          .filter(filterBrand)
          .filter(filterColor)
          .filter(filterDiscount)
          .filter(filterPrice)
          .filter(pageFilter)
          .map((obj, index) => (
            <Grid item xs={3} key={index}>
              <Card multi={obj} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};
export default Catalogue;
