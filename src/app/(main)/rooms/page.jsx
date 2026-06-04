import RoomCard from '@/components/RoomCard';
import React from 'react';

const AllRooms = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-rooms`, {cache: 'no-store'});
    const rooms = await res.json();
    // console.log(rooms);

    return (
       <div className="text-[#1a661d]">
      <div className="container mx-auto py-8">
        <h1 className="text-center text-3xl font-bold mb-3">All Rooms</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms.map((room) => {
            return <RoomCard key={room._id} room={room}></RoomCard>
          })}
        </div>
      </div>
    </div>
    );
};

export default AllRooms;