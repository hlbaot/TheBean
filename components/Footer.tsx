import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brown-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-brown-800 text-xs font-bold">☕</span>
              </div>
              <span className="font-serif text-xl font-bold">THE BEAN</span>
            </div>
            <p className="text-cream-200 text-sm mb-4">
              A celebration of specialty coffee and the timeless moments shared over a perfect cup.
            </p>
            <div className="flex space-x-3">
              <div className="w-8 h-8 rounded-full bg-brown-800 flex items-center justify-center hover:bg-brown-700 cursor-pointer transition-colors">
                <span className="text-xs">🔊</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-brown-800 flex items-center justify-center hover:bg-brown-700 cursor-pointer transition-colors">
                <span className="text-xs">📤</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-brown-800 flex items-center justify-center hover:bg-brown-700 cursor-pointer transition-colors">
                <span className="text-xs">📍</span>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-semibold mb-4">ADDRESS</h3>
            <p className="text-cream-200 text-sm leading-relaxed">
              123 Coffee Lane, Artisan District<br />
              San Francisco, CA 94103
            </p>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-semibold mb-4">OPENING HOURS</h3>
            <p className="text-cream-200 text-sm leading-relaxed">
              Mon - Fri 07:00 - 20:00<br />
              Sat 08:00 - 21:00<br />
              Sun 08:00 - 18:00
            </p>
          </div>

          {/* Newsletter & Quick Links */}
          <div>
            <h3 className="text-sm uppercase tracking-wider font-semibold mb-4">NEWSLETTER</h3>
            <div className="flex space-x-2 mb-6">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-2 bg-brown-800 text-white placeholder-cream-400 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cream-500"
              />
              <button className="bg-brown-700 text-white px-4 py-2 rounded-lg text-sm uppercase tracking-wider hover:bg-brown-600 transition-colors">
                JOIN US
              </button>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider font-semibold mb-4">QUICK LINKS</h3>
              <ul className="space-y-2 text-cream-200 text-sm">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brown-800 pt-6 flex flex-col md:flex-row justify-between items-center text-cream-300 text-xs">
          <p>© 2024 THE BEAN SPECIALTY COFFEE. ALL RIGHTS RESERVED.</p>
          <p>DESIGNED FOR COFFEE ENTHUSIASTS.</p>
        </div>
      </div>
    </footer>
  )
}
