import React from "react";

const ShowProduct = () => {
  let products = [
    { id: 1, title: "vivo", price: 12300 },
    { id: 2, title: "samsung", price: 32300 },
    { id: 3, title: "oppo", price: 11300 },
  ];

  return (
    <div>
      {products.map((data) => (
        <div key={data.id}>
          <h1>Title = {data.title}</h1>
          <h1>Price = {data.price}</h1>
        </div>
      ))}
      <h1>hyr</h1>
    </div>
  );
};

export default ShowProduct;
