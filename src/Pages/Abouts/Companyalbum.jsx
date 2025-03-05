import React from 'react'
import Heading from '../../Component/Heading'
import manuunit from '../../assets/Image/manufacturingunit.webp'
import certificate from '../../assets/Image/certificate.webp'
import machinery from '../../assets/Image/machinery.webp'
import service from '../../assets/Image/service.webp'
import infresetup from '../../assets/Image/infrastructuresetup.webp'
import rawmaterial from '../../assets/Image/rawmaterial.webp'
import infrafacility from '../../assets/Image/infrastructure.webp'
import Manufacturing from '../../assets/Image/manufacturing.webp'
import OurInfrastructure  from '../../assets/Image/ourinfrastructure.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Companyalbum = () => {
    const data = [
        {
            image: manuunit,
            text: "Manufacturing Unit"
        },
        {
            image: certificate,
            text: "ISO Certification"
        },
        {
            image: machinery,
            text: "Our Machinery"
        },
        {
            image: service,
            text: "Our Services"
        },
        {
            image: infresetup,
            text: "Infrastructural Set-Up"
        },
        {
            image: rawmaterial,
            text: "Raw Materials"
        },
        {
            image: infrafacility,
            text: "Infrastructure Facilities"
        },
        {
            image: Manufacturing,
            text: "Infrastructure & Manufacturing Facilities"
        },
        {
            image: OurInfrastructure,
            text: "Our Infrastructure"
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,          
        // autoplaySpeed: 3000,    
        // pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };
    return (
        <section className=''>
            <div className="container">
                <div className="grid grid-cols-1">
                    <div className="col-span-1">
                        <div className="w-full text-center">
                            <Heading title="Company Album" />
                        </div>
                    </div>
                </div>
                <div className="my-10">
                    <Slider {...settings}>
                        {data.map((itm, index) => (
                            <div key={index} className="px-2">
                                <div className="w-full text-center shadow-md shadow-[#e87e006b] py-5 px-4 rounded-sm overflow-auto">
                                    <img
                                        src={itm.image}
                                        alt={itm.text}
                                        className="w-full lg:h-[250px] h-[150px] rounded-lg shadow-lg object-cover"
                                    />
                                    <p className="mt-4 text-[#e87e00] text-md font-medium">
                                        {itm.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Companyalbum

