import FeatureCard from '@/components/shared/FeatureCard';
import React from 'react';

const AllBooksPage = async () => {
    const res = await fetch("https://online-books-lyart.vercel.app/data.json");
    const featured = await res.json();
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 justify-center md:grid-cols-4 gap-6 mt-6'>
                {
                    featured.map(feature => <FeatureCard key={feature.id} feature={feature} />)
                }
            </div>
        </div>

    );
};

export default AllBooksPage;