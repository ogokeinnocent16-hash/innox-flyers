'use client'

import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black text-white flex-col items-center justify-center px-6">
      
      {/* IF LOGGED IN SHOW THIS */}
      <SignedIn>
        <div className="flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome Back ✈️</h1>
          <UserButton />
        </div>
      </SignedIn>

      {/* IF LOGGED OUT SHOW THIS */}
      <SignedOut>
        {/* BIG TITLE IN MIDDLE */}
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6 text-center">
          Welcome To INNOX FLYERS
        </h1>

        {/* ADVERT TEXT */}
        <p className="text-xl md:text-3xl text-gray-400 mb-2 text-center">
          Helispace Made for the Future
        </p>
        <p className="text-lg md:text-2xl text-gray-400 mb-12 text-center">
          Exclusive Aircrafts
        </p>

        {/* SIGN IN / LOGIN BUTTONS IN MIDDLE - NOW WORKING */}
        <div className="flex gap-6 mb-20">
          <SignInButton mode="modal">
            <button className="px-10 py-4 bg-white text-black rounded-xl text-xl font-bold hover:bg-gray-300 transition">
              Login
            </button>
          </SignInButton>
          
          <SignUpButton mode="modal">
            <button className="px-10 py-4 border border-gray-600 text-white rounded-xl text-xl font-bold hover:bg-gray-900 transition">
              Sign In
            </button>
          </SignUpButton>
        </div>

        {/* SIGN UP AT BOTTOM - NOW WORKING */}
        <div className="absolute bottom-10">
          <SignUpButton mode="modal">
            <button className="px-8 py-3 bg-gray-900 border-gray-700 text-white rounded-lg hover:bg-gray-800 transition">
              Sign Up
            </button>
          </SignUpButton>
        </div>
      </SignedOut>

    </main>
  )
}