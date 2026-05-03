import React from 'react';
import bannerImage from "@/assets/illustration_no_bg.png"
import Image from 'next/image';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
const Banner = () => {
    return (

        <div className='bg-gray-50'>
            <div className='container mx-auto mt-10'>

                <div className='md:flex justify-between items-center'>
                    <div className='space-y-4'>
                        <h2 className='text-5xl font-bold'>Find Your Next Read</h2>

                        <p className='text-xl text-gray-400'>Explore thousands of books across <br /> different genres and categories</p>

                        <Button className="bg-[#4F46E5] font-medium"><Link href={"/all-books"} className='flex items-center gap-3'>Browse Now <FaArrowRightLong /></Link></Button>
                    </div>
                    <div>

                        <Image src={bannerImage} alt='banner Image' height={500} width={500} />
                    </div>

                </div>





            </div>
        </div>
    );
};

export default Banner;