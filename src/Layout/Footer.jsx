import React from 'react'
import logo from '../assets/Image/logo.jpg'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { TiSocialLinkedin } from 'react-icons/ti'

const Footer = () => {
  return (
    <>
      <section className='lg:py-15 py-10 bg-black/80' >
        <div className="container">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            <div className="col-span-1">
              <div className="w-full">
                <img src={logo} alt='image' className=' rounded-[5px] lg:h-[100px] h-[80px] ' />
                <p className='text-white lg:text-[16px] text-[12px] lg:pt-4 pt-2 hover:text-[#e87e00]'>
                  1, Nivan, Plot No.96, S.V. Road
                </p>
                <p className='text-white lg:text-[16px] text-[12px] hover:text-[#e87e00]'>
                  Khar West, Mumbai - 400052
                </p>
              </div>
            </div>
            <div className="col-span-1 lg:p-0 pt-3">
              <h3 className='text-white font-[600] lg:text-[25px] text-[15px]'>
                Our Company
              </h3>
              <ul className='*:text-white *:hover:text-[#e87e00] *:lg:text-[16px] text-[12px] lg:pt-4 pt-2 '>
                <li className='pb-3'>
                  About Us
                </li>
                <li className='pb-3'>Our Products</li>
                <li className='pb-3'>Sitemap</li>
                <li className='pb-3'>Contact Us</li>
              </ul>
            </div>
            <div className="col-span-1 lg:p-0 pt-3">
              <h3 className='text-white font-[600] lg:text-[25px] text-[15px]'>
                Our Product
              </h3>
              <ul className='*:text-white *:hover:text-[#e87e00] *:lg:text-[16px] text-[12px] lg:pt-4 pt-2 '>

                <li className='pb-3'>Diesel Oil</li>
                <li className='pb-3'>Pyrolysis Oil</li>
                <li className='pb-3'>Carbon Black</li>
              </ul>
            </div>
            <div className="col-span-1 lg:p-0 pt-3">
              <h3 className='text-white font-[600] lg:text-[25px] text-[15px]'>
                Social Icons
              </h3>
              <div className='lg:pt-4 pt-2 flex gap-3'>
                <div className='md:h-[40px] h-[30px] md:w-[40px] w-[30px] rounded-[50%] bg-[#e87e00] hover:bg-[#e0b076f2] items-center justify-center flex'>
                  <FaTwitter className='text-white  md:text-[20px] text-[15px]' />
                </div>
                <div className='md:h-[40px] h-[30px] md:w-[40px] w-[30px] rounded-[50%] bg-[#e87e00] hover:bg-[#e0b076f2] items-center justify-center flex'>
                  <FaFacebookF className='text-white   md:text-[20px] text-[15px]' />
                </div>
                <div className='md:h-[40px] h-[30px] md:w-[40px] w-[30px] rounded-[50%] bg-[#e87e00] hover:bg-[#e0b076f2] items-center justify-center flex'>
                  <FaLinkedinIn className='text-white   md:text-[20px] text-[15px]' />
                </div>
              </div>
            </div>

          </div>
          <div className="grid grid-cols-1">
            <div className="col-span-1 pt-10 text-center ">
              <p className='text-white lg:text-[16px] text-[11px] font-[100] border-t border-[#bcafaf] pt-5'>© Bright Environmental Solutions Private Limited All Rights Reserved <span className='textorange'>(Terms of Use)</span></p>
              <p className='text-white lg:text-[16px] text-[11px] font-[100]'>Developed and Managed by <span className='textorange'>IndiaMART InterMESH Limited</span></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
