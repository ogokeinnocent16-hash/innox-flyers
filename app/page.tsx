export default function HomePage() {
  return (
    <main style={{background:'#000', color:'#fff', minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'24px'}}>
      <h1 style={{fontSize:'48px', fontWeight:'bold', marginBottom:'16px'}}>Innox Flyers ✈️</h1>
      <p style={{fontSize:'18px', color:'#aaa', marginBottom:'40px'}}>Cars, Helicopters, and Airport Pickups</p>
      
      <div style={{display:'flex', gap:'16px'}}>
        <a href="/login" style={{background:'#16a34a', padding:'16px 32px', borderRadius:'12px', fontWeight:'bold', textDecoration:'none', color:'#fff'}}>
          Sign In
        </a>
        <a href="/signup" style={{background:'#111', padding:'16px 32px', borderRadius:'12px', fontWeight:'bold', textDecoration:'none', color:'#fff', border:'1px solid #333'}}>
          Sign Up
        </a>
      </div>
    </main>
  )
}