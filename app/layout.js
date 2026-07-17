import './globals.css'
import Providers from "./components/Providers";
import AuthButtons from "./components/AuthButtons";

export const metadata = {
  title: 'INNOX Flyers - Cardboard RC Cars',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <Providers>
          {/* NAVBAR */}
          <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 24px',
            borderBottom: '1px solid #eee'
          }}>
            <a href="/" style={{ fontWeight: 'bold', fontSize: '20px', textDecoration: 'none', color: 'black' }}>
              INNOX Flyers
            </a>
            <nav style={{ display: 'flex', gap: '20px' }}>
              <a href="/" style={{ textDecoration: 'none', color: 'black' }}>Home</a>
              <a href="/shop" style={{ textDecoration: 'none', color: 'black' }}>Shop</a>
              <AuthButtons />
            </nav>
          </header>

          {/* PAGE CONTENT */}
          <main>
            {children}
          </main>

          {/* FOOTER */}
          <footer style={{
            textAlign: 'center',
            padding: '20px',
            borderTop: '1px solid #eee',
            marginTop: '40px',
            color: '#666'
          }}>
            © 2026 INNOX Flyers. All rights reserved.
          </footer>
        </Providers>
      </body>
    </html>
  );
}