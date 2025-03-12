import React from 'react';
import { FaLeaf, FaRecycle, FaShoppingBag, FaHandsHelping, FaWater, FaTree } from 'react-icons/fa';
import Heading from '../../Component/Heading';

const solutions = [
    { icon: <FaRecycle className="text-green-600 text-5xl mb-4" />, title: "Recycle Properly", description: "Ensure plastics are properly sorted and recycled to minimize environmental impact." },
    { icon: <FaShoppingBag className="text-yellow-600 text-5xl mb-4" />, title: "Use Reusable Bags", description: "Replace plastic bags with cloth or jute bags when shopping." },
    { icon: <FaHandsHelping className="text-red-600 text-5xl mb-4" />, title: "Participate in Cleanups", description: "Join or organize beach and community clean-up events." },
    { icon: <FaWater className="text-blue-600 text-5xl mb-4" />, title: "Say No to Plastic Bottles", description: "Use refillable bottles and avoid single-use plastics." },
    { icon: <FaTree className="text-green-800 text-5xl mb-4" />, title: "Support Sustainable Brands", description: "Choose products from companies that use eco-friendly packaging." },
    { icon: <FaLeaf className="text-green-500 text-5xl mb-4" />, title: "Educate & Advocate", description: "Spread awareness and encourage others to adopt plastic-free habits." }
];

const SolutionCard = ({ icon, title, description }) => (
    <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center border border-blue-200">
        {icon}
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
    </div>
);

function Solution() {
    return (
        <section className="bg-blue-50 min-h-screen flex flex-col items-center justify-center px-6 py-12 space-y-12">

            {/* Header Section */}
            <div className="text-center">
                <Heading title="🌱 Solutions to Prevent Plastic Pollution" />
                <p className="text-gray-700 mt-4 max-w-2xl">
                    Plastic pollution is a global crisis, but we can take steps to reduce its impact. Here are practical solutions to help prevent plastic waste and protect our environment.
                </p>
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
                {solutions.map((solution, index) => (
                    <SolutionCard key={index} {...solution} />
                ))}
            </div>

            {/* Call-to-Action Section */}
            <div className="text-center">
                <a
                    href="https://www.unep.org/interactives/beat-plastic-pollution/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bgorange text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Join the Movement
                </a>
            </div>
        </section>
    );
}

export default Solution;
