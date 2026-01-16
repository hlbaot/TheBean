'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brown-800 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">☕</span>
            </div>
            <span className="font-serif text-2xl font-bold text-brown-900">THE BEAN</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/heritage" 
              className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                isActive('/heritage') ? 'text-brown-800 font-semibold' : 'text-brown-700 hover:text-brown-900'
              }`}
            >
              OUR HERITAGE
            </Link>
            <Link 
              href="/blog" 
              className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                isActive('/blog') ? 'text-brown-800 font-semibold' : 'text-brown-700 hover:text-brown-900'
              }`}
            >
              BLOG
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                isActive('/contact') ? 'text-brown-800 font-semibold' : 'text-brown-700 hover:text-brown-900'
              }`}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
