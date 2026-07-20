import { UserButton } from "@clerk/nextjs"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 pb-20">
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
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-900 p-6 rounded-2xl">
          <p className="text-3xl mb-2">🚗</p>
          <p className="font-bold text-lg">20 Cars</p>
          <p className="text-sm text-gray-400">Book airport pickup</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <p className="text-3xl mb-2">🚁</p>
          <p className="font-bold text-lg">Helispace</p>
          <p className="text-sm text-gray-400">Book helicopter rides</p>
        </div>
      </div>
    </div>
  )
}