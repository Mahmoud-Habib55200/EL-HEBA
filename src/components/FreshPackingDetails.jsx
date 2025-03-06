import { FaBalanceScale, FaWeightHanging } from "react-icons/fa";

const FreshPackingDetails = ({ packagingDetails }) => {
  return (
    <div className="space-y-4">
      {packagingDetails.map((detail, index) => (
        <div key={index} className="space-y-4 rounded-lg">
          <h3 className="text-xl font-semibold text-main_Color mb-2">
            {detail.type}
          </h3>

          <div className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition rounded-lg p-3 shadow-sm">
            <div className="flex justify-center items-center gap-2">
              <FaBalanceScale className="text-main_Color text-xl" />
              <span className="font-medium">Weight Per Carton:</span>
            </div>
            <span>{detail.weightPerBag.join(", ")}</span>
          </div>

          <div className="flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition rounded-lg p-3 shadow-sm">
            <div className="flex justify-center items-center gap-2">
              <FaWeightHanging className="text-main_Color text-xl" />
              <span className="font-medium">Carton Type:</span>
            </div>
            <span>{detail.cartonType}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FreshPackingDetails;
