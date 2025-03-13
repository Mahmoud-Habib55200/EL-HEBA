import { useEffect } from "react";

 
const Media = () => {
  // Link when user click footer link
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  //
  return (
    <div id="media" className="w-full p-4 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Our Media
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6  ">
        <div className="w-full   bg-white rounded shadow-lg overflow-hidden">
          <iframe
            className="w-full h-[70vh]  rounded"
            src="https://www.youtube.com/embed/FrPDhfJTbAw?si=FB8gzc79uMJnvMAc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>{" "}
        <div className="w-full   bg-white rounded shadow-lg overflow-hidden">
          <iframe
            className="w-full h-[70vh]   rounded"
            src="https://www.youtube.com/embed/mOeHXMCn34U?si=EiV7pSmMzoSDykKk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default Media;
