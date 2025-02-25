import React, { useState } from "react";
import { videoStart, thirdVideo, secondVideo } from "../assets/video";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect"; // استيراد المكتبة
 
 


const videoData = [
  { video: secondVideo, title: "Harvesting quality for you" },
  { video: thirdVideo, title: "Explore our citrus fields" },
  {
    video: videoStart,
    title: "Welcome El Heba For Agricultural Development",
  },
];

const DynamicVideoPlayer = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // يتم تشغيل الفيديو التالي عند انتهاء الفيديو الحالي
  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoData.length);
  };

  return (
    <section className="  relative xs:h-screen  lg:h-screen w-full">
      {/* فيديو مع خلفية سوداء */}
      <video
        src={videoData[currentVideoIndex].video}
        className="object-cover w-full h-full"
        autoPlay
        muted
        loop={false}
        playsInline
        onEnded={handleVideoEnd}
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div
        className="absolute inset-0 top-32 flex items-center justify-center text-white"
        data-swiper-parallax="100"
      >
        <h2 className="sm:leading-relaxed sm:text-3xl lg:text-4xl   font-bold uppercase text-center max-w-lg leading-relaxed">
          {/* تطبيق تأثير الكتابة */}
          <Typewriter
            options={{
              strings: [videoData[currentVideoIndex].title], // النص الخاص بالفيديو الحالي
              autoStart: true,
              loop: false, // عدم تكرار النص
              delay: 100, // سرعة الكتابة
            }}
          />
        </h2>
      </div>

      {/* أزرار التحكم */}
      <div className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2 gap-3 z-40 grid sm:grid-cols-1 lg:grid-cols-2">
        <button
          aria-label="Get started with our citrus products"
          className="border  border-white bg-gray-900/20 backdrop-blur-md font-medium text-white px-10 py-3 rounded"
        >
          <Link to="/products" title="Explore our citrus products">
            Get Started
          </Link>
        </button>  <button
          aria-label="Get started with our citrus products"
          className="border border-white bg-gray-900/20 backdrop-blur-md font-medium text-white px-10 py-3 rounded"
        >
          <Link to="/contact" title="Explore our citrus products">
           Contact Us
          </Link>
        </button>
       
      </div>

      

    </section>
  );
};

export default DynamicVideoPlayer;
