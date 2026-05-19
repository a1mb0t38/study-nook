import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            <div className='min-h-screen flex items-center justify-center'>
                <div className='space-y-3'>
                    <h2>Page Not Found 404</h2>
                    <button className='text-white bg-amber-700 rounded-full p-2'><Link href={'/'}>Go to Home page</Link></button>
                </div>
            </div>

        </div>
    );
};

export default NotFoundPage;