import { createBrowserRouter, createRoutesFromElements,  Route, RouterProvider } from "react-router-dom";
 import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Media from "./pages/Media";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import ProductDetails from "./components/ProductDetails ";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {/* Route يستخدم Layout كهيكل رئيسي */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
