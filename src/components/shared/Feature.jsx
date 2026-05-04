import Link from 'next/link';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoMdReturnLeft } from 'react-icons/io';
import FeatureCard from './FeatureCard';

const Feature = async () => {

    const res = await fetch("https://online-books-lyart.vercel.app/data.json");
    const data = await res.json();

    const featured = data.slice(0, 4);


    return (
        <div className='container mx-auto mt-10'>
            <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-bold'>Featured Books</h2>
                <Link href={"/all-books"} className='flex items-center gap-2 text-[#4F46E5] font-medium'>View All <FaArrowRightLong /></Link>
            </div>

            <div className='grid grid-cols-1 justify-center md:grid-cols-4 gap-6 mt-4'>
                {
                    featured.map(feature => <FeatureCard key={feature.id} feature={feature} />)
                }

            </div>



        </div>
    );
};

export default Feature;