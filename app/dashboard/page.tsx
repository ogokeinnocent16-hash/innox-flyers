"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const { user, isLoaded } = useUser();
  const [showWelcome, setShowWelcome] = useState(true);
  const [balance] = useState(1500);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 20000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {showWelcome && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-10 text-center">
            <h1 className="text-3xl font-bold">Welcome back to Innox-Flyer! 🎉</h1>
            <p>Hey {user.firstName}</p>
            <button onClick={() => setShowWelcome(false)} className="mt-4 px-4 py-2 bg-black text-white rounded-lg">Close</button>
          </div>
        </div>
      )}

      <nav className="bg-white border-b px-8 py-4 flex justify-between">
        <h1 className="text-2xl font-bold">Innox Flyers</h1>
        <div className="flex gap-4 items-center">
          <div className="bg-green-100 px-4 py-2 rounded-lg">Balance: ₦{balance}</div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>

      <div className="p-8">
        <h2 className="text-3xl font-bold">Dashboard Loaded ✅</h2>
        <p>Now we will add the 20 Helispace layouts here</p>
      </div>
    </div>
  );
}