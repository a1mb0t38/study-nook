import MyBookings from '@/components/MyBookings';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const MyBookingsPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    // console.log(session, "session from my bookings page");
    const user = session?.user;
    // console.log(user, "user from my bookings page");
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const bookings = await res.json();
    // console.log(bookings, "booking data");

    return (
        <div className='max-w-7xl mx-auto px-4 py-8'>
            <h1 className='text-3xl font-bold'>My Bookings</h1>
            <div>
                {
                    bookings.length > 0 ? (
                        bookings.map(booking => (
                            <MyBookings key={booking._id} booking={booking} />
                        ))
                    ) : (
                        <p className="mt-8 text-2xl font-bold">No bookings found.</p>
                    )
                }
            </div>
        </div>
    );
};

export default MyBookingsPage;