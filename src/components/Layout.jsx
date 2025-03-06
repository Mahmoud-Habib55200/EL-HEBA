import { Outlet, useLocation } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Partners from "./Partners";
import { useEffect, useState } from "react";

const Layout = () => {


 






  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // دالة لمراقبة موضع التمرير
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* إذا كنا في صفحة Home، يكون navbar شفافاً */}
      <NavBar transparent={location.pathname === "/"} />
      <Outlet />
      <Partners />
      <Footer />

      
      <div
        className={`rotate-90 bg-main_Color text-white rounded-full fixed z-40 bottom-4 right-2 text-5xl cursor-pointer shadow-lg hover:scale-110 
   duration-500 ease-in-out
  ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() =>
          scroll.scrollToTop({ duration: 1500, smooth: "easeInOutQuart" })
        }
      >
        <FaArrowCircleLeft className="px-3" />
      </div>
    </>
  );
};

export default Layout;
