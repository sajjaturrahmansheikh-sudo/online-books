import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='flex min-h-[80vh] justify-center items-center'>
            
            <div className='text-center space-y-3'>
                <h2 className='text-4xl font-bold'>404</h2>
                <p className='text-2xl text-gray-400'>The page you’re looking for doesn’t exist</p>
                <Button className="bg-[#4F46E5]">
                    <Link href={"/"}>Go Home</Link>
                </Button>
            </div>


        </div>
    );
};

export default NotFound;