


// import React from 'react';
// import Logo from '../assets/logo2.jpg';
// import Boximg from '../assets/boxman.jpg';
// import Family from '../assets/familypacking.jpg';
// import Items from '../assets/itenms.jpg';
// import Tapeimg from '../assets/tape.jpg';

// const Home = () => {
//     return (
//         <div className="bg-gray-50 py-12 " id='Home'>
//             <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 relative">
//                 {/* Header Section */}
//                 <div className="bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg shadow-sm flex flex-col md:flex-row items-center md:items-start md:justify-between relative">
//                     {/* Text Content */}
//                     <div className="text-center md:text-left md:pr-4 flex-1">
//                         <h1 className="text-3xl font-bold text-red-600 mb-4">
//                             Moving Homes for the First Time?
//                         </h1>
//                         <p className="text-gray-700 text-lg">
//                             Offering storage and packing solutions to take care of your precious belongings
//                             and ensure a smooth move for you.
//                         </p>
//                     </div>
//                     {/* Logo */}
//                     <div className="mt-4 md:mt-0">
//                         <img
//                             src={Logo}
//                             alt="Company Logo"
//                             className="h-16 md:h-20 w-auto mx-auto md:mx-0"
//                         />
//                     </div>
//                 </div>

//                 {/* Images Section */}
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
//                     <div className="flex flex-col items-center">
//                         <img
//                             src={Boximg}
//                             alt="Worker with box"
//                             className="w-28 h-28 rounded-full object-cover border-2 border-gray-300 shadow-sm hover:scale-105 transform transition-all"
//                         />
//                         <p className="mt-2 text-gray-600 text-sm">Professional Packing</p>
//                     </div>
//                     <div className="flex flex-col items-center">
//                         <img
//                             src={Items}
//                             alt="Packing items"
//                             className="w-28 h-28 rounded-full object-cover border-2 border-gray-300 shadow-sm hover:scale-105 transform transition-all"
//                         />
//                         <p className="mt-2 text-gray-600 text-sm">Premium Supplies</p>
//                     </div>
//                     <div className="flex flex-col items-center">
//                         <img
//                             src={Family}
//                             alt="Family packing"
//                             className="w-28 h-28 rounded-full object-cover border-2 border-gray-300 shadow-sm hover:scale-105 transform transition-all"
//                         />
//                         <p className="mt-2 text-gray-600 text-sm">Family Assistance</p>
//                     </div>
//                     <div className="flex flex-col items-center">
//                         <img
//                             src={Tapeimg}
//                             alt="Tape dispenser"
//                             className="w-28 h-28 rounded-full object-cover border-2 border-gray-300 shadow-sm hover:scale-105 transform transition-all"
//                         />
//                         <p className="mt-2 text-gray-600 text-sm">Secure Packing</p>
//                     </div>
//                 </div>

//                 {/* Call-to-Action Section */}
//                 <div className="bg-red-600 text-white text-center py-6 rounded-lg mt-10 shadow-lg">
//                     <h2 className="text-2xl font-bold">Need Help with Your Move?</h2>
//                     <p className="mt-2">Call us now for hassle-free packing and moving services.</p>
//                     <a
//                         href="tel:+919222633371"
//                         className="inline-block mt-4 px-8 py-3 bg-white text-red-600 font-medium rounded-lg shadow hover:bg-gray-100 transition"
//                     >
//                         Contact: +91 9930655571 / 9222633371
//                     </a>
//                 </div>

//                 {/* WhatsApp Icon */}
//                 <a
//                     href="https://wa.me/919930655571"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="fixed bottom-5 right-5 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition"
//                 >
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                         className="w-6 h-6"
//                     >
//                         <path d="M20.52 3.47A12.06 12.06 0 0 0 12.06.94 12 12 0 0 0 1.53 17.69l-1.4 5.13a1 1 0 0 0 1.2 1.2l5.13-1.4A12 12 0 0 0 20.52 3.47Zm-8.46 19A10 10 0 0 1 3.5 17.08L3 17 1.5 22.5 7 21.09a10 10 0 1 1 5.06 1.44Zm5.63-7.33c-.23-.12-1.35-.67-1.56-.74s-.36-.12-.52.12-.6.74-.74.89-.27.18-.5.06a8.2 8.2 0 0 1-2.44-1.49 9 9 0 0 1-1.66-2.07c-.17-.28 0-.42.13-.58.13-.13.29-.35.44-.52a2 2 0 0 0 .29-.49.47.47 0 0 0 0-.5c-.05-.12-.52-1.24-.71-1.7s-.37-.37-.52-.37h-.43a.83.83 0 0 0-.61.28c-.21.23-.8.78-.8 1.9s.82 2.19.94 2.34a15.41 15.41 0 0 0 4.1 3.33 13.77 13.77 0 0 0 1.37.5 3.25 3.25 0 0 0 1.5.09c.45-.07 1.35-.55 1.55-1.07s.19-1 .14-1.08-.2-.11-.44-.23Z" />
//                     </svg>
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default Home;
import React from 'react';
import Logo from '../assets/logo2.jpg';
import Boximg from '../assets/boxman.jpg';
import Family from '../assets/familypacking.jpg';
import Items from '../assets/itenms.jpg';
import Tapeimg from '../assets/tape.jpg';

