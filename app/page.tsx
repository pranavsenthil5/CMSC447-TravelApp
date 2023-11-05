import Link from 'next/link'

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between">

        {/* add a button to go to /feed */}
        <div className="flex flex-row mt-20">
            <Link href="/feed">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Go to Feed
                </button>
            </Link>
        </div>
    </main>
  )
}
