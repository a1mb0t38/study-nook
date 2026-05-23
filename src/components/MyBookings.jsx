import Image from 'next/image';
import React from 'react';

const MyBookings = ({ booking }) => {
    return (
        <div className='border text-[#1a661c] p-4 rounded-lg mb-4 flex items-center gap-4 w-full mt-4 border-amber-700'>
            <Image className='rounded-sm' src={booking?.imageUrl} alt="library image" width={300} height={200} />
            <div>
                <p>Booking Date: {booking?.bookingDate}</p>
                <p>Room Name: {booking?.RoomName}</p>
                <p>Floor: {booking?.floor}</p>
                <p>Hourly Rate: ${booking?.totalPrice}</p>
                <span>Start Time: {booking?.startTime}</span>
                <span> - </span>
                <span>End Time: {booking?.endTime}</span>
            </div>
        </div>
    );
};

export default MyBookings;