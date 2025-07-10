import React from "react";

const Events = () => {
  const handleClick = () => {
    alert("bruh");
  };
  const addition = (a) => {
    alert(a + 10);
  };
  return (
    <div>
      <h1>Events</h1>
      <button onClick={handleClick}>Click this button</button>
      <button onClick={() => addition(100)}>button 2</button>
    </div>
  );
};

export default Events;
