import { UserButton } from "@clerk/nextjs"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome Back ✈️</h1>
        <UserButton />
      </div>

      {/* Balance Card */}
      <div className="bg-green-600 rounded-2xl p-6 mb-6">
        <p className="text-sm opacity-80">Balance</p>
        <p className="text-4xl font-bold">₦0</p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Link href="/book-car" className="bg-gray-900 p-6 rounded-2xl hover:bg-gray-800">
          <p className="text-3xl mb-2">🚗</p>
          <p className="font-bold text-lg">20 Cars</p>
          <p className="text-sm text-gray-400">Book airport pickup</p>
        </Link>

        <Link href="/book-heli" className="bg-gray-900 p-6 rounded-2xl hover:bg-gray-800">
          <p className="text-3xl mb-2">🚁</p>
          <p className="font-bold text-lg">Helispace</p>
          <p className="text-sm text-gray-400">Book helicopter rides</p>
        </Link>
      </div>

      {/* Bottom Nav placeholder */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 p-4 flex justify-around">
        <p>Home</p>
        <p>Trips</p>
        <p>Profile</p>
      </div>
    </div>
  )
}