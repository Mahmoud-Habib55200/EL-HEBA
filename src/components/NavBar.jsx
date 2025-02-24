import { Link } from "react-router-dom";
import { logo, LogoOrighinal } from "../assets/CER , QLYT";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const NavBar = ({ transparent }) => {

    const [isOpen, setIsOpen] = useState(false);

    const NavItems = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Products", path: "/products" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Media", path: "/media" },
    ];


    return (

        // Start of NavBar
        <div
            className={`${transparent ? "absolute bg-transparent" : "bg-[#23392D]"
                } top-0 left-0 w-full z-50    `}
        >

            {/* Container  */}
            <div className=" container mx-auto flex justify-between items-center p-4  ">
                {/* First Div Logo */}
                <div>
                    <Link to="/">
                        <img src={LogoOrighinal} alt="El-Heba Logo" className="w-[170px]" loading="lazy" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <nav>
                    <ul className="hidden lg:flex gap-6 text-white font-medium">
                        {NavItems.map((item) => (
                            <li key={item.id} className="cursor-pointer hover:translate-x-1 transition duration-500">
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>


                {/* Mobile Menu */}
                <div
                    className="lg:hidden relative cursor-pointer text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {!isOpen ? (
                        <FaBars fontSize="20px" />
                    ) : (
                        <IoClose fontSize="20px" />
                    )}
                </div>

                {/* Mobile Menu */}
                <div
                    className={`fixed top-0 right-0 z-50  w-[200px] h-[100vh] transform ${isOpen ? "translate-x-0" : "translate-x-full"
                        } transition-transform duration-500 ease-in-out bg-gray-900/40 rounded-lg backdrop-blur-md`}
                >
                    {/* Close Icon */}
                    <div
                        className="absolute top-4 left-2 text-white cursor-pointer w-full"
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="flex items-center justify-between rounded-full">
                            <IoClose fontSize="24px" />
                            <Link to='/'>
                                <img className="w-10 mr-3" src={logo} alt="" /></Link>
                        </div>
                    </div>

                    <ul className="flex flex-col gap-7 text-white px-4 mt-16">
                        {NavItems.map((item) => (
                            <li
                                key={item.id}
                                className="px-2 py-1 hover:backdrop-blur-md hover:translate-x-1   transition duration-500 rounded"
                            >
                                <Link to={item.path}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>

                    <div className="text-white flex flex-col mt-7 px-4 gap-4">
                        <button
                            className="border-glow  rounded-3xl"
                        >
                            Get Started
                        </button>
 
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NavBar;
