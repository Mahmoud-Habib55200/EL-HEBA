import { memo } from "react";
import { compony, finishMontg, why1, why2, why3, why4 } from "../assets/orange";

const data = [
  {
    title:
      "34,000 acres of citrus nurseries with advanced irrigation and fertilization technology.",
    image: why1,
    desc: "The 34,000-acre citrus nurseries use advanced irrigation and fertilization, ensuring healthier crops, efficient resources, and sustainable practices.",
  },
  {
    title: "World-class citrus production and export facilities.",
    image: why2,
    desc: "Featuring world-class citrus production and export facilities, these operations ensure high-quality fruit, efficient logistics, and global market reach.",
  },
  {
    title: "Commitment to sustainability and eco-friendly practices.",
    image: why3,
    desc: "Dedicated to sustainability, these facilities prioritize eco-friendly practices, promoting environmental conservation and responsible resource management for a greener future.",
  },
  {
    title: "Pioneers in agricultural innovation and quality.",
    image: why4,
    desc: "Leading in agricultural innovation, they prioritize quality, utilizing advanced techniques to set new standards in farming and productivity.",
  },
  {
    title: "Expansive supply chain network for global reach.",
    image: compony,
    desc: "With an expansive supply chain network, they ensure seamless distribution, enabling efficient global reach and timely delivery of products.",
  },
  {
    title: "Continuous innovation for superior products.",
    image: finishMontg,
    desc: "Driven by continuous innovation, they consistently deliver superior products, meeting evolving market demands with excellence and quality.",
  },
];

// Card Component
const WhyCard = memo(({ title, image,  desc }) => {
  return (
    <div
      className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden 
             hover:shadow-lg transition-transform transform "
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy" // Lazy Loading for better performance
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-main_Color mb-2 capitalize">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
});

const WhyHeba = () => {
  return (
    <section className="bg-[#f9f9f9] py-10 rounded-lg shadow-md">
      {/* Section Header */}
      <div className="text-center mb-10">
        <p className="text-main_Color text-[20px] font-bold uppercase">
          Why Choose El-Heba
        </p>
        <h2 className="text-3xl md:text-3xl font-extrabold text-main_Color mt-2">
          Ensuring Excellence from Seed to Table
        </h2>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <WhyCard
            key={index}
            title={item.title}
            image={item.image}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyHeba;
