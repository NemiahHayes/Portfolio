'use client'

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const baseNavLinkClass = "transition p-4 mr-4";
  const inactiveNavLinkClass = "bg-teal-600 text-white hover:bg-blue-700";
  const activeNavLinkClass = "visibility: hidden";

  return (
    <nav className="bg-teal-600 fixed w-full top-0 z-10 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto h-16">
        
        {/* Logo */}
        <div className="text-white text-2xl font-bold pl-2">
          <Link href="/">Nemiah&#39;s Epic Gaming Portfolio</Link>
        </div>

        {/* Hamburger Button (for mobile screens) */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className={`sm:flex space-x-0 ${isOpen ? 'block' : 'hidden'} sm:block`}>
          <Link href="/" className={`${baseNavLinkClass} ${pathname === '/' ? activeNavLinkClass : inactiveNavLinkClass}`}>
            Home
          </Link>
          <Link href="./" className={`${baseNavLinkClass} ${pathname === '/' ? activeNavLinkClass : inactiveNavLinkClass}`}> 
            Back
          </Link>
        </div>
      </div>
    </nav>
  );
}