'use client'

import Link from 'next/link';

export default function Navbar() {

  return (
    <nav className="bg-rGreen fixed w-full top-0 z-10 shadow-md">
      <div className="flex items-center justify-center max-w-7xl mx-auto h-16">
        
        {/* Logo */}
        <div className="text-fWhite text-2xl font-bold pl-2">
          <Link className="text-fWhite" href="/">Nemiah&#39;s Epic Gaming Portfolio</Link>
        </div>
      </div>
    </nav>
  );
}