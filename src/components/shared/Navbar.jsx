'use client'
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { FaBookOpen } from 'react-icons/fa';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {

    const userData = authClient.useSession();
    const user = userData.data?.user;


    const handleSignOut = async () => {
        await authClient.signOut();
    }


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
                    <div>
                        {!user && <div className='text-center flex gap-3'>
                            <Button className="bg-[#4F46E5] text-white"><Link href={"/signup"}>SignUp</Link></Button>
                            <Button className="bg-[#4F46E5] text-white"><Link href={"/signin"}>SignIn</Link></Button>
                        </div>}
                        {
                            user && <div className='flex gap-3'>
                                <Avatar>
                                    <Avatar.Image alt="John Doe" src={user?.image}
                                        referrerPolicy='no-referrer'
                                    />
                                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                                </Avatar>

                                <Button onClick={handleSignOut} variant='danger'>Sign Out</Button>
                            </div>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;