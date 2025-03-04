import { FaBullseye, FaEye, FaHandsHelping } from "react-icons/fa";
import {
  ac1,
  ac2,
  ac3,
  ac4,
  action1,
  action2,
  action3,
  action4,
} from "../assets/CER , QLYT";
import { creteficate } from "../components/Quality";

const AboutUs = () => {
  return (
    <div className="bg-gray-200 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
          About Us
        </h2>

        <div className="grid grid-cols-1 lgl:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="sm:text-2xl md:text-5xl font-bold font-sans text-green-800 mb-4">
              We are Growers at Heart

            </h1>

            <p className="xs:text-sm md:text-lg leading-8 text-gray-800  ">
              **El-Heba Agricultural Development** is one of the leading
              companies in the production and export of fresh citrus fruits. Its
              headquarters are located in **the Second Industrial Area in
              Ismailia, Egypt**.
              <br />
              <br />
              The company owns **vast farms** that utilize the latest
              agricultural techniques to ensure high quality and sustainability
              in production.
              <br />
              <br />
              El-Heba follows an integrated business model that tracks products
              from cultivation to delivery to customers worldwide, with a focus
              on **quality and food safety**.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="grid sm:grid-cols-2 gap-6">
              <img
                className="rounded hover:brightness-90 hover:scale-105 transition-transform duration-300 cursor-pointer"
                src={ac1}
                alt=""
              />
              <img
                className="rounded hover:brightness-90 hover:scale-105 transition-transform duration-300 cursor-pointer"
                src={ac2}
                alt=""
              />
              <img
                className=" rounded hover:brightness-90 hover:scale-105 transition-transform duration-300cursor-pointer"
                src={ac3}
                alt=""
              />
              <img
                className="rounded hover:brightness-90 hover:scale-105 transition-transform duration-300  cursor-pointer"
                src={ac4}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Section */}
          <div className="bg-[#F0FDF4] shadow-xl rounded-lg p-8 hover:shadow-2xl transition duration-300">
            <div className="text-center mb-4">
              <FaBullseye className="text-5xl text-green-600 mx-auto mb-2" />
              <h3 className="text-3xl font-semibold text-green-700 font-mono">
                Mission
              </h3>
            </div>
            <p className="xs:text-sm sm:text-[16px] text-gray-700 sm:leading-relaxed    ">
              El-Heba Agricultural Development Company is dedicated to producing
              and exporting premium fresh and frozen fruits and vegetables in
              line with the highest global quality standards. Through our own
              farms and advanced techniques, we strive to deliver safe and
              healthy agricultural products to global markets, focusing on
              sustainability and ensuring the utmost customer satisfaction.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-[#F0FDF4] shadow-xl rounded-lg p-8 hover:shadow-2xl transition duration-300">
            <div className="text-center mb-4">
              <FaEye className="text-5xl text-green-600 mx-auto mb-2" />
              <h3 className="text-3xl font-semibold text-green-700 font-mono">
                Vision
              </h3>
            </div>
            <p className="xs:text-sm sm:text-[16px] text-gray-700 sm:leading-relaxed">
              To become a global leader in the production and export of fruits
              and vegetables by driving innovation and agricultural
              sustainability while maintaining a reputation for adhering to the
              highest international standards of quality and food safety.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="grid sm:grid-cols-2 gap-6 ">
              <img
                className="rounded hover:brightness-90  cursor-pointer hover:scale-105 transition-transform duration-300"
                src={action1}
                alt=""
              />
              <img
                className="rounded hover:brightness-90 hover:scale-105 transition-transform duration-300 cursor-pointer"
                src={action2}
                alt=""
              />
              <img
                className=" rounded hover:brightness-90 hover:scale-105 transition-transform duration-300 cursor-pointer"
                src={action3}
                alt=""
              />
              <img
                className="rounded hover:brightness-90 hover:scale-105 transition-transform duration-300 cursor-pointer"
                src={action4}
                alt=""
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-[#F0FDF4] shadow-xl rounded-lg p-8 hover:shadow-2xl transition duration-300">
            <div className="text-center mb-4">
              <FaHandsHelping className="text-5xl text-green-600 mx-auto mb-2" />
              <h3 className="text-3xl font-semibold text-green-700 font-mono">
                Values
              </h3>
            </div>
            <ol className="xs:text-sm sm:text-[16px]  space-y-2 text-gray-700 sm:leading-relaxed">
              <li>
                <strong className="text-md text-main_Color ">1: Quality:</strong>{" "}
                We are committed to delivering high-quality agricultural
                products that meet international standards and ensure customer
                satisfaction.
              </li>
              <li>
                <strong className="text-main_Color">2: Sustainability:</strong>{" "}
                We focus on implementing sustainable farming practices to
                protect the environment and support future generations.
              </li>
              <li>
                <strong className="text-main_Color">3: Innovation:</strong> We
                embrace the latest technologies and innovations in agriculture
                to enhance productivity and efficiency.
              </li>
              <li>
                <strong className="text-main_Color">4: Food Safety:</strong> We
                are dedicated to providing safe and healthy products by adhering
                to the highest global food safety standards.
              </li>
           
            </ol>
          </div>

          
        </div>

        <div className="text-center my-10 bg-[#F0FDF4] py-10 px-10">
          <h1 className="text-3xl font-bold text-green-800 mb-6">
            Quality Certifications
          </h1>
          <div className="grid grid-cols-2  sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {creteficate.map((item, index) => (
              <div
                key={index}
                className="w-24 h-24 flex justify-center items-center  shadow-md rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={item.image}
                  alt=""
                  className="max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
