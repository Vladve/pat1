import React, { useState } from "react";

import ProductList from "./Components/ProductList";
import productsInit from "./hard";
import Categories from "./Components/Categories";

function App() {
  const [products, setProducts] = useState(productsInit);
  const [price, setPrice] = useState(0)

  function filterProducts(name) {
    if (name == "") {
      setProducts(productsInit);
    } else {
      setProducts(products.filter((product) => product.title.includes(name)));
    }
  }

  const onPriceChange = (e) => {
    let value = e.target.value
    setPrice(e.target.value)
    if (price > 0) {
      setProducts(products.filter((product) => product.price > value))
    } else {
      setProducts(products.filter((product) => product.price < price))
    }
  }


  return (
    <div className="body">
      <div>
      <Categories setProducts={setProducts} products={products}/>
      <div className="filter">
      <h1 className="h1">Progect 'Filter'</h1>
      <input
        placeholder="Enter product name"
        onChange={(event) => filterProducts(event.target.value)}
      />
      &nbsp;
      <div>
      <label for="price">Price</label>
        <p>{price}</p>
        <input
        type="range"
        onChange={(e) => onPriceChange(e, "+")}
        id="price"
        name="price"
        min={0}
        max={6000}
        value={price}
      />
      </div>
      <div className="products">
        <ProductList products={products} />
      </div>
    </div>
      </div>
    </div>
  );
}

export default App;
