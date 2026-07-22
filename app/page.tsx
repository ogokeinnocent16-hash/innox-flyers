import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{
      background:'#000', 
      color:'#fff', 
      minHeight:'100vh', 
      display:'flex', 
      flexDirection:'column', 
      alignItems:'center', 
      justifyContent:'center', 
      padding:'24px',
      fontFamily:'system-ui'
    }}>
      
      <h1 style={{fontSize:'48px', fontWeight:'bold', marginBottom:'16px'}}>Innox Flyers ✈️</h1>
      <p style={{fontSize:'18px', color:'#aaa', marginBottom:'40px'}}>Cars, Helicopters, and Airport Pickups</p>
      
      {/* SHOW WHEN LOGGED OUT */}
      <SignedOut>
        <div style={{display:'flex', gap:'16px'}}>
          <Link href="/sign-in">
            <button style={{background:'#16a34a', padding:'16px 32px', borderRadius:'12px', fontWeight:'bold', border:'none', color:'#fff', cursor:'pointer', fontSize:'16px'}}>
              Login
            </button>
          </Link>
          <Link href="/sign-up">
            <button style={{background:'#111', padding:'16px 32px', borderRadius:'12px', fontWeight:'bold', border:'1px solid #333', color:'#fff', cursor:'pointer', fontSize:'16px'}}>
              Sign Up
            </button>
          </Link>
        </div>
      </SignedOut>

      {/* SHOW WHEN LOGGED IN */}
      <SignedIn>
        <div style={{textAlign:'center'}}>
          <p style={{marginBottom:'20px', fontSize:'18px'}}>Welcome back!</p>
          <UserButton />
          <br/>
          <Link href="/dashboard">
            <button style={{background:'#16a34a', padding:'16px 32px', borderRadius:'12px', fontWeight:'bold', border:'none', color:'#fff', cursor:'pointer', fontSize:'16px', marginTop:'20px'}}>
              Go to Balance Page
            </button>
          </Link>
        </div>
      </SignedIn>
    </main>
  )
}