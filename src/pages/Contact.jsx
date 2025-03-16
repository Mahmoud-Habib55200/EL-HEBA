import { Link } from "react-router-dom";
import { pngLogo } from "../assets/CER , QLYT";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useEffect } from "react";

const Contact = () => {
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
    <div id="contact" className="bg-green-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-green-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 text-lg">
            LEAVE A MESSAGE, We Love To Hear From You!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="bg-white shadow-2xl rounded p-8">
            <div className="flex justify-center items-center">
              <img className="w-40 " src={pngLogo} alt="" />{" "}
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              El-Heba Company specializes in the production, packaging, and
              export of fresh and frozen fruits, as well as frozen vegetables,
              to markets worldwide.
            </p>

            <h4 className="text-2xl font-semibold text-green-600 mb-4">
              Keep in touch
            </h4>

            <ul className="space-y-4 text-lg">
              <li className="text-gray-700 flex items-center gap-3">
                <FaMapMarkerAlt className="text-green-600 text-xl" />
                <span>Second Industrial Area, Ismailia, Egypt</span>
              </li>
              <li className="text-gray-700 flex items-center gap-3">
                <FaPhoneAlt className="text-green-600 text-xl" />
                <span>+20 1063133591 | +20 1285555308</span>
              </li>
              <li className="text-gray-700 flex items-center gap-3">
                <FaEnvelope className="text-green-600 text-xl" />
                <Link
                  to="mailto:info@alheba.net"
                  className="text-blue-600 hover:text-blue-800 transition duration-300  "
                >
                  info@alheba.net
                </Link>
              </li>
              <li className="text-gray-700 flex items-center gap-3">
                <FaEnvelope className="text-green-600 text-xl" />
                <Link
                  to="mailto:info@alheba.net"
                  className="text-blue-600 hover:text-blue-800 transition duration-300  "
                >
                  <strong className="text-gray-500">CEO: </strong>
                  Mostafa-derb@alheba.net
                </Link>
              </li>
            </ul>
          </div>

          {/* Google Map */}
          <div className="overflow-hidden rounded  shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d835.2180818957169!2d32.218962203048605!3d30.583404428245714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f85d005c359011%3A0xdcb84dff514a1a7a!2sEl-Heba%20For%20agriculture%20and%20development%20Co.!5e1!3m2!1sar!2seg!4v1740384187494!5m2!1sar!2seg"
              width="100%"
              height="500"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
