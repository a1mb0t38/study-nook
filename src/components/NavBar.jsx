import Link from 'next/link';
import React from 'react';
import { MdLocalLibrary } from 'react-icons/md';
import NavLink from './NavLink';

const NavBar = () => {
    return (
        <div className="flex items-center justify-between p-2 bg-base-100 shadow-sm">
            <div>
                <a className="text-xl text-amber-700 flex items-center gap-2"><MdLocalLibrary className='text-xl' />Study-Nook</a>
            </div>
            <div>
                <ul className='flex items-center gap-2 text-amber-700'>
                    <li><NavLink href={'/'}>Home</NavLink></li>
                    <li><NavLink href={'/rooms'}>All Rooms</NavLink></li>
                </ul>
            </div>
            <div className="flex gap-2">
                {/* <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div> */}
                <button className='btn text-amber-700 bg-white'><Link href={'/login'}>Login</Link></button>
                <button className='btn text-amber-700 bg-white'><Link href={'/register'}>Register</Link></button>
            </div>
        </div>
    );
};

export default NavBar;