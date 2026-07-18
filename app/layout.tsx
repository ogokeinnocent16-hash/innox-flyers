export const metadata = {
  title: 'Innox Flyers',
  description: 'Innox Flyers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}