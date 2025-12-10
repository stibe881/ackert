import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ackert Garten GmbH | Landschaftsgärtnerei & Gartenbau in Schönenwerd',
  description: 'Professionelle Gartenpflege, Landschaftsbau und Gartengestaltung in Schönenwerd. Ackert Garten GmbH - Ihr Partner für grüne Oasen.',
  keywords: 'Gartenbau, Landschaftsgärtnerei, Gartenpflege, Schönenwerd, Gartengestaltung',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
