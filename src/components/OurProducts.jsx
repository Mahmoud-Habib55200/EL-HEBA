import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { FreeMode, Autoplay } from "swiper/modules";
import { GrapeFruites, mango, olives, strawberries } from "../assets/products";
import { baladi, mandrien2, Murcott, Valencia } from "../assets/orange";

import {
  arnabet,
  faswolia,
  manga,
  prockely,
  psala,
  straw,
} from "../assets/Frozen";
import { Link } from "react-router-dom";

const productsData = [
  { id: 1, name: "Mandrien", image: mandrien2 },
  { id: 2, name: "Egyptian Baladi Orange", image: baladi },
  { id: 3, name: "Murcott", image: Murcott },
  { id: 3, name: "Valencia", image: Valencia },
  { id: 6, name: "Grape Fruites", image: GrapeFruites },
  { id: 8, name: "Mango", image: mango },
  { id: 9, name: "Strawberries", image: strawberries },
  { id: 5, name: "Olives", image: olives },
  { id: 13, name: "Frozen Peas", image: psala },
  { id: 16, name: "Frozen Broccoli", image: prockely },
  { id: 11, name: "Frozen Mango", image: manga },
  { id: 20, name: "Frozen Green Beans", image: faswolia },
  { id: 14, name: "Frozen Cauliflower", image: arnabet },
  { id: 10, name: "Frozen Strawberries", image: straw },
];

// Map of colors for each title
const colorsMap = {
  "Egyptian Baladi Orange": "#e8a025", // Red-Orange
  Murcott: "#fc6810", // Red-Orange
  Mandrien: "#fc6810", // Red-Orange

  Mango: "#fc6810", // Yellow
  "Fresh Peas": "#0A4300", // Blue
  Olives: "#DDDE40", // Lime Green
  "Grape Fruites": "#F06368", // Pink
  "Frozen Peas": "#5f9915", // Purple
  "Frozen Broccoli": "#5f9915", // Purple
  "Frozen Mango": "#E38302", // Purple
  "Frozen Strawberries": "#fc0d05",

  "Frozen Green Beans": "#5f9915", // Purple
  "Frozen Cauliflower": "#BE9659", // Purple
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
                <Link to={`/product/${product.id}`}>
                  <h3
                    className="text-center text-lg font-bold  "
                    style={{ color: colorsMap[product.name] || "#000" }}
                  >
                    {product.name}
                  </h3>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FreeModeSlider;
