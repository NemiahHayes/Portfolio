'use client'

import Link from 'next/link';

export default function GeneralCPP() {

  const navButton =
  "bg-white text-black p-4 w-32 h-16 flex items-center justify-center rounded-lg hover:bg-gray-600 transition";

  return (
    <main>
      <div className="content">
        {/* Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <Link href="/enginedevelopment/camera" className={navButton}>
            Camera
          </Link>
        </div>
      </div>
    </main>
  );
}
