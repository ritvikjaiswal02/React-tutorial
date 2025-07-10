import React from "react";
import Person from "./components/Person";
import Anothercomponent from "./Anothercomponent";
import Product from "./components/Product";
import Person2 from "./components/Person2";
import Person3 from "./components/Person3";
import Laptop from "./components/Laptop";
import Counter from "./components/Counter";
import Events from "./components/Events";
import ShowProduct from "./components/ShowProduct";
import FilterProduct from "./components/FilterProduct";

const Home = () => {
  return (
    <div>
      <>
        {/* <Person></Person>
        <Anothercomponent></Anothercomponent> */}

        {/* <Product title="Galaxy s24" brand="Indian" price={20300}></Product>
        <Product title="Vivo V24" brand="Chinese" price={39000}></Product>
        <Product title="Pixel 23" brand="Canadian" price={54440}></Product> */}
      </>
      <>
        {/* <Person2 name="yuv" age={33} salary={34999} />
      <Person2 name="sid" age={38} salary={12000} />
      <Person2 name="yash" age={43} salary={32111} /> */}
      </>
      <>{/* <Person3 name="Ritvik" age={12}></Person3> */}</>
      <>
        {/* <Laptop brandName="hp" model="probook" price={120000}></Laptop>
        <Laptop brandName="Asus" model="F15" price={30000}></Laptop>
        <Laptop brandName="Lenovo" model="chromebook" price={90000}></Laptop> */}
      </>
      <>{/* // <Events></Events> */}</>

      <>{/* <Counter></Counter> */}</>
      {/* <ShowProduct></ShowProduct> */}
      <>
        <FilterProduct></FilterProduct>
      </>
    </div>
  );
};

export default Home;
