import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { FreeMode, Autoplay } from "swiper/modules";

import {
  GrapeFruites,
  Grapes,
  mango,
  olives,
  peasala,
  strawberries,
} from "../assets/products";
import {
  baladi,
  mandrien1,
  mandrien2,
  morket,
  navels,
  Valencia,
} from "../assets/orange";
import { logo } from "../assets/CER , QLYT";
import { arnabet, faswolia, prockely, psala } from "../assets/Frozen";

const productsData = [
  { name: "Egyptian Baladi Orange", image: baladi },
  { name: "Mandrien", image: mandrien2 },
  { name: "Morket", image: morket },

  { name: "Valencia", image: Valencia },
  { name: "Grape Fruites", image: GrapeFruites },
  
  { name: "Mango", image: mango },
  { name: "Strawberries", image: strawberries },
  { name: "Olives", image: olives },
  { name: "Frozen Peas", image: psala },
  { name: "Frozen Broccoli", image: prockely },
  { name: "Frozen Green Beans", image: faswolia },
  { name: "Frozen Cauliflower", image: arnabet },

];

// Map of colors for each title
const colorsMap = {
  "Egyptian Baladi Orange": "#e8a025", // Red-Orange
  "Morket": "#fc6810", // Red-Orange
  Mandrien: "#fc6810", // Red-Orange

  Mango: "#fc6810", // Yellow
  "Fresh Peas": "#0A4300", // Blue
  Olives: "#DDDE40", // Lime Green
  "Grape Fruites": "#F06368", // Pink
  "Frozen Peas": "#5f9915", // Purple
  "Frozen Broccoli": "#5f9915", // Purple
  "Frozen Green Beans": "#5f9915", // Purple
  "Frozen Cauliflower": "#ffc868", // Purple
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
                  loading="lazy"
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
