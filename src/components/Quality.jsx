import React, { useState, useEffect, useRef } from "react";
import { cer1, cer10, cer2, cer3, cer4, cer5, cer6, cer7, cer8, cer9, logo } from "../assets/CER , QLYT";
import { baladi, mandrien2 } from "../assets/orange";
 

export const creteficate = [
  { image: cer1 },
  { image: cer2 },
  { image: cer3 },
  { image: cer4 },
  { image: cer5 },
  { image: cer6 },
  { image: cer7 },
  { image: cer8 },
  { image: cer9 },
  { image: cer10 },
];
const qualityData = [
  { name: "Freshness", percentage: 95, color: "#28a745" },
  { name: "Taste", percentage: 98, color: "#ffc107" },
  { name: "Packaging", percentage: 96, color: "#17a2b8" },
  { name: "Eco-Friendly", percentage: 89, color: "#28a745" },
  { name: "Global Reach", percentage: 95, color: "#fd7e14" },
];

const QualitySection = () => {
  const [progress, setProgress] = useState(qualityData.map(() => 0));
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      qualityData.forEach((item, index) => {
        const interval = setInterval(() => {
          setProgress((prevProgress) => {
            const newProgress = [...prevProgress];
            if (newProgress[index] < item.percentage) {
              newProgress[index] += 1;
            } else {
              clearInterval(interval);
            }
            return newProgress;
          });
        }, 20);
      });
    }
  }, [isVisible]);

  return (
    <div className="bg-[#FFFFFF]">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[20px] text-main_Color my-3 font-bold text-center uppercase">
            Products quality control
          </h1>
        </div>
        <div className="container mx-auto grid lgl:grid-cols-[2fr_1fr] gap-10 ">
          <div>
            <div ref={sectionRef} className="  py-10 px-6 rounded  ">
              <div className="space-y-6 max-w-2xl mx-auto">
                <h1 className="text-main_Color    text-3xl font-extrabold mb-6">
                  We sincerely value and hold your trust in the highest regard.
                </h1>
                <p className="text-[15px] text-gray-600">
                  We are committed to maintaining the highest standards of
                  quality control at every step of our production journey, from
                  our farms to delivering excellence to our clients.
                </p>
              </div>
              <div className="space-y-6 max-w-2xl mx-auto my-7">
                {qualityData.map((item, index) => (
                  <div
                    key={index}
                    className={`mb-4 fade-in ${isVisible ? "visible" : ""}`}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-lg font-semibold">{item.name}</span>
                      <span className="text-lg font-semibold text-main_Color">
                        {progress[index]}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${progress[index]}%`,
                          backgroundColor: item.color,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-center items-center ">
              {" "}
              <img src={mandrien2} alt="" />
            </div>

            <div className="grid grid-cols-4 gap-4 mt-4   ">
              {creteficate.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center w-20"
                >
                  <img src={item.image} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualitySection;
