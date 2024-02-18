import React from 'react';
import { Navbar, Nav, NavItem, NavbarBrand } from "reactstrap";
import image from '/images/9802blgjc5avu8ci0g0rd3ttmh-58723b5c03c5e787ee9fd935bef8bf8d.png';

const Header = () => {
    return (
        <div className='bg-emerald-500 sticky sm:h-12 w-full'>
            <nav className='md:flex md:justify-between md:items-center'>
                <div className='md:flex items-center'>
                    <img src={image} alt="" className='h-12 inline' />
                    <span className='text-2xl font-Poppins cursor-pointer text-white '>
                        Photo Gallery
                    </span>
                </div>

                <div className='md:flex md:items-center'>
                    <ul className='md:flex'>
                        <li className='sm:mx-6 text-white text-xl font-semibold'>About</li>
                        <li className='sm:mx-6 text-white text-xl font-semibold'>Login</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;
