import { TrashBin } from '@gravity-ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BookingCancel from './BookingCancel';

const MyBookings = ({ booking }) => {
    return (
        <div className='border text-[#1a661c] p-4 rounded-lg mb-4 flex items-center gap-4 w-full mt-4 border-amber-700 min-w-3xl'>
            <Image className='rounded-sm' src={booking?.imageUrl} alt="library image" width={300} height={200} />
            <div>
                <p>Booking Date: {booking?.bookingDate}</p>
                <p>Room Name: {booking?.RoomName}</p>
                <p>Floor: {booking?.floor}</p>
                <p>Hourly Rate: ${booking?.totalPrice}</p>
                <span>Start Time: {booking?.startTime}</span>
                <span> - </span>
                <span>End Time: {booking?.endTime}</span> <br />
                <BookingCancel bookingID={booking?._id} />
                <button className='btn bg-white text-amber-700'><Link href={`/room-details/${booking?.roomID}`} >View Details</Link></button>
            </div>
        </div>
    );
};

export default MyBookings;