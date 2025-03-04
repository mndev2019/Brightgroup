import React from 'react'
import Heading from '../../Component/Heading'
import dieselproduct from '../../assets/Image/dieselproduct.webp'

const Diesel = () => {
    return (
        <>
            <section className='lg:py-10 py-5'>
                <div className="container">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full text-center">
                                <Heading title="Diesel Oil"
                                />
                            </div>
                        </div>
                        <div className="col-span-1 ">
                            <p className='pt-5 md:text-[20px] text-[15px]'>
                                Offering you a complete choice of products which include light diesel oil, industrial diesel oil, furnace diesel oil, high mileage diesel oil and industrial boiler diesel oil.
                            </p>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 mt-4 items-center">
                        <div className="col-span-1">
                            <div className="w-full h-full">
                                <img src={dieselproduct} alt='image' className='h-full' />
                            </div>
                        </div>
                        <div className="lg:col-span-2 col-span-1 md:mt-0 mt-3">
                            <div className="w-full h-full">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className='lg:text-[25px] md:text-[20px] text-[18px] font-[600] border-l-2 border-[#e87e00] px-2'>
                                            Light Diesel Oil
                                        </h3>
                                    </div>
                                    <div>
                                        <p className='lg:text-[20px] md:text-[18px] text-[15px] font-[500]'>
                                            Approx.
                                            <span className='textorange'>Rs 38</span>
                                            / Litre
                                        </p>
                                    </div>
                                </div>
                                <h3 className='lg:text-[20px] text-[18px] font-[500] py-4 textorange'>
                                    Product Details:
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:text-[18px] text-[15px]">
                                    <div className="flex items-center">
                                        <span className="font-semibold">Minimum Order Quantity:</span>
                                        <span className="ml-2">100 Litre</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-semibold">Usage/Application:</span>
                                        <span className="ml-2">Industrial</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-semibold">Packaging Size:</span>
                                        <span className="ml-2">500 ml</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-semibold">Color:</span>
                                        <span className="ml-2">Black</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-semibold">Packaging Type:</span>
                                        <span className="ml-2">Bottle</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-semibold">Density:</span>
                                        <span className="ml-2">0.81 gm/cc</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-semibold">Pour Point:</span>
                                        <span className="ml-2">-39 Degree Celsius</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-semibold">Moisture Content</span>
                                        <span className="ml-2">0.05%</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-semibold">Sulfur Content</span>
                                        <span className="ml-2">0.03%</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-semibold">Gross Calorific value</span>
                                        <span className="ml-2">10500 Kcal/kg</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-semibold">Form Type</span>
                                        <span className="ml-2">Liquid</span>
                                    </div>
                                </div>
                                <p className='lg:text-[18px] md:text-[15px] text-[12px] font-[400] pt-4'>
                                    We are a highly acknowledged organization, engaged in presenting a remarkable range of<span className='textorange'> Light Diesel Oil.</span>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Diesel
