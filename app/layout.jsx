import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata = {
  title: `Corey Beautyman's Portfolio`,
  description: 'A portfolio for Corey Beautyman',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
