import Marquee from "react-fast-marquee";
 import {
  Algeria,
  bahrien,
  jepoty,
  iraq,
  jordon,
  kuwit,
  lebnan,
  libya,
  moroc,
  oman,
  sauida,
  sudan,
  united_arab,
  tunisia,
  australia,
  belgium,
  france,
  germany,
  greece,
  italy,
  monaco,
  montenegro,
  netherlands,
  norway,
  portugal,
  romania,
  spain,
  sweden,
  switzerland,
  turkey,
  unitedkingdom,
} from "../assets/international";
import { logo, worldMap } from "../assets/CER , QLYT";


const countries = [
  { name: "Algeria", flag: Algeria },
  { name: "Bahrain", flag: bahrien },
  { name: "Djibouti", flag: jepoty },
  { name: "Iraq", flag: iraq },
  { name: "Jordan", flag: jordon },
  { name: "Kuwait", flag: kuwit },
  { name: "Lebanon", flag: lebnan },
  { name: "Libya", flag: libya },
  { name: "Morocco", flag: moroc },
  { name: "Oman", flag: oman },
  { name: "Saudi Arabia", flag: sauida },
  { name: "Sudan", flag: sudan },
  { name: "United Arab Emirates", flag: united_arab },
  { name: "Tunisia", flag: tunisia },
];

const europeanCountries = [
  { name: "australia", flag: australia },
  { name: "Belgium", flag: belgium },
  { name: "France", flag: france },
  { name: "Germany", flag: germany },
  { name: "Greece", flag: greece },
  { name: "Italy", flag: italy },
  { name: "Monaco", flag: monaco },
  { name: "Montenegro", flag: montenegro },
  { name: "Norway", flag: norway },
  { name: "Portugal", flag: portugal },
  { name: "Romania", flag: romania },
  { name: "Spain", flag: spain },
  { name: "Sweden", flag: sweden },
  { name: "Switzerland", flag: switzerland },
  { name: "Netherlands", flag: netherlands },
  { name: "United Kingdom", flag: unitedkingdom },
  { name: "Turkey", flag: turkey },
];

const Exporting = () => {
  return (
    <div className="bg-[#FAF7F0] w-full py-10">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="flex justify-center items-center flex-col">
          {/* <img className="w-10" src={logo} alt="Logo" /> */}
          <h1 className="text-main_Color font-bold text-[20px] uppercase">Exporting</h1>
          <h1 className="text-2xl md:text-2xl font-extrabold text-main_Color mt-2 capitalize text-center">
            We export to more than <span className="text-gray-900">60</span>{" "}
            countries worldwide including
          </h1>
        </div>

        {/* Marquee Section */}
        {/* <div className="mt-10">
          <Marquee speed={10}>
            {countries.map((country, index) => (
              <div key={index} className="flex flex-col items-center mx-6">
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-12 h-12 object-contain mb-1"
                />
                <h2 className="text-main_Color font-semibold text-sm text-center">
                  {country.name}
                </h2>
              </div>
            ))}
          </Marquee>

      
          <Marquee className="mt-4" speed={10}>
            {europeanCountries.map((country, index) => (
              <div key={index} className="flex flex-col items-center mx-6">
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-12 h-12 object-contain mb-1"
                />
                <h2 className="text-main_Color font-semibold text-sm text-center">
                  {country.name}
                </h2>
              </div>
            ))}
          </Marquee>
        </div> */}

        <div className="bg-inherit w-full  mt-10 flex items-center justify-center">
          <img src={worldMap} alt="world map" />
        </div>
      </div>
    </div>
  );
};

export default Exporting;
