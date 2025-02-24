import { worldMap } from "../assets/CER , QLYT";

const Exporting = () => {
  return (
    <div className="bg-[#FAF7F0] w-full py-10">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex justify-center items-center flex-col">
          {/* <img className="w-10" src={logo} alt="Logo" /> */}
          <h1 className="text-main_Color font-bold text-[20px] uppercase">
            Exporting
          </h1>
          <h1 className="text-2xl md:text-2xl font-extrabold text-main_Color mt-2 capitalize text-center">
            We export to more than <span className="text-gray-900">60</span>{" "}
            countries worldwide including
          </h1>
        </div>

        <div className="bg-inherit w-full  mt-10 flex items-center justify-center">
          <img src={worldMap} alt="world map" />
        </div>
      </div>
    </div>
  );
};

export default Exporting;
