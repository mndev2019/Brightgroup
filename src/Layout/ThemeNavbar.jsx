import React, { useEffect, useState } from 'react';
import logo from '../assets/Image/logo.jpg';


import { NavLink, useLocation } from 'react-router-dom';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { FaCheckCircle } from 'react-icons/fa';


const ThemeNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    const location = useLocation();




    useEffect(() => {
        // Scroll to the bottom when the page changes
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scroll
        });
    }, [location]);




    const navlist = (
        <ul className="flex lg:flex-row flex-col list-none gap-8 font-semibold items-center">
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "textorange" : "hover:text-secondary"}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/booking"
                    className={({ isActive }) => isActive ? "textorange" : "hover:text-secondary"}
                >
                    About Us
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/product"
                    className={({ isActive }) => isActive ? "textorange" : "hover:text-secondary"}
                >
                    Product
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact"
                    className={({ isActive }) => isActive ? "textorange" : "hover:text-secondary"}
                >
                    Contact Us
                </NavLink>
            </li>





        </ul>
    );


    return (
        <>
            <section className='py-3 lg:px-20 md:px-10 px-5'>
                <div className=" mx-auto">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <NavLink to='/'>
                            <div className="flex items-center md:gap-3 gap-1">
                                <img src={logo} alt='Logo' className='md:h-[80px] h-[50px]' />
                                <div className="icon">
                                    <p className='md:text-[16px] text-[9px] uppercase font-[600]' style={{ textShadow: '2px 2px #ccc' }}>
                                        Bright Environmental Solutions Private Limited
                                    </p>
                                    <div className="flex items-center gap-2">
                                        {/* Location */}
                                        <p className="md:text-[15px] text-[7px] text-[#676767]">
                                            Khar West, Mumbai, Maharashtra
                                        </p>

                                        {/* Divider */}
                                        <span className="h-4 w-px bg-[#676767]"></span>

                                        {/* GST Section */}
                                        <div className="flex items-center gap-1">
                                            <FaCheckCircle className="text-[#e87e00] lg:text-[15px] text-[10px]" />
                                            <p className="md:text-[12px] text-[7px]  text-[#676767]">
                                                GST No. <span className="font-bold">27AAECB4964F1ZM</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>

                        {/* Navbar links for larger screens */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navlist}

                            {/* Search and Cart icons for desktop view */}

                        </div>

                        {/* Sidebar icon for mobile */}
                        <div className="lg:hidden">
                            <button onClick={toggleMenu}>
                                <MenuOutlined className="md:text-3xl text-xl" />
                            </button>
                        </div>


                    </div>
                </div>

                {/* Sidebar menu for mobile */}
                <div className={`fixed inset-0 bg-white z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 lg:hidden`} style={{ width: '50%' }}>
                    <div className="p-6">
                        {/* Close button inside the sidebar */}
                        <div className="flex justify-end mb-6">
                            <button onClick={toggleMenu}>
                                <CloseOutlined className="text-2xl" />
                            </button>
                        </div>
                        {navlist}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ThemeNavbar;
