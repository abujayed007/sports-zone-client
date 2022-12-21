import React from 'react';
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitter, } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-dark footer'>
            <h5 className='text-center text-blue'>@Sports Zone</h5>
            <div className='d-flex align-items-center justify-content-center fs-4'>
                <a target='/' className='px-2' href="https://www.facebook.com/ibneabujayed"><FaFacebook></FaFacebook></a>
                <a target='/' className='px-2' href="https://twitter.com/ibneabujayed"><FaTwitter></FaTwitter></a>
                <a target='/' className='px-2' href="https://www.instagram.com/jayed_shovon/"><FaInstagram></FaInstagram></a>
            </div>
            <div className='text-center pt-4 text-light'>
                <p>Copyright © 2022 - All right reserved</p>
                <p>abujayed007@gmal.com</p>
                <p>Phone : +8801714904562</p>

            </div>
        </div>
    );
};

export default Footer;