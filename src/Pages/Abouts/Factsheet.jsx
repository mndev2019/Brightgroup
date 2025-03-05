import React from 'react'
import Heading from '../../Component/Heading'

const Factsheet = () => {
    return (
        <>
            <section className='pb-3'>
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1 text-center">
                            <Heading title="Factsheet" />
                        </div>
                    </div>
                    <div className=" min-h-screen lg:p-8 md:p-4 p-0">
                        <div className="max-w-6xl mx-auto bg-white p-6 shadow-lg rounded-2xl">
                            <section>
                                <h2 className="lg:text-2xl md:text-xl text-lg font-semibold text-orange-500 mb-4">Basic Information</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-blue-50 p-4 rounded-xl">
                                        <h3 className="lg:text-lg text-md font-semibold">Nature of Business</h3>
                                        <p className="text-gray-700">Manufacturer</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-xl">
                                        <h3 className="lg:text-lg text-md font-semibold">Additional Business</h3>
                                        <p className="text-gray-700">Factory / Manufacturing</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-xl">
                                        <h3 className="lg:text-lg text-md font-semibold">Company CEO</h3>
                                        <p className="text-gray-700">Pritpal Bright</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-xl">
                                        <h3 className="lg:text-lg text-md font-semibold">Registered Address</h3>
                                        <p className="text-gray-700">
                                            1, Nivan, Plot No.96, S.V. Road, Opposite Podar International School, Khar West, Mumbai-400052, Maharashtra, India
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-xl">
                                        <h3 className="lg:text-lg text-md font-semibold">Total Number of Employees</h3>
                                        <p className="text-gray-700">11 to 25 People</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-xl">
                                        <h3 className="lg:text-lg text-md font-semibold">GST Registration Date</h3>
                                        <p className="text-gray-700">01-07-2017</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-xl">
                                        <h3 className="lg:text-lg text-md font-semibold">Legal Status of Firm</h3>
                                        <p className="text-gray-700">Limited Company</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-xl">
                                        <h3 className="lg:text-lg text-md font-semibold">Annual Turnover</h3>
                                        <p className="text-gray-700">5 - 25 Cr</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-xl">
                                        <h3 className="lg:text-lg text-md font-semibold">GST Partner Name</h3>
                                        <p className="text-gray-700">Surenderpal Singh Hardev Singh Bright, Pritpalsingh Surendar Singh Bright</p>
                                    </div>
                                </div>
                            </section>
                            <section>
                                <h2 className="lg:text-2xl md:text-xl text-lg font-semibold text-orange-500 mb-4 mt-4">Statutory Profile</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-blue-50 p-4 rounded-xl">
                                        <h3 className="lg:text-lg text-md font-semibold">
                                        Banker</h3>
                                        <p className="text-gray-700">AXIS BANK LTD</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-xl">
                                        <h3 className="lg:text-lg text-md font-semibold">GST No.</h3>
                                        <p className="text-gray-700">27AAECB4964F1ZM</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-xl">
                                        <h3 className="lg:text-lg text-md font-semibold">CIN No.</h3>
                                        <p className="text-gray-700">U90001MH2011PTC215803</p>
                                    </div>
                                   
                                </div>
                            </section>
                            <section>
                                <h2 className="lg:text-2xl md:text-xl text-lg font-semibold text-orange-500 mb-4 mt-4">Packaging/Payment and Shipment Details</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-blue-50 p-4 rounded-xl">
                                        <h3 className="lg:text-lg text-md font-semibold">
                                        Payment Mode</h3>
                                        <p className="text-gray-700">Cash , Cheque , DD</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-xl">
                                        <h3 className="lg:text-lg text-md font-semibold">Shipment Mode</h3>
                                        <p className="text-gray-700">By Road</p>
                                    </div>
                                   
                                   
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Factsheet
