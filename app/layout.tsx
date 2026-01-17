import type { Metadata } from 'next'
import './public/css/globals.css'
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'THE BEAN - Specialty Coffee',
  description: 'A celebration of specialty coffee and the timeless moments shared over a perfect cup.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
