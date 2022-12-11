import React, { useState } from "react";
import MiniNavbar from "../Navbar/MiniNavbar";
import Paginate from "../Pagination/Paginate";
import Catalogue from "./Catalogue";
import Genre from "../FilterItems/Genre";
import FilterWithPrice from "../FilterItems/FilterWithPrice";

import Filter from "../FilterItems/Filter";

const ProductsPage = () => {
  // setting a default genre
  const [genre, setGenre] = useState("men");

  // Creating a single component that will consist of all the different filter categories
  const [filters, setFilters] = useState([
    { type: "category", value: [] },
    { type: "brand", value: [] },
    { type: "color", value: [] },
    { type: "discount", value: [] },
  ]);

  // It holds which sorting filter is used ex - Price: high to low
  const [sortProducts, setSortProducts] = useState("");
  // Current Page Number
  const [pageNum, setPageNum] = useState(0);
  // filter on the basis of price
  const [priceFilter, setPriceFilter] = useState([]);

  const handleFilterChange = (filterType, filterValue) => {
    let tempFilter = [...filters];
    tempFilter.map((item) =>
      item.type === filterType ? (item.value = filterValue) : ""
    );
    setFilters(tempFilter);
  };

  // Render filter component
  const FilterComponent = filters.map((filterType, index) => (
    <Filter
      key={index}
      selectedGenre={genre}
      filterType={filterType.type}
      onFilterSet={handleFilterChange}
    />
  ));
  return (
    <>
      <MiniNavbar selectedSorting={setSortProducts} />
      <div className="body2">
        <div className="leftSide">
          <Genre changeGenre={setGenre} />
          {FilterComponent}
          <FilterWithPrice setPriceFilter={setPriceFilter} />
        </div>
        <div className="rightSide">
          <Catalogue
            genre={genre}
            filters={filters}
            onSort={sortProducts}
            pageNum={pageNum}
            priceFilter={priceFilter}
          />
          <Paginate setPageNum={setPageNum} />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
