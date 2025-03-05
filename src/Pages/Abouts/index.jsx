import React from 'react'
import Heading from '../../Component/Heading'
import Companyalbum from './Companyalbum'
import manuunit from '../../assets/Image/manufacturingunit.webp'
import certificate from '../../assets/Image/certificate.webp'
import machinery from '../../assets/Image/machinery.webp'
import service from '../../assets/Image/service.webp'
import infresetup from '../../assets/Image/infrastructuresetup.webp'
import rawmaterial from '../../assets/Image/rawmaterial.webp'
import infrafacility from '../../assets/Image/infrastructure.webp'
import Manufacturing from '../../assets/Image/manufacturing.webp'
import OurInfrastructure  from '../../assets/Image/ourinfrastructure.webp'
import Factsheet from './Factsheet'
import Whyus from './Whyus'

const Abouts = () => {
     const data = [
            {
                image: manuunit,
                text: "Manufacturing Unit",
                para:"Manufacturing Area"
            },
            {
                image: certificate,
                text: "ISO Certification",
                para:"Registration Date: 21 Sep-2021",
                para2:"Expiry Date:20-Sep-2024"
            },
            {
                image: machinery,
                text: "Our Machinery",
                para:"Machines"
            },
            {
                image: service,
                text: "Our Services",
                para:"Services"
            },
            {
                image: infresetup,
                text: "Infrastructural Set-Up",
                para:"Office Image"
            },
            {
                image: rawmaterial,
                text: "Raw Materials",
                para:"Our Production Method"
            },
            {
                image: infrafacility,
                text: "Infrastructure Facilities",
                para:"Our Control Panel"
            },
            {
                image: Manufacturing,
                text: "Infrastructure & Manufacturing Facilities",
                para:"Our Infrastructure"
            },
            // {
            //     image: OurInfrastructure,
            //     text: "Our Infrastructure",
            //     para:"Our Infrastructure"
            // },
        ]
        
    return (
        <>
            <section className='lg:py-10 py-5'>
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full text-center">
                                <Heading title="About Us" />
                            </div>
                            <div className="col-span-1">
                                <p className='pt-5 md:text-[18px] text-[15px] text-justify'>
                                    <span className='textorange'>Bright Environment Solution Pvt Ltd </span>was established in year of <span className='textorange'>2010</span>. We are leading manufacturers and wholesaler of high quality <span className='textorange'>Pyrolysis oil, Diesel Oil, etc</span>. Our range is widely acclaimed for neck-deep first-class features like quality, efficiency and durability. All the products we offer conform to international quality standards and accomplish the complete demand of customers. Our products find usage in various industrial applications and gives efficient performance by reducing the down time of boilers and furnances occurring due to other low quality oils. Our oil is a direct substitute to LDO and industrial diesel, at a lesser rate.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Factsheet/>
            <Companyalbum />
            <section className='lg:pb-10 pb-5 overflow-hidden'>
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full text-center">
                                <Heading title="About The Company" />
                            </div>
                            <div className="col-span-1">
                                <p className='pt-5 md:text-[18px] text-[15px] text-justify'>
                                    The team we have has vast experience in this industry and stay in close coordination with customers to understand their requirement and offer the line accordingly. We also custom-make the products as per the necessity and stipulation of the client and offer them inside a stipulated time frame to meet their demand.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 pt-10 justify-center">
                        {
                            data.map((itm) => (
                                <>
                                    <div className="col-span-1" data-aos="fade-up"
                                        data-aos-duration="2000">
                                        <div className="w-full h-full bg-white p-4 rounded-[10px] relative overflow-hidden shadow-md shadow-[#e87e006b] transition-all duration-300">
                                            {/* <div className="icon h-[60px] w-[60px] rounded-[50%] mb-[20px] flex justify-center items-center" style={{ backgroundColor: "color-mix(in srgb, #e87e00, transparent 90%)" }}
                                            > */}
                                               <div className='mb-3'>
                                               <img src={itm.image} alt='image' className='h-[200px] w-full object-cover rounded-[10px]' />
                                               </div>
                                            {/* </div> */}
                                            <h3 className='md:text-[20px] text-[15px] font-[600] md:mb-[5px] mb-[2px]'>{itm.text}</h3>
                                            <p className='md:text-[15px] text-[12px]'>
                                                {itm.para}
                                            </p>
                                            <p className='md:text-[15px] text-[12px]'>
                                                {itm.para2}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            ))
                        }

                    </div>
                </div>
            </section>
            <Whyus/>
            
        </>
    )
}

export default Abouts
