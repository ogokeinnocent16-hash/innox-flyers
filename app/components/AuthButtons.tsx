"use client"

import { useSession, signIn, signOut } from "next-auth/react"

export default function AuthButtons() {
  const { data: session } = useSession()

  if (session) {
    return (
      <button 
        onClick={() => signOut()}
        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
      >
        Logout
      </button>
    )
  }

  return (
    <button 
      onClick={() => signIn()}
      className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
    >
      Sign Up / Login
    </button>
  )
}