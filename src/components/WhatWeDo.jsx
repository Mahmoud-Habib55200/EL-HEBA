// import { logo, farm, farm1, farm2, farm3 } from "../assets/CER , QLYT";

import { logo } from "../assets/CER , QLYT";
import { farm, farm1, farm2, farm3 } from "../assets/orange";

const WhatWeDo = () => {
  const data = [
    {
      id: 1,
      img: farm1,
      desc: "The company specializes in the production of pickled olives, exported to markets worldwide.",
    },
    {
      id: 2,
      img: farm2,
      desc: "El-Heba produces 5,000 tons of mangoes, 8,000 tons of strawberries, and 8,000 tons of olives annually.",
    },
    {
      id: 3,
      img: farm3,
      desc: "The company demonstrates a strong commitment to quality, producing 65,000 tons of citrus fruits annually.",
    },
    {
      id: 4,
      img: farm,
      desc: "The company is a global leader in the production, packaging, and export of fresh and frozen fruits and vegetables.",
    },
  ];

  return (
    <div className="bg-[#FAF7F0]">
      <section className="container mx-auto py-10 ">
        {/* Header Section */}
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl text-main_Color mt-3 font-bold text-center uppercase">
            What We Do
          </h1>
          <h2 className="text-4xl text-main_Color font-bold text-center mt-4">
            We are Growers at Heart
          </h2>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 mdl:grid-cols-3 xl:grid-cols-4  gap-6 mt-10">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                className="w-full h-56 object-cover"
                src={item.img}
                alt={`El-Heba ${item.id}`}
                loading="lazy"
              />
              <div className="p-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
