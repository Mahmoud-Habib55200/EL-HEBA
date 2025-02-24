 
const Banner = ({ title, description, backgroundImage }) => {
     return (
          <div
               className="relative w-full h-[60vh] flex items-center justify-center text-center text-white"
               style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
               }}
          >
               <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
               <div className="relative z-10 px-4">
                    <h1 className="text-4xl font-bold uppercase">{title}</h1>
                    <p className="mt-4 text-lg">{description}</p>
               </div>
          </div>
     );
};

export default Banner;
