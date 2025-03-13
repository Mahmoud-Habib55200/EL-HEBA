import { useParams, Link } from "react-router-dom";
import {
  FaLeaf,
  FaGlobe,
  FaWarehouse,
  FaAppleAlt,
  FaDrumstickBite,
  FaBreadSlice,
  FaTint,
  FaUtensilSpoon,
  FaVial,
} from "react-icons/fa";
import { productsData } from "../../src/data";
import { motion } from "framer-motion";

import { FaArrowCircleLeft } from "react-icons/fa";
import FreshPackingDetails from "./FreshPackingDetails";
import FrozenPackingDetails from "./FrozenPackingDetails";

// =================================================================
const nutrientIcons = {
  calories: <FaAppleAlt className="text-yellow-500" />,
  protein: <FaDrumstickBite className="text-red-500" />,
  carbohydrates: <FaBreadSlice className="text-orange-500" />,
  fat: <FaTint className="text-blue-500" />,
  fiber: <FaUtensilSpoon className="text-green-500" />,
  vitamins: <FaVial className="text-purple-500" />,
};
// =================================================================

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find((item) => item.id === parseInt(id));

  // ==================================
  // تحديد نوع المنتج
  const productType = product.category;

 
 

  return (
    <motion.section
      className="py-10 bg-[#c3c7ce]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link
          to={{
            pathname: "/products",
            state: { category: product.category }, // نحتفظ بنوع المنتج
          }}
          className="text-3xl text-main_Color font-bold mb-6 inline-block"
        >
          <FaArrowCircleLeft />
        </Link>

        <div className="grid md:grid-cols-2 gap-8 bg-white rounded-md shadow-lg overflow-hidden">
          {/* Product Image */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
             
              className={`${product.imageWidth} ${product.imageWidthDetails}  `}
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            className="p-8"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold text-main_Color mb-4">
              {product.name}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {product.details}
            </p>

            {/* Icons Section */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center   gap-4 mb-6  ">
              <div className="flex items-center   space-x-2">
                <FaGlobe className="text-main_Color text-2xl" />
                <span className="text-gray-700 ">Global Export</span>
              </div>
              <div className="flex items-center  space-x-2 ">
                <FaWarehouse className="text-main_Color text-2xl" />
                <span className="text-gray-700 max-w-lg ">Quality Storage</span>
              </div>
            </div>

            {/* Tabs Section */}
            <div>
              <h3 className="text-xl font-bold text-main_Color mb-3">
                Sizes & Export Season
              </h3>
              <ul className="list-disc list-inside text-gray-600 mb-6">
                {product.sizes.map((size, index) => (
                  <li key={index}>{size}</li>
                ))}
              </ul>
              <h3 className="text-lg font-semibold text-main_Color">
                Export Season:
              </h3>
              <p className="text-gray-600">{product.exportSeason}</p>
            </div>
          </motion.div>
        </div>

        {/* Nutrition Facts and Packing Details Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Nutrition Facts Card */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-main_Color mb-6 text-center">
              Nutrition Facts
            </h2>
            <ul className="space-y-4">
              {Object.entries(product.nutrition).map(([key, value], index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition rounded-lg p-3"
                >
                  <div className="flex items-center gap-3">
                    {nutrientIcons[key.toLowerCase()] || (
                      <FaVial className="text-main_Color" />
                    )}
                    <span className="capitalize text-lg font-medium">
                      {key}
                    </span>
                  </div>
                  <span className="text-lg font-semibold">{value}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ============================================ Packing Details Card============================================= */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-main_Color mb-6 text-center">
              Packing Details
            </h2>

            {product.packagingDetails ? (
              productType === "fresh" ? (
                <FreshPackingDetails
                  packagingDetails={product.packagingDetails}
                />
              ) : (
                <FrozenPackingDetails
                  packagingDetails={product.packagingDetails}
                />
              )
            ) : (
              <p className="text-gray-600">No packaging details available.</p>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProductDetails;
