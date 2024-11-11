import React from "react";
import { useSelector } from "react-redux";
const ProductDetails = () => {
  const { product } = useSelector((res) => res);
  if (!product)
    return (
      <h1 className="text-5xl font-bold text-center p-12">
        {" "}
        Data is not Avalable in the Redux store
      </h1>
    );
  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg p-12 shadow-lg border w-6/12 space-y-6">
        <img src={product.image} className="w-[70%] mx-auto" alt="" />
        <h1 className="font-bold text-6xl">{product.title}</h1>
        <p className="text-gray-500">{product.description}</p>
        <label className="bg-blue-600 px-6 py-2 rounded text-white capitalize font-semibold">
          {product.category}
        </label>
        <button className="bg-rose-600 px-6 py-2 rounded text-white font-semibold ml-6">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
