import MyBookings from '@/components/MyBookings';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const MyBookingsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    // console.log(session, "session from my bookings page");
    const user = session?.user;
    // console.log(user, "user from my bookings page");
    const res = await fetch('http://localhost:5000/booking/6a103e020d1aa4e42bc25659')
    const bookings = await res.json();
    // console.log(bookings, "booking data");

    return (
        <div className='max-w-7xl mx-auto px-4 py-8'>
            <h1 className='text-3xl font-bold'>My Bookings</h1>
            <div>
                {
                    bookings.map(booking => {
                        return <MyBookings key={booking._id} booking={booking} />
                    })
                }
            </div>
        </div>
    );
};

export default MyBookingsPage;