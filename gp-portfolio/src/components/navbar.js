'use client'

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-rGreen fixed w-full top-0 z-10 shadow-md">
      <div className="flex items-center justify-center max-w-7xl mx-auto h-16">
        
        {/* Logo */}
        <div className="text-fWhite text-2xl font-bold pl-2">
          <Link href="/">Nemiah&#39;s Epic Gaming Portfolio</Link>
        </div>
      </div>
    </nav>
  );
}