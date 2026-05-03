import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FaBookOpen } from 'react-icons/fa';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='bg-blue-50 py-5'>
            <div className='container mx-auto'>
                <div className=' md:flex justify-between items-center'>
                    <div className='flex justify-center items-center gap-2'>
                        <FaBookOpen className='text-2xl text-[#4F46E5]' />
                        <h3 className='text-2xl text-[#4F46E5] font-bold'>BookNest</h3>
                    </div>
                    <div>
                        <ul className='flex justify-between items-center gap-4 font-medium'>
                            <li><NavLink href={"/"}>Home</NavLink></li>
                            <li><NavLink href={"/all-books"}>All Books</NavLink></li>
                            <li><NavLink href={"/my-profile"}>My Profile</NavLink></li>
                        </ul>
                    </div>
                    <div className='text-center'>
                        <Button className="bg-[#4F46E5] text-white">LogIn</Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;