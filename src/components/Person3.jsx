import React from "react";

const Person3 = ({ name, age }) => {
  // if(age > 18){
  //   console.log("can drive")}
  //   {  else {
  //       console.log("cannot drive")
  //     }

  // age > 18 ? console.log("can drive") : console.log("cannot drive");

  return (
    <div>
      <h1>Name = {name}</h1>
      <h3>{age > 18 ? "You can drive" : "You cannot drive"}</h3>
    </div>
  );
};

export default Person3;
