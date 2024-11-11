import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 h-screen p-16 ">
      <h1 className="text-4xl font-bold">Redux learning</h1>
      <p className="text-xl font-semibold mt-2">
        Understanding redux in react js
      </p>

      <div className="space-x-8 mt-8 ">
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        {/* <Link to="/ProductDetails">Product details</Link> */}
      </div>
    </div>
  );
};

export default Home;
