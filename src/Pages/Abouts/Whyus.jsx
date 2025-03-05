import React from 'react'
import Heading from '../../Component/Heading'

const Whyus = () => {
    return (
        <>
            <section className=' lg:pb-10 pb-5'>
                <div className="max-w-7xl mx-auto p-8 bg-white shadow-lg rounded-lg ">
                    <div className="grid grid-cols-1 pb-3">
                        <div className="col-span-1">
                            <Heading title="  Why Us?" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 gap-4">
                        {/* Left Section: Intro & Heading */}
                        <div className="col-span-1">
                            <p className=" md:text-[18px] text-[15px] text-justify mb-3">
                                Since our origin in this market, we are actively committed towards providing our prestigious patrons with a remarkable range of services.
                            </p>
                            <h3 className="lg:text-xl text-lg textorange font-semibold mb-4">
                                Few reasons which are responsible for our development in this domain are as follow:
                            </h3>
                        </div>

                        {/* Right Section: List Items */}
                        <div className="col-span-1">
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Extremely reliable range of products",
                                    "Well managed services",
                                    "Highly experienced team of professionals",
                                    "Strict quality standards",
                                    "Timely delivery",
                                    "Strong vendor base",
                                    "Wide distribution network",
                                    "Huge warehouse",
                                    "Customized packaging",
                                    "Competitive price structure",
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg shadow-sm hover:bg-orange-50">
                                        <span className="text-blue-500">
                                            <i className="fas fa-check-circle"></i>
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
          

        </>
    )
}

export default Whyus
