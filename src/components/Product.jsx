import React from "react";

const Product = ({ title, brand, price }) => {
  return (
    <div>
      <h2> Mobile Title = {title}</h2>
      <h2>Mobile Price = {price}</h2>
      <h2>Mobile Brand = {brand}</h2>
    </div>
  );
};

export default Product;
