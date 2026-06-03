import React from 'react';
import library from '@/assets/library.jpg';
import Link from 'next/link';

const Banner = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${library.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
            }}
        >
            <div className="hero-overlay bg-black/40"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md text-green-100">
                    <h1 className="mb-5 text-5xl font-bold">Find Your Perfect Study Room</h1>
                    <p className="mb-5">
                        Browse and book quiet, private study rooms in your library. List your own room and earn.
                    </p>
                    <button className="btn text-amber-800"><Link href={'/rooms'}>Explore More</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;