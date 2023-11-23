import React, { useRef } from "react";

const Header = ({ query, setQuery }) => {
  const inputElement = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(inputElement.current.value);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-4xl font-extrabold text-white">Products</h1>
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSubmit}>
            <input
              ref={inputElement}
              type="text"
              placeholder="Search..."
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
