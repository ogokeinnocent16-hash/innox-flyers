export default function DashboardPage() {
  return (
    <main style={{background:'black', color:'white', padding:'20px', minHeight:'100vh'}}>
      <h1 style={{fontSize:'28px', fontWeight:'bold'}}>Welcome Back ✈️</h1>

      <div style={{background:'green', padding:'20px', borderRadius:'16px', margin:'20px 0'}}>
        <p>Balance</p>
        <p style={{fontSize:'32px', fontWeight:'bold'}}>₦0</p>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px'}}>
        <div style={{background:'#111', padding:'20px', borderRadius:'16px'}}>
          <p>🚗</p>
          <p style={{fontWeight:'bold'}}>20 Cars</p>
        </div>
        <div style={{background:'#111', padding:'20px', borderRadius:'16px'}}>
          <p>🚁</p>
          <p style={{fontWeight:'bold'}}>Helispace</p>
        </div>
      </div>
    </main>
  )
}