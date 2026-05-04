import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FeatureCard = ({ feature }) => {

    console.log(feature.title);

    return (

        <Card className='border rounded-md'>
            <div>
                <Image className='w-full h-[400px] rounded-md' src={feature.image_url} alt={feature.title} height={200} width={200} />
            </div>
            <div className='space-y-2'>
                <h4 className='text-xl font-semibold'>{feature.title}</h4>
                <p className='font-medium text-gray-400'>{feature.author}</p>
            </div>
            <div>
                <Button variant='outline' className="w-full font-medium rounded-md text-[#4F46E5] border-[#4F46E5]"><Link href={"/all-books"}>View Details</Link></Button>
            </div>
        </Card>

    );
};

export default FeatureCard;