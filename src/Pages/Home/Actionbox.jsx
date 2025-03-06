import React from 'react'
import twitter from '../../assets/Image/twitter.png'
import facebook from '../../assets/Image/facebook.png'
import linkdin from '../../assets/Image/linkedin.png'
const Actionbox = () => {
    return (
        <>
            <section className='actionbox relative flex items-center justify-center lg:h-[400px] h-[300px]'>
                <div className="absolute inset-0 bg-[#e87e004d] bg-opacity-50"></div>
                <div className="container relative z-10">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1">
                            <div className="w-full text-center">
                                <h3 className='text-white md:text-[25px] text-[18px] font-[600] md:py-4 py-2'>
                                    Pritpal Bright (CEO)
                                </h3>
                                <p className='text-white md:text-[24px] sm:text-[17px] text-[14px] font-[300]'>
                                    Bright Environmental Solutions Private Limited
                                    <span className='block'> 1, Nivan, Plot No.96, S.V. Road, Khar West, Mumbai - 400052, Maharashtra, India</span>
                                </p>
                                <div className="flex items-center justify-center pt-4">
                                    <div>
                                        <p className='text-white md:text-[24px] text-[18px] font-[600] me-2'>
                                            Share Us :
                                        </p>
                                    </div>
                                    <div className="icon flex gap-2">
                                        <img src={twitter} alt='twitter' className='md:h-[30px] h-[25px] cursor-pointer' />
                                        <img src={facebook} alt='facebook' className='md:h-[30px] h-[25px] cursor-pointer' />
                                        <img src={linkdin} alt='linkdin' className='md:h-[30px] h-[25px] cursor-pointer' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Actionbox

