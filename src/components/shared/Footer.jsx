import { Button } from '@heroui/react';
import React from 'react';
import { FaBookOpen, FaEnvelope, FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white py-10 mt-10'>
            <div className='container mx-auto'>

                <div className='grid justify-between items-start md:grid-cols-3 gap-3 mb-10'>
                    <div className='space-y-3'>
                        <h2 className='flex items-center gap-3 text-2xl font-semibold'><FaBookOpen className='text-2xl text-[#4F46E5]' />Book Nest</h2>
                        <p className='text-gray-400 font-medium'>Your next favourite book is <br /> just a click away</p>

                        <div className='flex items-center gap-3'>
                            <Button isIconOnly className="bg-gray-400 text-white"><FaFacebookF /></Button>
                            <Button isIconOnly className="bg-gray-400 text-white"><IoLogoTwitter /></Button>
                            <Button isIconOnly className="bg-gray-400 text-white"><FaInstagram /></Button>
                        </div>

                    </div>
                    <div className='space-y-3'>

                        <h3 className='text-xl font-semibold'>Quick Links</h3>
                        <ul className='font-medium text-gray-300 space-y-3'>
                            <li>Home</li>
                            <li>All Books</li>
                            <li>My Profile</li>
                            <li>Categories</li>
                        </ul>
                    </div>
                    <div className='space-y-3'>

                        <h3 className='text-xl font-semibold'>Contact Us</h3>
                        <div className='space-y-3'>
                            <span className='flex items-center gap-3 text-gray-300'><FaEnvelope />sajjaturrahmansheikh@gmail.com</span>
                            <span className='flex items-center gap-3 text-gray-300'><FaPhoneAlt />+8801952892308</span>

                        </div>
                    </div>

                </div>
                <hr />
                <div className='text-center py-5'>
                    <p className='text-gray-300'>&copy; 2026 BookNest, All right reserved. </p>
                </div>

            </div>




        </div>
    );
};

export default Footer;