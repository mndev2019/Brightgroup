import React from 'react';
import Heading from '../../Component/Heading';

function Process() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col items-center justify-center p-6">
            {/* Introduction Section */}
            <section className="text-center mb-20">

                <Heading title="♻️ Our Plastic Recycling Process" />
                <p className="text-gray-600 text-md max-w-2xl mx-auto animate-fade-in delay-100 mt-6">
                    At Bright Environmental Solutions Private Limited, we are committed to transforming plastic waste into valuable resources. Here's how we turn waste into wonder:
                </p>
            </section>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-7xl">
                {/* Step 1: Collection */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up delay-200">
                    <div className="text-5xl textorange mb-6 font-bold">1</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Collection</h2>
                    <p className="text-gray-600 mb-6">
                        We partner with local communities and businesses to collect plastic waste. Our dedicated teams ensure that waste is gathered efficiently and responsibly.
                    </p>

                </div>

                {/* Step 2: Sorting and Categorization */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up delay-300">
                    <div className="text-5xl textorange mb-6 font-bold">2</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Sorting and Categorization</h2>
                    <p className="text-gray-600 mb-6">
                        Collected plastic is sorted by type (e.g., PET, HDPE) and color. Advanced machinery and manual checks ensure accurate categorization.
                    </p>

                </div>

                {/* Step 3: Cleaning and Shredding */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up delay-400">
                    <div className="text-5xl textorange mb-6 font-bold">3</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Cleaning and Shredding</h2>
                    <p className="text-gray-600 mb-6">
                        The sorted plastic is thoroughly cleaned to remove contaminants. It is then shredded into small flakes for further processing.
                    </p>

                </div>

                {/* Step 4: Melting and Pelletizing */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up delay-500">
                    <div className="text-5xl textorange mb-6 font-bold">4</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Melting and Pelletizing</h2>
                    <p className="text-gray-600 mb-6">
                        The shredded plastic is melted and extruded into small pellets. These pellets serve as raw material for manufacturing new products.
                    </p>

                </div>

                {/* Step 5: Manufacturing New Products */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up delay-600">
                    <div className="text-5xl textorange mb-6 font-bold">5</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Manufacturing New Products</h2>
                    <p className="text-gray-600 mb-6">
                        The recycled plastic pellets are used to create eco-friendly products like furniture, packaging, and construction materials.
                    </p>

                </div>

                {/* Step 6: Distribution and Education */}
                <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up delay-700">
                    <div className="text-5xl textorange mb-6 font-bold">6</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Distribution and Education</h2>
                    <p className="text-gray-600 mb-6">
                        We distribute the recycled products to consumers and businesses while educating the public about the importance of recycling.
                    </p>

                </div>
            </div>

            {/* Call-to-Action Section */}
            <section className="mt-24 text-center animate-fade-in delay-800">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    Join Us in Building a Sustainable Future
                </h2>
                <p className="text-gray-600 text-xl mb-8 max-w-2xl mx-auto">
                    Together, we can reduce plastic waste and create a cleaner, greener planet. Start your journey with us today.
                </p>
                <a
                    href="https://www.unep.org/interactives/beat-plastic-pollution/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-orange-600 to-orange-600 text-white px-12 py-4 rounded-full hover:from-orange-700 hover:to-orange-700 transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                    Learn More About Our Mission
                </a>
            </section>
        </div>
    );
}

export default Process;