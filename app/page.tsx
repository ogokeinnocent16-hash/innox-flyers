export const dynamic = 'force-dynamic'

import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main style={{padding: '50px', textAlign: 'center', fontFamily: 'system-ui'}}>
      <h1 style={{fontSize: '48px', marginBottom: '10px'}}>Innox Flyers is Live!</h1>
      <p style={{fontSize: '18px', marginBottom: '30px'}}>Site is back up 🚀</p>
      <UserButton afterSignOutUrl="/" />
    </main>
  )
}