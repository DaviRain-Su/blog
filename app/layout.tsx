import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "DaviRain's Log",
  description: "Technical writings on Rust, Blockchain, and Systems",
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
