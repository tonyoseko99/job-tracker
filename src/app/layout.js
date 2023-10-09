import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Job Applications Tracker',
  description: 'A simple job application tracker built with Next.js and TailwindCSS',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="container mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
