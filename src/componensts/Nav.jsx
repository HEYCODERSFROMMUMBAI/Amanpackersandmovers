

import { useState } from "react";

import Logo from '../assets/logo2.jpg';


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    // WhatsApp and call numbers
    const whatsappNumber = " +91 8369262375";
    const phoneNumber = "8369262375";

    return (
        <nav className="bg-white shadow-md p-4 fixed w-full z-50">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo and Title */}
                <div className="flex items-center">
                    <img
                        src={Logo}
                        alt="Aman Packers and Movers Logo"
                        className="h-12 w-auto mr-3"
                    />
                    <span className="text-gray-700 font-bold text-xl">
                        Aman Packers and Movers
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
                    <a href="#Home" className="hover:text-red-600 transition">
                        Home
                    </a>
                    <a href="#Services" className="hover:text-red-600 transition">
                        Services
                    </a>
                    <a href="#About" className="hover:text-red-600 transition">
                        About Us
                    </a>
                    <a
                        href="#Contact"
                        className="hover:text-red-600 transition"

                    >
                        Contact
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="text-gray-700 md:hidden focus:outline-none "
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden z-50 mt-10">
                        <ul className="flex flex-col items-center text-gray-700 font-medium py-4">
                            <li className="py-2 border-b w-full text-center">
                                <a
                                    href="#Home"
                                    className="block w-full hover:text-red-600 transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </a>
                            </li>
                            <li className="py-2 border-b w-full text-center">
                                <a
                                    href="#Services"
                                    className="block w-full hover:text-red-600 transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Services
                                </a>
                            </li>
                            <li className="py-2 border-b w-full text-center">
                                <a
                                    href="#About"
                                    className="block w-full hover:text-red-600 transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    About Us
                                </a>
                            </li>
                            <li className="py-2 border-b w-full text-center">
                                <a
                                    href="#Contact"
                                    className="block w-full hover:text-red-600 transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contact Us
                                </a>
                            </li>

                        </ul>
                    </div>
                )}


            </div>
        </nav>
    );
};

export default Nav;
