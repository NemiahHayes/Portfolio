import Link from "next/link";

export default function Home() {
  const navButton =
    "bg-white text-black p-4 w-32 h-16 flex items-center justify-center rounded-lg hover:bg-gray-600 transition";

  return (
    <main>
      <div className="min-h-screen mt-16">
        {/* Buttons */}
        <div className="flex justify-center space-x-4 mt-24">
          <Link href="/enginedevelopment" className={navButton}>
            Engine Dev.
          </Link>

          <Link href="/generalcplusplus" className={navButton}>
            General C++
          </Link>

          <Link href="/misc" className={navButton}>
            Misc.
          </Link>
        </div>
      </div>
    </main>
  );
}
