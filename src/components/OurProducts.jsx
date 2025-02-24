import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { FreeMode, Autoplay } from "swiper/modules";


import {  GrapeFruites, Grapes, mango, olives, peasala, strawberries } from "../assets/products";
import {   mandrien1, mandrien2, navels, Valencia,  } from "../assets/orange";
import { logo } from "../assets/CER , QLYT";


const productsData = [
  { name: "Mandrien", image: mandrien1 },
  { name: "Mandrien", image: mandrien2 },
 
  { name: "Mango", image: mango },
  { name: "Fresh Peas", image: peasala },
  { name: "Olives", image: olives },
  { name: "Grape Fruites", image: GrapeFruites },
  { name: "Grape", image: Grapes },
  { name: "Valencia", image: Valencia },
  { name: "Valencia", image: navels },
  { name: "Strawberries", image: strawberries },
];

// Map of colors for each title
const colorsMap = {
  Mandrien: "#fc6810", // Red-Orange
 
  Mango: "#fc6810", // Yellow
  "Fresh Peas": "#0A4300", // Blue
  Olives: "#DDDE40", // Lime Green
  "Grape Fruites": "#F06368", // Pink
  Grape: "#F06368", // Purple
  Valencia: "#E75F02", // Red-Orange
  Strawberries: "#fc0d05", // Deep Pink
};

const FreeModeSlider = () => {
  return (
    <section className="pt-10 py-8 bg-[#f9f9f9] rounded-lg shadow-md">
      {/* Section Header */}
      <div className="text-center mb-8">
      
        <h1 className="text-main_Color text-[20px]  font-bold uppercase">
          Premium Organic Products
        </h1>
        <h2 className="text-3xl md:text-4xl font-extrabold text-main_Color mt-2">
          Scroll Freely, Discover Excellence
        </h2>
      </div>

      {/* Slider Section */}
      <div className="container mx-auto px-4">
        <Swiper
          spaceBetween={30}
          slidesPerView="auto"
          freeMode={true}
          autoplay={{
            delay: 1, // Continuous scrolling
            disableOnInteraction: false, // Keeps autoplay active during interaction
          }}
          speed={3000} // Adjust the speed of the autoplay movement
          modules={[FreeMode, Autoplay]}
          className="freeModeSwiper"
        >
          {productsData.map((product, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "270px", flexShrink: 0 }}
              className="rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative  ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4 bg-white">
                <h3
                  className="text-center text-lg font-bold  "
                  style={{ color: colorsMap[product.name] || "#000" }}
                >
                  {product.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FreeModeSlider;
