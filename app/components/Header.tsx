'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import GridPageTransition from '../public/layerLoad/layer'
import { useState, useEffect } from 'react'

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [transition, setTransition] = useState(false);

  const isActive = (path: string) => pathname === path;

  // Reset transition when path changes (page loaded)
  useEffect(() => {
    setTransition(false);
  }, [pathname]);

  const navigateWithTransition = (path: string) => {
    if (path === pathname) return;
    setTransition(true);

    // Wait for the grid to cover the screen
    // We'll navigate slightly earlier to account for next.js loading time
    setTimeout(() => {
      router.push(path);
    }, 1000);
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <button
              onClick={() => navigateWithTransition('/')}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-brown-800 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">☕</span>
              </div>
              <span className="font-serif text-2xl font-bold text-brown-900">
                THE BEAN
              </span>
            </button>

            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-8">

              {[
                { label: 'OUR HERITAGE', path: '/heritage' },
                { label: 'BLOG', path: '/blog' },
                { label: 'CONTACT', path: '/contact' },
              ].map(({ label, path }) => (
                <button
                  key={path}
                  onClick={() => navigateWithTransition(path)}
                  className={`relative group text-sm font-medium uppercase tracking-wider transition-colors ${isActive(path)
                    ? 'text-brown-800 font-semibold'
                    : 'text-brown-700 hover:text-brown-900'
                    }`}
                >
                  {label}
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-[2px] w-full bg-black
                      origin-left transform transition-transform duration-300
                      ${isActive(path)
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                      }
                    `}
                  />
                </button>
              ))}

            </div>
          </div>
        </nav>
      </header>

      {/* GRID OVERLAY TRANSITION */}
      <GridPageTransition
        isActive={transition}
      />
    </>
  );
}

