import React from "react";
import Product from "./Product";


function ProductList({ products}) {
  return (
    <>
      {products.map((product, idx) => {
        return <Product key={idx} product={product} />;
      })}
    </>
  );
}

export default ProductList;
