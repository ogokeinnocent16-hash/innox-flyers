"use client"
import { useClerk } from "@clerk/nextjs";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SignOutPage() {
  const { signOut } = useClerk();
  const router = useRouter();

  useEffect(() => {
    signOut().then(() => {
      router.push("/"); // after logout, go back to homepage
    });
  }, [signOut, router])

  return <p style={{color:'#fff', textAlign:'center', paddingTop:'50px', fontSize:'20px'}}>Signing out...</p>
}