import React, {   useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productsData } from "../../src/data";
import { IoIosArrowDown } from "react-icons/io";

const ProductList = () => {
  // Link when user click footer link
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  //

  const [filter, setFilter] = useState("all"); // Default: Show all products

  // Filter products based on category
  const filteredProducts =
    filter === "all"
      ? productsData
      : productsData.filter((product) => product.category === filter);

  return (
    <section id="products" className="bg-[#f9f9f9] py-10 rounded-lg shadow-md">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-main_Color text-center mb-8">
          Our Products
        </h2>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            className={`px-6 py-2 rounded-lg font-semibold text-sm transition-colors ${
              filter === "all"
                ? "bg-main_Color text-white"
                : "bg-white text-main_Color border border-main_Color"
            }`}
            onClick={() => setFilter("all")}
          >
            All Products
          </button>

          <button
            className={`px-6 py-2 rounded-lg font-semibold text-sm transition-colors ${
              filter === "fresh"
                ? "bg-main_Color text-white"
                : "bg-white text-main_Color border border-main_Color"
            }`}
            onClick={() => setFilter("fresh")}
          >
            Fresh
          </button>

          <button
            className={`px-6 py-2 rounded-lg font-semibold text-sm transition-colors ${
              filter === "frozen"
                ? "bg-main_Color text-white"
                : "bg-white text-main_Color border border-main_Color"
            }`}
            onClick={() => setFilter("frozen")}
          >
            Frozen
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lgl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-xl shadow-md  hover:shadow-lg transition-transform 
              transform hover:scale-[101%]  "
            >
              <img
                src={product.image}
                alt={product.name}
                className={`${product.imageWidth} ${product.imageHeight}  h-48 object-cover   `}
                loading="lazy"
              />
              <div className="  p-6">
                <h3 className="text-lg font-bold text-main_Color mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {product.description.substring(0, 30)}...
                </p>

                <div className="mt-4">
                  <Link to={`/product/${product.id}`}>
                    <button
                      className="w-full flex justify-center items-center h-full  bg-main_Color text-white font-semibold py-2   shadow-md hover:bg-opacity-90
                     transition-transform transform  focus:outline-none focus:ring-2
                      focus:ring-main_Color focus:ring-opacity-50"
                    >
                      <span className="text-gray-300">Read More</span>
                      <IoIosArrowDown />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
