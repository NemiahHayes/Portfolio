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
      <div className="flex items-center justify-center max-w-7xl mx-auto h-16">
        
        {/* Logo */}
        <div className="text-white text-2xl font-bold pl-2">
          <Link href="/">Nemiah&#39;s Epic Gaming Portfolio</Link>
        </div>
      </div>
    </nav>
  );
}