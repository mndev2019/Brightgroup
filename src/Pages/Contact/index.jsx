import React from 'react'
import Heading from '../../Component/Heading'
import { IoCallOutline, IoLocationOutline, IoPersonCircleOutline } from 'react-icons/io5'

const Contact = () => {
    return (
        <>
            <section className='py-10'>
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1 text-center">
                            <Heading title="Contact Us" />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-4 grid-cols-1 pt-10 gap-4">
                        <div className="lg:col-span-2 col-span-1">
                            <div className="w-full h-full shadow-[0px_0px_20px_rgba(0,0,0,0.1)] p-4 justify-items-center">
                                <div className="icon h-[60px] w-[60px] rounded-full border-2 border-dotted border-[#e87e00] items-center justify-center flex">
                                    <IoLocationOutline className='text-[#e87e00] text-[30px]' />
                                </div>
                                <h3 className='text-[18px] font-[700] my-[10px]'>Address</h3>
                                <p className='text-[14px] font-[500]'>
                                    1, Nivan, Plot No.96, S.V. Road
                                </p>
                                <p className='text-[14px] font-[500]'>
                                    Khar West, Mumbai - 400052
                                </p>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full h-full shadow-[0px_0px_20px_rgba(0,0,0,0.1)] p-4 justify-items-center">
                                <div className="icon h-[60px] w-[60px] rounded-full border-2 border-dotted border-[#e87e00] items-center justify-center flex">
                                    <IoCallOutline className='text-[#e87e00] text-[30px]' />
                                </div>
                                <h3 className='text-[18px] font-[700] my-[10px]'>Call Us</h3>
                                <p className='text-[14px] font-[500]'>
                                    08046032371
                                </p>

                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full h-full shadow-[0px_0px_20px_rgba(0,0,0,0.1)] p-4 justify-items-center">
                                <div className="icon h-[60px] w-[60px] rounded-full border-2 border-dotted border-[#e87e00] items-center justify-center flex">
                                    <IoPersonCircleOutline className='text-[#e87e00] text-[30px]' />
                                </div>
                                <h3 className='text-[18px] font-[700] my-[10px]'>Contact Person</h3>
                                <p className='text-[14px] font-[500]'>
                                    Pritpal Bright (CEO)
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pt-5">
                        <div className="col-span-1">
                            <div className="w-full h-full">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093697!2d144.95373631531672!3d-37.81627944202139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727b7f5744384a!2sMelbourne%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sin!4v1631342009473!5m2!1sen!2sin"
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="w-full h-full bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] px-5 py-8">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e87e00]"
                                />
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    class="w-full p-3 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e87e00]"
                                />
                                <textarea
                                    placeholder="Message"
                                    rows="6"
                                    class="w-full p-3 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e87e00]"
                                ></textarea>
                                <button
                                    class="mt-6 lg:px-6 px-3 lg:py-3 py-2 bg-[#e87e00] text-white rounded-full  transition cursor-pointer"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
