import React from 'react'
import Heading from '../../Component/Heading'
// import category from '../../assets/Image/category1.webp'
import dieseloil from '../../assets/Image/dieseloil.jpg'
import pyrolysisoil from '../../assets/Image/pyrolysisoil.jpg'
import carbonblack from '../../assets/Image/carbonblack.jpg'
import { FaCheckCircle } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Categories = () => {
    AOS.init();
    return (
        <>
            <section className='py-10'>
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1 text-center">
                            <Heading title="Pyrolysis  And Diesel Oil" />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-8 pt-10">

                        <div className="col-span-1" data-aos="fade-right" data-aos-duration="3000">
                            <div className="w-full h-full p-4 rounded-[10px] " style={{ backgroundColor: "color-mix(in srgb, #e87e00, transparent 90%)" }}>
                                <img src={dieseloil} alt='image' className='w-full h-[200px] rounded-[10px]' data-aos="flip-left" data-aos-duration="2000"/>
                                <h3 className='text-black font-[600] text-[25px] py-4'>
                                    Diesel Oil
                                </h3>
                                <ul className='space-y-3'>
                                    <li className="text-[17px] flex items-center gap-2">
                                        <FaCheckCircle className="text-orange-500" />
                                        Light Diesel Oil
                                    </li>
                                    <li className="text-[17px] flex items-center gap-2">
                                        <FaCheckCircle className="text-orange-500" />
                                        Industrial Diesel Oil
                                    </li>
                                    <li className="text-[17px] flex items-center gap-2">
                                        <FaCheckCircle className="text-orange-500" />
                                        Furnace Diesel Oil
                                    </li>
                                </ul>
                                <div className='pt-4'>
                                    <button className='bgorange text-white rounded-[5px] px-5 py-2'>View More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1"  data-aos="fade-up" data-aos-duration="3000">
                            <div className="w-full h-full p-4 rounded-[10px] " style={{ backgroundColor: "color-mix(in srgb, #e87e00, transparent 90%)" }}>
                                <img src={pyrolysisoil} alt='image' className='w-full h-[200px] rounded-[10px]' data-aos="flip-left" data-aos-duration="2000"/>
                                <h3 className='text-black font-[600] text-[25px] py-4'>
                                    Pyrolysis Oil
                                </h3>
                                <ul className='space-y-3'>
                                    <li className="text-[17px] flex items-center gap-2">
                                        <FaCheckCircle className="text-orange-500" />
                                        Plastic Pyrolysis Oil
                                    </li>
                                    <li className="text-[17px] flex items-center gap-2">
                                        <FaCheckCircle className="text-orange-500" />
                                        Pyrolysis Oil Bottle
                                    </li>
                                    <li className="text-[17px] flex items-center gap-2">
                                        <FaCheckCircle className="text-orange-500" />
                                        Premium Pyrolysis Oil
                                    </li>
                                </ul>
                                <div className='pt-4'>
                                    <button className='bgorange text-white rounded-[5px] px-5 py-2'>View More</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1" data-aos="fade-left" data-aos-duration="3000">
                            <div className="w-full h-full p-4 rounded-[10px] " style={{ backgroundColor: "color-mix(in srgb, #e87e00, transparent 90%)" }}>
                                <img src={carbonblack} alt='image' className='w-full h-[200px] rounded-[10px]' data-aos="flip-left" data-aos-duration="2000"/>
                                <h3 className='text-black font-[600] text-[25px] py-4'>
                                   Carbon Black
                                </h3>
                                <ul className='space-y-3'>
                                    <li className="text-[17px] flex items-center gap-2">
                                        <FaCheckCircle className="text-orange-500" />
                                        Carbon Black Powder
                                    </li>
                                  
                                </ul>
                                <div className='pt-4'>
                                    <button className='bgorange text-white rounded-[5px] px-5 py-2'>View More</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Categories
