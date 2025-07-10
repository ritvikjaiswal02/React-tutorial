import React from "react";

const Laptop = ({ brandName, model, price }) => {
  // const obj = {
  //   backgroundColor: "black",
  //   padding: "20px",
  //   margin: "13px",
  //   borderRadius: "23px",
  //   border: "3px solid purple"

  // };
  return (
    <div
    // style={obj} for internal css
    //Inline styling
    //   style={{
    //     backgroundColor: "green",
    //     padding: "10px",
    //     margin: "20px",
    //     borderRadius: "20px",
    //     border: "2px solid red",
    //   }}
    >
      <h3>BrandName = {brandName}</h3>
      <h3>Model = {model}</h3>
      <h3>Price = {price}</h3>
    </div>
  );
};

export default Laptop;
