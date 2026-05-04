import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const AllBooksDetails = async ({ params }) => {

    const { id } = await params;

    const res = await fetch("https://online-books-lyart.vercel.app/data.json");
    const featured = await res.json();

    const feature = featured.find(f => f.id == id);




    return (
        <div className='container mx-auto mt-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-6'>

                <div className=''>
                    <Image className='rounded-md w-[400px] shadow-sm border' src={feature.image_url} height={400} width={400} alt={feature.title} />
                </div>
                <div className='space-y-3'>
                    <h2 className='text-5xl font-bold'> {feature.title} </h2>
                    <p className=' text-xl font-semibold text-gray-500'> {feature.author} </p>
                    <p className=' text-xl text-gray-500 font-semibold'> {feature.description} </p>

                    <h4 className='mt-10 font-bold text-xl'>Available Quantity</h4>
                    <h3 className='font-semibold text-green-500 text-2xl'> {feature.available_quantity} copies left </h3>

                    <Button className="text-2xl py-6 px-15 rounded-md bg-[#4F46E5]">Borrow
                        This Book</Button>
                </div>

            </div>
        </div>
    );
};

export default AllBooksDetails;