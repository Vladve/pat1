import React from "react";


const styles = {
  img: {
    width: "150px",
    height: "150px",
  },
};

function Product({ product }) {
  return (
    <div className="logo">
      <div className="logo-setting">{product.title}</div>
      &nbsp;
      <img src={product.image} style={styles.img} />
      <div> price : {product.price} </div>
    </div>
  );
}

export default Product;
