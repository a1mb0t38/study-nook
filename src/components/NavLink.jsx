"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {

    const pathname = usePathname();

    const isActive = pathname === href;

    return <Link href={href} className={`${isActive ? 'text-[#1a661d] border-b-2 border-b-amber-700' : ""}`}>{children}</Link>
};

export default NavLink;