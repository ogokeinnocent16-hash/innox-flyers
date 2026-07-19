"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const HELISPACE_DESC = "Helispace Aircraft: Long-range VTOL drone-plane. Use: Filming, Forest Exploration, Military Recon, Space Live Video, Education. 500km range, Zero emissions.";
const CAR_DESC = "INNOX Car: Futuristic EV for urban and off-road. AI driving, Solar charging, 800km range. Perfect for exploration and daily use.";

export default function DashboardPage() {
  const { user, isLoaded } = useUser();
  const [showWelcome, setShowWelcome] = useState(true);
  const [showSupport, setShowSupport] = useState(false);
  const [showAddFunds, setShowAddFunds] = useState(false);
  const [balance, setBalance] = useState(0); // STARTS AT ₦0
  const [fundAmount, setFundAmount] = useState("");
  const [activeTab, setActiveTab] = useState("helispace"); // helispace or cars

  // Hide welcome after 20 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 20000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  if (!user) return null;

  const helispaceLayouts = Array.from({ length: 20 }, (_, i) => i + 1);
  const carLayouts = Array.from({ length: 10 }, (_, i) => i + 1);

  const handleAddFunds = () => {
    const amount = parseInt(fundAmount);
    if (amount > 0) {
      setBalance(balance + amount);
      setFundAmount("");
      setShowAddFunds(false);
      alert(`₦${amount.toLocaleString()} Added to Balance!`);
    }
  }

  const handlePurchase = (type: string, num: number, price: number) => {
    if(balance >= price) {
      setBalance(balance - price);
      alert(`✅ Purchased ${type} #${num}! -₦${price.toLocaleString()} deducted\nDownload link sent to your email.`);
    } else {
      alert(`❌ Insufficient Balance. You need ₦${price.toLocaleString()}`);
      setShowAddFunds(true);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* 1. WELCOME POPUP 20 SECONDS */}
      {showWelcome && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md text-center">
            <h1 className="text-3xl font-bold mb-3">Welcome back to INNOX! 🚀</h1>
            <p className="text-gray-600 mb-4">Hey {user.firstName}, Expand your thinking</p>
            <button onClick={() => setShowWelcome(false)} className="mt-2 px-6 py-2 bg-black text-white rounded-lg font-semibold">Get Started</button>
          </div>
        </div>
      )}

      {/* 2. ADD FUNDS POPUP */}
      {showAddFunds && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full">
            <h2 className="text-2xl font-bold mb-4">Add Funds</h2>
            <input 
              type="number" 
              placeholder="Enter amount ₦" 
              value={fundAmount}
              onChange={(e) => setFundAmount(e.target.value)}
              className="w-full border rounded-lg p-3 mb-4"
            />
            <div className="flex gap-3">
              <button onClick={handleAddFunds} className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold">Add ₦</button>
              <button onClick={() => setShowAddFunds(false)} className="flex-1 border py-2 rounded-lg">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* 3. SUPPORT POPUP */}
      {showSupport && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Contact INNOX Support</h2>
            <textarea placeholder="How can we help you?" className="w-full border rounded-lg p-3 h-32 mb-4"></textarea>
            <div className="flex gap-3">
              <button onClick={() => {alert("Message sent! We will reply soon."); setShowSupport(false)}} className="flex-1 bg-black text-white py-2 rounded-lg">Send</button>
              <button onClick={() => setShowSupport(false)} className="flex-1 border py-2 rounded-lg">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <nav className="bg-white border-b px-8 py-4 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-2xl font-bold">INNOX <span className="text-gray-500">Flyers</span></h1>
        <div className="flex items-center gap-3">
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold">
            Balance: ₦{balance.toLocaleString()}
          </div>
          <button onClick={() => setShowAddFunds(true)} className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700">
            Add Funds
          </button>
          <button onClick={() => setShowSupport(true)} className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200">
            Support
          </button>
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>

      {/* TABS FOR CARS AND HELISPACE */}
      <div className="p-8 max-w-7xl mx-auto">
        <div className="flex gap-4 mb-8 border-b">
          <button 
            onClick={() => setActiveTab("helispace")}
            className={`pb-3 px-2 font-bold ${activeTab === "helispace" ? "border-b-4 border-black" : "text-gray-500"}`}
          >
            Helispace Aircraft ₦50,000
          </button>
          <button 
            onClick={() => setActiveTab("cars")}
            className={`pb-3 px-2 font-bold ${activeTab === "cars" ? "border-b-4 border-black" : "text-gray-500"}`}
          >
            INNOX Cars ₦10,000
          </button>
        </div>

        {/* HELISPACE SECTION */}
        {activeTab === "helispace" && (
          <div>
            <h2 className="text-3xl font-bold mb-2">Helispace Aircraft Collection</h2>
            <p className="text-gray-600 mb-8">20 Layouts for Filming, Exploration, Military, Space & Education</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {helispaceLayouts.map((num) => (
                <div key={num} className="bg-white border rounded-xl shadow-md p-5 hover:shadow-xl transition">
                  <div className="bg-gradient-to-br from-blue-200 to-blue-300 h-40 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-blue-900 font-bold text-lg">Helispace #{num}</span>
                  </div>
                  <h3 className="font-bold mb-2">Helispace Model {num}</h3>
                  <p className="text-sm text-gray-600 mb-4 h-20 overflow-y-auto">{HELISPACE_DESC}</p>
                  <button 
                    onClick={() => handlePurchase("Helispace", num, 50000)}
                    className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800"
                  >
                    Purchase - ₦50,000
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CARS SECTION */}
        {activeTab === "cars" && (
          <div>
            <h2 className="text-3xl font-bold mb-2">INNOX Cars Collection</h2>
            <p className="text-gray-600 mb-8">10 Futuristic EV Models</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {carLayouts.map((num) => (
                <div key={num} className="bg-white border rounded-xl shadow-md p-5 hover:shadow-xl transition">
                  <div className="bg-gradient-to-br from-red-200 to-red-300 h-40 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-red-900 font-bold text-lg">Car #{num}</span>
                  </div>
                  <h3 className="font-bold mb-2">INNOX Car Model {num}</h3>
                  <p className="text-sm text-gray-600 mb-4 h-20 overflow-y-auto">{CAR_DESC}</p>
                  <button 
                    onClick={() => handlePurchase("INNOX Car", num, 10000)}
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700"
                  >
                    Purchase - ₦10,000
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <footer className="bg-white border-t mt-10 py-6">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <button onClick={() => setShowSupport(true)} className="text-gray-600 underline hover:text-black">
            Need Help? Contact Support
          </button>
          <div className="flex items-center gap-2">
            <UserButton afterSignOutUrl="/" />
            <span className="text-gray-600">Sign Out</span>
          </div>
        </div>
      </footer>
    </div>
  );
}