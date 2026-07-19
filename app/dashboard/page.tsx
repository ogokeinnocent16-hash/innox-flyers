export default function DashboardPage() {
  return (
    <div style={{minHeight: "100vh", background: "#fff", padding: "24px", fontFamily: "system-ui"}}>
      
      {/* Header */}
      <h1 style={{fontSize: "28px", fontWeight: "700", marginBottom: "24px"}}>
        Welcome to INNOX FLYERS ✈️
      </h1>

      {/* Balance Card */}
      <div style={{
        background: "linear-gradient(135deg, #000 0%, #333 100%)", 
        color: "#fff", 
        padding: "24px", 
        borderRadius: "20px", 
        marginBottom: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}>
        <p style={{margin: 0, fontSize: "14px", opacity: 0.7}}>Balance</p>
        <h2 style={{margin: "8px 0 0 0", fontSize: "36px", fontWeight: "700"}}>₦0</h2>
      </div>

      {/* 20 Cars Card */}
      <div style={{
        background: "#f8f8f8", 
        padding: "24px", 
        borderRadius: "20px", 
        marginBottom: "20px",
        border: "1px solid #eee",
        cursor: "pointer"
      }}>
        <div style={{fontSize: "32px", marginBottom: "8px"}}>🚗</div>
        <h3 style={{margin: "0 0 8px 0", fontSize: "20px"}}>20 Cars</h3>
        <p style={{margin: 0, color: "#666"}}>Book airport pickup and rides instantly</p>
      </div>

      {/* Helispace Card */}
      <div style={{
        background: "#f8f8f8", 
        padding: "24px", 
        borderRadius: "20px",
        border: "1px solid #eee",
        cursor: "pointer"
      }}>
        <div style={{fontSize: "32px", marginBottom: "8px"}}>🚁</div>
        <h3 style={{margin: "0 0 8px 0", fontSize: "20px"}}>Helispace</h3>
        <p style={{margin: 0, color: "#666"}}>Book helicopter rides across Lagos</p>
      </div>

    </div>
  )
}