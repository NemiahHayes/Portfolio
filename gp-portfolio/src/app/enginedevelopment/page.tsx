'use client'

import Link from 'next/link';

export default function EngineDev() {

  const navButton =
  "bg-white text-black p-4 w-32 h-16 flex items-center justify-center rounded-lg hover:bg-gray-600 transition";

  return (
    <main>
      <div className="content mt-16">
        {/* Buttons */}
        <div className="flex justify-center space-x-4 mt-24">
          <Link href="/enginedevelopment/camera" className={navButton}>
            Camera
          </Link>
        </div>
      </div>
    </main>
  );
}
