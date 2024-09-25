import Link from "next/link";

export default function Home() {
  const navButton =
    "bg-white text-black p-4 w-32 h-32 flex items-center justify-center rounded-lg hover:bg-white-300 transition";

  return (
    <main>
      <div className="min-h-screen">
        <h1>Nemiah Hayes Portfolio</h1>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mt-8">
          <Link href="/cameradev" className={navButton}>
            Camera
          </Link>
        </div>
      </div>
    </main>
  );
}
