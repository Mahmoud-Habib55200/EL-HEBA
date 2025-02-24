// Desc: Footer component of the website
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { logo } from "../assets/CER , QLYT";

const Footer = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white ">
      <div className="container mx-auto px-4 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <img src={logo} alt="El-Heba Logo" className="w-20 mb-4" />
            <p className="text-sm text-gray-400">
              At El-Heba, we combine tradition and innovation to deliver
              high-quality agricultural products with a commitment to
              sustainability and excellence.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <RouterLink to="/" className="hover:text-white transition duration-200">
                  Home
                </RouterLink>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("about")}
                  className="hover:text-white transition duration-200 cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("services")}
                  className="hover:text-white transition duration-200 cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("products")}
                  className="hover:text-white transition duration-200 cursor-pointer"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll("contact")}
                  className="hover:text-white transition duration-200 cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 text-sm">1234 Citrus Lane, Agri City</p>
            <p className="text-gray-400 text-sm">+1 (800) 123-4567</p>
            <p className="text-gray-400 text-sm">info@elheba.com</p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-200"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-200"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} El-Heba. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <RouterLink to="/terms" className="text-gray-400 hover:text-white transition duration-200 mr-4">
              Terms & Conditions
            </RouterLink>
            <RouterLink to="/privacy" className="text-gray-400 hover:text-white transition duration-200">
              Privacy Policy
            </RouterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
