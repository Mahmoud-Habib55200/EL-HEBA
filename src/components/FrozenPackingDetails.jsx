import React from "react";
import { FaBalanceScale } from "react-icons/fa";
import {
  FaWeightHanging,
  FaBoxes,
 
  FaClipboardCheck,
  FaTruckLoading,
} from "react-icons/fa";
const FrozenPackingDetails = ({ packagingDetails }) => {
  return (
    <div className="space-y-4">
      <div className="space-y-4 rounded-lg">
        <h3 className="text-xl font-semibold text-main_Color mb-2">
          Standard Packaging
        </h3>

        <div className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition rounded-lg p-3 shadow-sm">
          <div className="flex justify-center items-center gap-2">
            <FaBalanceScale className="text-main_Color text-xl" />
            <span className="font-medium">Weight Per Bag:</span>
          </div>
          <span>{packagingDetails.weightPerBag}</span>
        </div>

        <div className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition rounded-lg p-3 shadow-sm">
          <div className="flex justify-center items-center gap-2">
            <FaWeightHanging className="text-main_Color text-xl" />
            <span className="font-medium">Bags Per Carton:</span>
          </div>
          <span>{packagingDetails.bagsPerCarton}</span>
        </div>

        <div className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition rounded-lg p-3 shadow-sm">
          <div className="flex justify-center items-center gap-2">
            <FaTruckLoading className="text-main_Color text-xl" />
            <span className="font-medium">Weight Per Carton:</span>
          </div>
          <span>{packagingDetails.weightPerCarton}</span>
        </div>

        <div className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition rounded-lg p-3 shadow-sm">
          <div className="flex justify-center items-center gap-2">
            <FaClipboardCheck className="text-main_Color text-xl" />
            <span className="font-medium">Additional Option:</span>
          </div>
          <span>{packagingDetails.additionalOption}</span>
        </div>
      </div>

      <div className="space-y-4 rounded-lg">
        <h3 className="text-xl font-semibold text-main_Color mt-2">
          Bulk Packaging
        </h3>

        <div className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition rounded-lg p-3 shadow-sm">
          <div className="flex justify-center items-center gap-2">
            <FaBoxes className="text-main_Color text-xl" />
            <span className="font-medium">Weight Per Bag:</span>
          </div>
          <span>{packagingDetails.bulkOption.weightPerBag}</span>
        </div>

        <div className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition rounded-lg p-3 shadow-sm">
          <div className="flex justify-center items-center gap-2">
            <FaBalanceScale className="text-main_Color text-xl" />
            <span className="font-medium">Bags Per Carton:</span>
          </div>
          <span>{packagingDetails.bulkOption.bagsPerCarton}</span>
        </div>

        <div className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition rounded-lg p-3 shadow-sm">
          <div className="flex justify-center items-center gap-2">
            <FaBalanceScale className="text-main_Color text-xl" />
            <span className="font-medium">Weight Per Carton:</span>
          </div>
          <span>{packagingDetails.bulkOption.weightPerCarton}</span>
        </div>
      </div>
    </div>
  );
};

export default FrozenPackingDetails;
