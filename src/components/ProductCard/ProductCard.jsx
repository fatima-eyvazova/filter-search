import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden w-1/2 p-3 mb-10">
      <img
        className="w-full h-96  object-center"
        src={product?.image}
        alt="Product"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">
          {product.title.slice(0, 20)}...
        </h2>
        <p className="text-gray-600 text-base">
          {product.description.slice(1, 70)}...
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            {product.price} $
          </span>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
