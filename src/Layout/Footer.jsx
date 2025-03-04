import React from 'react'
import logo from '../assets/Image/logo.jpg'

const Footer = () => {
  return (
    <>
      <section className='py-15 bg-black/80' >
        <div className="container">
          <div className="grid grid-cols-4">
            <div className="col-span-1">
              <div className="w-full">
                <img src={logo} alt='image' className=' rounded-[5px]' />
                <p className='text-white text-[16px] pt-4'>
                  1, Nivan, Plot No.96, S.V. Road
                </p>
                <p className='text-white text-[16px]'>
                  Khar West, Mumbai - 400052
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <h3 className='text-white font-[600] text-[25px]'>
                Our Company
              </h3>
              <ul className='*:text-white *:text-[16px] pt-4 '>
                <li className='pb-3'>
                  About Us
                </li>
                <li className='pb-3'>Our Products</li>
                <li className='pb-3'>Sitemap</li>
                <li className='pb-3'>Contact Us</li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className='text-white font-[600] text-[25px]'>
                Our Product
              </h3>
              <ul className='*:text-white *:text-[16px] pt-4 '>
                
                <li className='pb-3'>Diesel Oil</li>
                <li className='pb-3'>Pyrolysis Oil</li>
                <li className='pb-3'>Carbon Black</li>
              </ul>
            </div>
            <div className="col-span-1">
            <h3 className='text-white font-[600] text-[25px]'>
                Social Icons
              </h3>
            </div>
            <div className="col-span-4 pt-10 text-center ">
              <p className='text-white text-[16px] font-[100] border-t border-[#bcafaf] pt-5'>© Bright Environmental Solutions Private Limited All Rights Reserved <span className='textorange'>(Terms of Use)</span></p>
              <p className='text-white text-[16px] font-[100]'>Developed and Managed by <span className='textorange'>IndiaMART InterMESH Limited</span></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
