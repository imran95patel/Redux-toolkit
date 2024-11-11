import React from "react";

const ProductDetails = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg p-12 shadow-lg border w-6/12 space-y-6">
        <img
          src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
          className="w-[70%] mx-auto"
          alt=""
        />
        <h1 className="font-bold text-6xl">Mens Cotton Jacket</h1>
        <p className="text-gray-500">
          great outerwear jackets for Spring/Autumn/Winter, suitable for many
          occasions, such as working, hiking, camping, mountain/rock climbing,
          cycling, traveling or other outdoors. Good gift choice for you or your
          family member. A warm hearted love to Father, husband or son in this
          thanksgiving or Christmas Day.
        </p>
        <label className="bg-blue-600 px-6 py-2 rounded text-white capitalize font-semibold">
          Category: men's clothing
        </label>
        <button className="bg-rose-600 px-6 py-2 rounded text-white font-semibold ml-6">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
