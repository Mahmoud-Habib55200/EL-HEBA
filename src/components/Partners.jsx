import { logo, partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8 } from '../assets/CER , QLYT';
 

const Data = [
     { img: partner1 },
     { img: partner2 },
     { img: partner3 },
     { img: partner4 },
     { img: partner5 },
     { img: partner6 },
     { img: partner7 },
     { img: partner8 },
];

const Partners = () => {
     return (
          <div className="bg-[#FAF7F0] py-10">
               <div className="container mx-auto">
                    {/* Section Header */}
                    <div className="flex flex-col justify-center items-center mb-8">
                          <h2 className="text-4xl text-main_Color font-bold text-center mt-4">
                              Our Partners In Success
                         </h2>
                    </div>

                    {/* Partners Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                         {Data.map((partner, index) => (
                              <div
                                   key={index}
                                   className="flex justify-center items-center p-4 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105"
                              >
                                   <img
                                        src={partner.img}
                                        alt={`Partner ${index + 1}`}
                                        loading="lazy"
                                        className="w-full max-h-24 object-contain"
                                   />
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
};

export default Partners;
