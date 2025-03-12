import React from 'react'
// import btmleaf from "../../assets/Image/btm-leaf.png"
// import topleaf from "../../assets/Image/top-leaf.png"
// import btmshap from "../../assets/Image/btm-shape.png"
// import dot1 from "../../assets/Image/dot1.png"
// import dot2 from "../../assets/Image/dot2.png"
import galimg1 from "../../assets/Image/gal-img1.png"
import galimg2 from "../../assets/Image/gal-img2.png"
import galimg3 from "../../assets/Image/gal-img3.png"
import galimg4 from "../../assets/Image/gal-img4.png"
import galimg5 from "../../assets/Image/gal-img5.png"
import galimg6 from "../../assets/Image/gal-img6.png"
import galimg7 from "../../assets/Image/gal-img7.png"
import galimg8 from "../../assets/Image/gal-img8.png"
import galimg9 from "../../assets/Image/gal-img9.png"
import galimg10 from "../../assets/Image/gal-img10.png"
import galimg11 from "../../assets/Image/gal-img11.png"
import galimg12 from "../../assets/Image/gal-img12.png"
import Heading from '../../Component/Heading'
const images = [galimg1, galimg2, galimg3, galimg4, galimg5, galimg6, galimg7, galimg8, galimg9, galimg10, galimg11, galimg12];



function Gallery() {
    return (
        <>
            {/* <div className="bannersection">
                <div class="er_breadcrumb_wrapper">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="er_bread_content">
                                    <h2>Our Gallery</h2>

                                    <div class="er_bread_shape">
                                        <img src={btmleaf} alt="shape" />
                                        <img src={topleaf} alt="shape" />
                                        <img src={btmshap} alt="shape" />
                                        <img src={dot1} alt="shape" />
                                        <img src={dot2} alt="shape" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div class="grid grid-cols-1">
                <div class="col-span-1 text-center">
                    <Heading title="Our Gallery" />
                </div>
            </div>

            <div class="er_sec er_gallery_section">
                <div class="er_gallary_wrapper">
                    <div className="container mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {images.map((img, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                                <div className="absolute inset-0 bg-gradient-to-b from-green-400/30 to-green-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <img src={img} alt="gallery-img" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h5 className="text-white text-lg font-semibold">Plants For Garden</h5>
                                    <p className="text-white text-sm px-4 text-center">Amet minim mollit non deserunt ullamco aliqua dolor do amet sint duis enim.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Gallery


