import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-16 ">
      <div className="bg-white p-8 text-center rounded-lg">
        <h1 className="text-5xl font-bold">Redux app</h1>
        <p className="text-gray-500 text-lg mt-2">
          Click on any product to test your redux app
        </p>
      </div>

      <div className="w-10/12 mx-auto bg-white rounded-lg shadow-md p-8 my-12">
        <div className="grid  grid-cols-4 gap-8 ">
          {products.map((item, index) => (
            <div
              key={index}
              className="shadow-xl rounded-lg border flex flex-col p-6 gap-2 "
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-[180px] object-contain "
              />
              <h1 className="font-semibold text-lg  ">{item.title}</h1>
              <label>₹{item.price}</label>
              <Link
                to="/productdetails"
                className="bg-green-400 rounded-md px-4 py-2 text-center text-white font-medium"
              >
                View product details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
