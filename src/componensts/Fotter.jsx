
import React from 'react';
import Logo from '../assets/logo2.jpg';

const Fotter = () => {
    return (
        <footer className="bg-zinc-200 text-black py-8 shadow-md" id='Fotter'>
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Logo and Company Info */}
                    <div className="text-center md:text-left">
                        <img
                            src={Logo}
                            alt="Aman Packers and Movers Logo"
                            className="h-16 w-auto mx-auto md:mx-0"
                        />
                        <h2 className="font-bold text-xl mt-2">Aman Packers and Movers</h2>
                        <p className="text-sm mt-4">
                            We offer reliable and professional packing and moving services across the country.
                            Trust us to make your relocation smooth, efficient, and stress-free.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="text-center">
                        <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                        <p>Email: <a href="mailto:amanmovers1@gmail.com" className="text-red-600 hover:underline">amanmovers1@gmail.com</a></p>
                        <p>Phone: +91 9930655571 / 9222633371</p>
                        <p>Support: 9:00 AM - 7:00 PM (Mon - Sun)</p>
                    </div>

                    {/* Address Section */}
                    <div className="text-center md:text-right">
                        <h3 className="font-semibold text-lg mb-4">Office address</h3>
                        <address className="not-italic text-sm">
                            Gala No 6, Shree Swami Samarth CHS, <br />
                            Regency Estate Rd, near Church, <br />
                            Prayag Nagar, Dawadi, Dombivli,<br />
                            Maharashtra 421201
                        </address>
                    </div>
                </div>

                {/* Horizontal Divider */}
                <div className="border-t border-gray-200 mt-6 pt-4 text-center">
                    <p className="text-xs text-gray-600">
                        &copy; 2024 Aman Packers and Movers Pvt. Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Fotter;
