import React, { useEffect, useState } from "react";
import { Header, Footer, ProductsPage } from "./components";
import APIResponse from "./utils/API.json";

import ProductListContext from "./store/ProductListContext";
import { getProductList } from "./utils/API";

function App() {
  // stores the response from api call
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    //fetch the data from API
    getProductList().then((res) => {
      setProductList(res);
    });
  }, []);

  //using context to make api response data available throughout the app.
  return (
    <div className="App">
      <ProductListContext.Provider value={productList}>
        <Header />
        <ProductsPage />
        <Footer />
      </ProductListContext.Provider>
    </div>
  );
}

export default App;
