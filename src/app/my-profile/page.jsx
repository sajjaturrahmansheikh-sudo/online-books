'use client'
import { UpdateProfile } from '@/components/shared/UpdateProfile';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const MyProfilePage = () => {

    const userData = authClient.useSession();
    const user = userData.data?.user;




    return (
        <div className='container mx-auto min-h-[80vh] mt-10 '>
            <Card className='text-center space-y-2'>
                <Avatar className='h-40 w-40 mx-auto'>
                    <Avatar.Image alt="John Doe" src={user?.image}
                        referrerPolicy='no-referrer'
                    />
                    <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>

                <h2 className='text-2xl font-bold'> {user?.name} </h2>
                <p className='text-gray-400 font-medium'> {user?.email} </p>

                <div className='mx-auto'>
                    <UpdateProfile />
                </div>
            </Card>
        </div>
    );
};

export default MyProfilePage;