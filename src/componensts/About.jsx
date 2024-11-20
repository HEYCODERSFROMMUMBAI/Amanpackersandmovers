


// import React from 'react'
// import Img1 from '../assets/img1.jpg'
// import Img2 from '../assets/img2.jpg'
// import Img3 from '../assets/img3.jpg'
// import Img4 from '../assets/img4.jpg'
// import Img5 from '../assets/img5.jpg'
// import Img6 from '../assets/img6.jpg'
// import Img7 from '../assets/img7.jpg'
// import Img8 from '../assets/img8.jpg'
// import Img9 from '../assets/img9.jpg'

// const About = () => {
//     const teamImages = [
//         Img1,
//         Img2,
//         Img3,
//         Img4,
//         Img5,
//         Img6,
//         Img7,
//         Img8,
//         Img9,
//     ];

//     return (
//         <section className="py-16 px-4 bg-gray-50">
//             <div className="container mx-auto text-center mb-12">
//                 <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//                     Meet Our Team
//                 </h2>
//                 <p className="text-lg md:text-xl text-gray-600">
//                     Our team is made up of passionate and professional movers committed to providing exceptional service.
//                 </p>
//             </div>

//             {/* Adjust grid based on screen size */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
//                 {teamImages.map((image, index) => (
//                     <div
//                         key={index}
//                         className="relative bg-white shadow-lg rounded-lg overflow-hidden group transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
//                     >
//                         <img
//                             src={image}
//                             alt={`Team Member ${index + 1}`}
//                             className="w-full h-64 object-cover transition-opacity duration-500 group-hover:opacity-75"
//                         />
//                         <div className="p-4">
//                             <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                                 Team Member {index + 1}
//                             </h3>
//                             <p className="text-gray-600">Position</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// };

// export default About;

import React from 'react';
import Rimg1 from '../assets/rimg1.jpg';
import Img2 from '../assets/img2.jpg';
import Rimg2 from '../assets/rimg2.jpg';
import Img4 from '../assets/img4.jpg';
import Img5 from '../assets/img5.jpg';
import Img6 from '../assets/img6.jpg';
import Img7 from '../assets/img7.jpg';
import Rimg3 from '../assets/rimg3.jpg';
import Img9 from '../assets/img9.jpg';

const About = () => {
    const teamImages = [
        Rimg1,
        Img2,
        Rimg2,
        Img4,
        Img5,
        Img6,
        Img7,
        Rimg3,
        Img9,
    ];

    return (
        <section className="py-16 px-4 bg-gray-50" id='About'>
            {/* About Aman Packers and Movers */}
            <div className="container mx-auto text-center mb-12 mt-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    About Aman Packers and Movers
                </h2>
                <p className="text-lg md:text-xl text-gray-600">
                    Aman Packers and Movers is a professional moving company offering safe, efficient, and reliable moving services.
                    We are dedicated to making your moving experience as smooth and stress-free as possible.
                </p>
            </div>

            {/* Meet Our Team */}
            <div className="container mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Meet Our Team
                </h2>
                <p className="text-lg md:text-xl text-gray-600">
                    Our team is made up of passionate and professional movers committed to providing exceptional service.
                </p>
            </div>

            {/* Grid layout for Team Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {teamImages.map((image, index) => (
                    <div
                        key={index}
                        className="relative bg-white shadow-lg rounded-lg overflow-hidden group transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
                    >
                        <img
                            src={image}
                            alt={`Team Member ${index + 1}`}
                            className="w-full h-64 object-cover transition-opacity duration-500 group-hover:opacity-75"
                        />

                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;
