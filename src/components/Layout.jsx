import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Partners from "./Partners";


const Layout = () => {
     const location = useLocation();

     return (
          <>
               {/* إذا كنا في صفحة Home، يكون navbar شفافاً */}
               <NavBar transparent={location.pathname === "/"} />
               <Outlet />
               <Partners />
              

               <Footer />
          </>
     );
};

export default Layout;
