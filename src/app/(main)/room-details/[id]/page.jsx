import Booking from '@/components/Booking';
import DeleteRoom from '@/components/DeleteRoom';
import { EditModal } from '@/components/EditModal';

import Image from 'next/image';
import React from 'react';

const RoomDetailsPage = async ({ params }) => {

    const { id } = await params;
    // console.log(id);

    

    const res = await fetch(`http://localhost:5000/room-details/${id}`, { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch room details');
    }
    const data = await res.json();

    if (!data) {
        return <p>Room not found</p>
    }

    // console.log(data);

    return (
        <div className='w-full h-screen flex items-center justify-center gap-6'>

            <Image src={data?.imageUrl} alt={data?.RoomName} width={500} height={300} className='rounded-lg'>
            </Image>
            <div className='w-96 space-y-2'>

                <h2 className="card-title text-2xl font-semibold">{data?.RoomName}</h2>
                <p className="font-semibold text-sm">{data?.Description}</p>
                <p className="font-medium">Floor no: {data?.floor}</p>

                <p className="font-bold">Hourly rate: ${data?.price}</p>
                <p className="text-sm">Per Room: <span className="text-amber-700 font-bold">{data?.capacity}</span> number of people</p>
                <div className='flex items-center gap-4'>
                    <Booking data={data}></Booking>
                    <EditModal data={data}></EditModal>
                    <DeleteRoom data={data}></DeleteRoom>
                </div>
            </div>
        </div>
    );
};

export default RoomDetailsPage;