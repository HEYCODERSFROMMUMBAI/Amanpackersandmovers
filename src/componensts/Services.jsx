import React from 'react'
import { FaTruck, FaBox, FaHandsHelping, FaWarehouse, FaRoute, FaDolly } from "react-icons/fa";
const services = [
    {
        icon: <FaTruck size={30} className="text-blue-500" />,
        title: "Local Moving",
        description: "Professional and reliable local moving services for a hassle-free experience.",
    },
    {
        icon: <FaBox size={30} className="text-green-500" />,
        title: "Packing Services",
        description: "High-quality packing solutions to secure your belongings during transit.",
    },
    {
        icon: <FaHandsHelping size={30} className="text-purple-500" />,
        title: "Corporate Relocation",
        description: "Efficient corporate moving services with minimal disruption to your business.",
    },
    {
        icon: <FaWarehouse size={30} className="text-yellow-500" />,
        title: "Storage Services",
        description: "Safe and secure storage facilities for short or long-term storage needs.",
    },
    {
        icon: <FaRoute size={30} className="text-red-500" />,
        title: "Interstate Moving",
        description: "Reliable interstate moving services across the country with experienced drivers.",
    },
    {
        icon: <FaDolly size={30} className="text-teal-500" />,
        title: "Furniture Assembly",
        description: "Expert assembly and disassembly services for furniture and large items.",
    },
];

const Services = () => {
    return (
        <div className="bg-gray-50 py-16" id='Services'>
            {/* Hero Section */}
            <div className="container mx-auto text-center mb-12 px-4 mt-10">
                <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
                    Our Services
                </h2>
                <p className="mt-4 text-gray-600 md:text-lg">
                    Aman Packers and Movers offers a range of reliable and professional moving services tailored to meet your needs.
                </p>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="flex items-center justify-center mb-4">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                            {service.title}
                        </h3>
                        <p className="text-gray-600 text-center">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services
