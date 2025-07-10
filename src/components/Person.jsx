import React from "react";
import Anothercomponent from "../Anothercomponent";
const Person = () => {
  const name = " ritvik";
  const age = 22;

  const person = {
    name: "ritz",
    age: 10,
    pincode: 330044,
  };
  const product = {
    title: "vivo",
    model: "v25",
    price: 33004,
  };

  return (
    <>
      <div>
        {/* // App // {name}
      // <p></p>age = {age} */}

        <h2>Name = {person.name}</h2>
        <h1> Age = {person.age}</h1>
      </div>
      <Anothercomponent></Anothercomponent>
      <div>
        <h2>Title = {product.title}</h2>
        <h2>Model = {product.model}</h2>
        <h2>Price = {product.price}</h2>
      </div>
    </>
  );
};

export default Person;
