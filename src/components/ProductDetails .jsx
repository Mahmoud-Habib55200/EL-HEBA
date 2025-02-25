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
import { FaWeightHanging, FaBoxes, FaBalanceScale, FaClipboardCheck, FaTruckLoading } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";


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

     if (!product) {
          return (
               <div className="flex justify-center items-center h-screen">
                    <p className="text-red-500 text-xl font-bold">Product not found!</p>
               </div>
          );
     }


// ==================================
     // تحديد نوع المنتج
     const productType = product.category;

     // تحديد تفاصيل التغليف حسب النوع
     const packagingDetails =
          productType === "fresh"
               ? product.freshPackagingDetails
               : product.packagingDetails;


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
                         to="/products"
                         className=" text-3xl text-main_Color font-bold mb-6 inline-block    "
                    >
                         <FaArrowCircleLeft/>
                    </Link>

                    <div className="grid md:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg overflow-hidden">
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
                                   className="h-48 object-cover rounded-xl"
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
                                   {/* <div className="flex items-center space-x-2">
                                        <FaLeaf className="text-main_Color text-2xl" />
                                        <span className="text-gray-700">Organic</span>
                                   </div> */}
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
                              <h2 className="text-2xl font-bold text-main_Color mb-4">
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
                                                  <span className="capitalize text-lg font-medium">{key}</span>
                                             </div>
                                             <span className="text-lg font-semibold">{value}</span>
                                        </li>
                                   ))}
                              </ul>
                         </motion.div>

                         {/* Packing Details Card ========================================= */}
                         {/* Packing Details Card */}
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
                                   <ul className="space-y-4">
                                        <li className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition rounded-lg p-3 shadow-sm">
                                             <div className="flex items-center gap-3">
                                                  <FaWeightHanging className="text-main_Color text-xl" />
                                                  <span className="font-medium">Weight Per Bag:</span>
                                             </div>
                                             <span>{product.packagingDetails.weightPerBag}</span>
                                        </li>

                                        <li className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition rounded-lg p-3 shadow-sm">
                                             <div className="flex items-center gap-3">
                                                  <FaBoxes className="text-main_Color text-xl" />
                                                  <span className="font-medium">Bags Per Carton:</span>
                                             </div>
                                             <span>{product.packagingDetails.bagsPerCarton}</span>
                                        </li>

                                        <li className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition rounded-lg p-3 shadow-sm">
                                             <div className="flex items-center gap-3">
                                                  <FaBalanceScale className="text-main_Color text-xl" />
                                                  <span className="font-medium">Weight Per Carton:</span>
                                             </div>
                                             <span>{product.packagingDetails.weightPerCarton}</span>
                                        </li>

                                        <li className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition rounded-lg p-3 shadow-sm">
                                             <div className="flex items-center gap-3">
                                                  <FaClipboardCheck className="text-main_Color text-xl" />
                                                  <span className="font-medium">Additional Option:</span>
                                             </div>
                                             <span>{product.packagingDetails.additionalOption}</span>
                                        </li>
                                   </ul>
                              ) : (
                                   <p className="text-gray-500">No packing details available.</p>
                              )}

                              {/* Bulk Option Details */}
                              {product.packagingDetails?.bulkOption && (
                                   <div className="mt-6 bg-gray-100 rounded-lg p-6 shadow-inner">
                                        <h3 className="text-xl font-semibold text-main_Color mb-4">
                                             Bulk Option:
                                        </h3>
                                        <ul className="space-y-2">
                                             <li className="flex items-center justify-between">
                                                  <FaTruckLoading className="text-main_Color text-xl" />
                                                  <span className="font-medium">Weight Per Bag:</span>
                                                  <span>{product.packagingDetails.bulkOption.weightPerBag}</span>
                                             </li>
                                             <li className="flex items-center justify-between">
                                                  <FaBoxes className="text-main_Color text-xl" />
                                                  <span className="font-medium">Bags Per Carton:</span>
                                                  <span>{product.packagingDetails.bulkOption.bagsPerCarton}</span>
                                             </li>
                                             <li className="flex items-center justify-between">
                                                  <FaBalanceScale className="text-main_Color text-xl" />
                                                  <span className="font-medium">Weight Per Carton:</span>
                                                  <span>{product.packagingDetails.bulkOption.weightPerCarton}</span>
                                             </li>
                                        </ul>
                                   </div>
                              )}
                         </motion.div>



                    </div>
               </div>
          </motion.section>
     );
};

export default ProductDetails;
