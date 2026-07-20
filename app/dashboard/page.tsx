export default function DashboardPage() {
  return (
    <main style={{padding: "30px", fontFamily: "sans-serif", background: "#fff", minHeight: "100vh"}}>
      <h1 style={{fontSize: "28px", marginBottom: "20px"}}>Welcome to INNOX FLYERS ✈️</h1>

      {/* BALANCE CARD */}
      <div style={{background: "#000", color: "#fff", padding: "24px", borderRadius: "20px", marginBottom: "20px"}}>
        <p style={{margin: 0, fontSize: "14px", opacity: 0.7}}>Balance</p>
        <h2 style={{margin: "8px 0 0 0", fontSize: "36px"}}>₦0</h2>
      </div>

      {/* CARS CARD */}
      <div style={{background: "#f5f5f5", padding: "24px", borderRadius: "20px", marginBottom: "20px"}}>
        <div style={{fontSize: "32px"}}>🚗</div>
        <h3>20 Cars</h3>
        <p>Book airport pickup and rides instantly</p>
      </div>

      {/* HELISPACE CARD */}
      <div style={{background: "#f5f5f5", padding: "24px", borderRadius: "20px"}}>
        <div style={{fontSize: "32px"}}>🚁</div>
        <h3>Helispace</h3>
        <p>Book helicopter rides across Lagos</p>
      </div>
    </main>
  )
}