const Home = () => {
    return (
        <div className="bg-gray-50 py-12 " id='Home'>
            <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 relative">
                {/* Header Section */}
                <div className="bg-gradient-to-r from-gray-100 to-white p-8 rounded-lg shadow-sm flex flex-col md:flex-row items-center md:items-start md:justify-between relative">
                    {/* Text Content */}
                    <div className="text-center md:text-left md:pr-4 flex-1">
                        <h1 className="text-3xl font-bold text-red-600 mb-4">
                            Moving Homes for the First Time?
                        </h1>
                        <p className="text-gray-700 text-lg">
                            Offering storage and packing solutions to take care of your precious belongings
                            and ensure a smooth move for you.
                        </p>
                    </div>
                    {/* Logo */}
                    <div className="mt-4 md:mt-0">
                        <img
                            src={Logo}
                            alt="Company Logo"
                            className="h-16 md:h-20 w-auto mx-auto md:mx-0"
                        />
                    </div>
                </div>

                {/* Images Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    <div className="flex flex-col items-center">
                        <img
                            src={Boximg}
                            alt="Worker with box"
                            className="w-28 h-28 rounded-full object-cover border-2 border-gray-300 shadow-sm hover:scale-105 transform transition-all"
                        />
                        <p className="mt-2 text-gray-600 text-sm">Professional Packing</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src={Items}
                            alt="Packing items"
                            className="w-28 h-28 rounded-full object-cover border-2 border-gray-300 shadow-sm hover:scale-105 transform transition-all"
                        />
                        <p className="mt-2 text-gray-600 text-sm">Premium Supplies</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src={Family}
                            alt="Family packing"
                            className="w-28 h-28 rounded-full object-cover border-2 border-gray-300 shadow-sm hover:scale-105 transform transition-all"
                        />
                        <p className="mt-2 text-gray-600 text-sm">Family Assistance</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src={Tapeimg}
                            alt="Tape dispenser"
                            className="w-28 h-28 rounded-full object-cover border-2 border-gray-300 shadow-sm hover:scale-105 transform transition-all"
                        />
                        <p className="mt-2 text-gray-600 text-sm">Secure Packing</p>
                    </div>
                </div>

                {/* Call-to-Action Section */}
                <div className="bg-red-600 text-white text-center py-6 rounded-lg mt-10 shadow-lg">
                    <h2 className="text-2xl font-bold">Need Help with Your Move?</h2>
                    <p className="mt-2">Call us now for hassle-free packing and moving services.</p>
                    <a
                        href="tel:+919222633371"
                        className="inline-block mt-4 px-8 py-3 bg-white text-red-600 font-medium rounded-lg shadow hover:bg-gray-100 transition"
                    >
                        Contact: +91 9930655571 / 9222633371
                    </a>
                </div>

                {/* WhatsApp Icon */}
                <a
                    href="https://wa.me/919930655571"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-5 right-16 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                    >
                        <path d="M20.52 3.47A12.06 12.06 0 0 0 12.06.94 12 12 0 0 0 1.53 17.69l-1.4 5.13a1 1 0 0 0 1.2 1.2l5.13-1.4A12 12 0 0 0 20.52 3.47Zm-8.46 19A10 10 0 0 1 3.5 17.08L3 17 1.5 22.5 7 21.09a10 10 0 1 1 5.06 1.44Zm5.63-7.33c-.23-.12-1.35-.67-1.56-.74s-.36-.12-.52.12-.6.74-.74.89-.27.18-.5.06a8.2 8.2 0 0 1-2.44-1.49 9 9 0 0 1-1.66-2.07c-.17-.28 0-.42.13-.58.13-.13.29-.35.44-.52a2 2 0 0 0 .29-.49.47.47 0 0 0 0-.5c-.05-.12-.52-1.24-.71-1.7s-.37-.37-.52-.37h-.43a.83.83 0 0 0-.61.28c-.21.23-.8.78-.8 1.9s.82 2.19.94 2.34a15.41 15.41 0 0 0 4.1 3.33 13.77 13.77 0 0 0 1.37.5 3.25 3.25 0 0 0 1.5.09c.45-.07 1.35-.55 1.55-1.07s.19-1 .14-1.08-.2-.11-.44-.23Z" />
                    </svg>
                </a>

                {/* Call Icon */}
                <a
                    href="tel:+919930655571"
                    className="fixed bottom-5 right-5 bg-blue-500 text-white rounded-full p-4 shadow-lg hover:bg-blue-600 transition z-50"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                    >
                        <path d="M6.62 10.79a15.81 15.81 0 0 0 6.18 6.17l2.11-2.11a1.38 1.38 0 0 1 1.39-.34l3.4 1.4a1.38 1.38 0 0 1 .81 1.4c-.41 5.01-2.7 7.64-7.7 7.64-4.43 0-7.39-2.73-8.07-2.99a1.38 1.38 0 0 1-.34-1.39l1.4-3.4a1.38 1.38 0 0 1 1.4-.81l2.11 2.11a15.81 15.81 0 0 0 6.17-6.18l-1.8-3.24c-1.13 0-.63 1.3 0 1.8z" />
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Home;

