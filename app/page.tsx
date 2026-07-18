import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main style={{padding: '50px', textAlign: 'center'}}>
      <h1>Innox Flyers is Live!</h1>
      <p>Site is back up</p>
      <UserButton />
    </main>
  )
}