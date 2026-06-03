import Link from 'next/link';
import React from 'react';

const RoomCard = ({ room }) => {

    return (
        <div className="h-full flex">
            <div className="w-full m-2 card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={room.imageUrl}
                        alt={room.RoomName} />
                </figure>
                <div className="card-body">
                    <div className="flex justify-between items-center">
                        <h2 className="card-title text-2xl font-semibold">{room.RoomName}</h2>
                        <p className='text-right font-bold'>{room.BookingDate}</p>
                    </div>
                    <p className="font-semibold text-sm">{room.Description}</p>
                    <p className="font-medium">Floor no: {room.floor}</p>
                    
                    <p className="font-bold">Hourly rate: ${room.price}</p>
                    <p className="text-sm">Per Room: <span className="text-amber-800 font-bold">{room.capacity}</span> number of people</p>
                    

                    <div className="card-actions justify-end">
                        <button className="btn bg-white text-amber-800"><Link href={`/room-details/${room._id}`}>View Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;