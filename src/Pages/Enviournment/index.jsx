import React from 'react';
import { FaLeaf, FaTrashAlt, FaRecycle } from 'react-icons/fa';
import Heading from '../../Component/Heading';

function Environment() {
    return (
        <>
            <section className="bg-green-50 flex flex-col items-center justify-center  md:px-6 py-12 space-y-12">

                {/* Header Section */}
                <div className="text-center">
                    <div className="flex justify-center items-center mb-4">
                        <FaLeaf className="text-green-600 text-5xl" />
                    </div>
                    <Heading title="Say No to Plastic!" />

                    <p className="text-gray-700 mt-4 max-w-xl mx-auto text-sm md:text-base">
                        Plastic pollution is one of the biggest threats to our environment. It harms wildlife,
                        pollutes oceans, and takes centuries to decompose. We must take action now to reduce plastic waste
                        and protect our planet.
                    </p>
                </div>

                {/* Information Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:max-w-6xl max-w-4xl w-full px-4">
                    <div className="p-6 bg-green-100 rounded-lg shadow-md flex flex-col items-center text-center">
                        <FaTrashAlt className="text-red-600 text-4xl mb-2" />
                        <p className="text-gray-700 font-semibold">Avoid Single-Use Plastic</p>
                        <p className="text-gray-600 text-sm mt-2">Single-use plastics contribute heavily to pollution. Choose reusable alternatives.</p>
                    </div>
                    <div className="p-6 bg-green-100 rounded-lg shadow-md flex flex-col items-center text-center">
                        <FaRecycle className="text-blue-600 text-4xl mb-2" />
                        <p className="text-gray-700 font-semibold">Recycle and Reuse</p>
                        <p className="text-gray-600 text-sm mt-2">Recycling helps reduce waste in landfills and oceans, keeping the planet cleaner.</p>
                    </div>
                    <div className="p-6 bg-green-100 rounded-lg shadow-md flex flex-col items-center text-center">
                        <FaLeaf className="text-green-600 text-4xl mb-2" />
                        <p className="text-gray-700 font-semibold">Choose Eco-friendly Products</p>
                        <p className="text-gray-600 text-sm mt-2">Opt for biodegradable and sustainable alternatives to reduce plastic waste.</p>
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <main className="bg-green-50 flex flex-col items-center justify-center px-4 py-12">
                <header className="text-center w-full mb-12">
                    <Heading title="🌍 The Impact of Plastic on Our Environment" />
                    <p className="mt-4 text-gray-700 text-sm md:text-base max-w-[90%] md:max-w-[80%] mx-auto">
                        Plastic pollution is one of the most urgent environmental challenges today. Every year, millions of tons of plastic waste enter our oceans, endangering marine life and ecosystems. Let's explore the key facts and how we can make a difference.
                    </p>
                </header>


                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl px-4">

                    {/* Article 1: Plastic Waste */}
                    <article className="bg-white rounded-lg shadow-lg p-6 md:p-8 group transition-all duration-300 hover:bg-[#fa8f108f]">
                        <h2 className="text-xl md:text-2xl font-semibold textorange mb-4 group-hover:text-white transition-all duration-300">
                            🚯 Plastic Waste
                        </h2>
                        <p className="text-gray-700 text-sm md:text-base group-hover:text-white transition-all duration-300">
                            Over 8 million tons of plastic are dumped into our oceans annually. This waste breaks down into microplastics, which marine life ingests, leading to severe environmental harm.
                        </p>
                    </article>

                    {/* Article 2: Harm to Wildlife */}
                    <article className="bg-white rounded-lg shadow-lg p-6 md:p-8 group transition-all duration-300 hover:bg-[#fa8f108f]">
                        <h2 className="text-xl md:text-2xl font-semibold textorange mb-4 group-hover:text-white transition-all duration-300">
                            🐢 Harm to Wildlife
                        </h2>
                        <p className="text-gray-700 text-sm md:text-base group-hover:text-white transition-all duration-300">
                            Marine animals such as turtles, seabirds, and whales often ingest or become entangled in plastic waste. This leads to injuries, suffocation, and even death.
                        </p>
                    </article>

                    {/* Article 3: Climate Impact */}
                    <article className="bg-white rounded-lg shadow-lg p-6 md:p-8 group transition-all duration-300 hover:bg-[#fa8f108f]">
                        <h2 className="text-xl md:text-2xl font-semibold textorange mb-4 group-hover:text-white transition-all duration-300">
                            🌡️ Climate Impact
                        </h2>
                        <p className="text-gray-700 text-sm md:text-base group-hover:text-white transition-all duration-300">
                            Plastic production and incineration contribute significantly to greenhouse gas emissions, exacerbating climate change. Reducing plastic consumption can help combat this crisis.
                        </p>
                    </article>

                    {/* Article 4: What You Can Do */}
                    <article className="bg-white rounded-lg shadow-lg p-6 md:p-8 group transition-all duration-300 hover:bg-[#fa8f108f]">
                        <h2 className="text-xl md:text-2xl font-semibold textorange mb-4 group-hover:text-white transition-all duration-300">
                            🌱 What You Can Do
                        </h2>
                        <p className="text-gray-700 text-sm md:text-base group-hover:text-white transition-all duration-300">
                            Reduce your plastic footprint by choosing reusable bags, bottles, and containers. Support policies that ban single-use plastics and encourage recycling initiatives.
                        </p>
                    </article>

                </section>



                <footer className="text-center mt-8">
                    <a
                        href="https://www.unep.org/interactives/beat-plastic-pollution/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bgorange text-white px-6 py-3  rounded-lg hover:bg-orange-600 transition duration-300"
                        role="button"
                        aria-label="Learn More About Plastic Pollution"
                    >
                        Learn More About Plastic Pollution
                    </a>
                </footer>

            </main>
        </>
    );
}

export default Environment;



