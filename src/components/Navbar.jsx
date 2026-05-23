import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Madrasah', to: '/madrasah' },
  { label: 'STEAM', to: '/steam' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const menuRef = useRef(null)

  useEffect(() => { setOpen(false) }, [location.pathname])

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false)
    }
    if (open) document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isActive = (to) => to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1C3A2A]/96 backdrop-blur-sm border-b border-[#C9A84C]/15">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Brand */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/images/logo-HD.png"
                alt="Olive Education"
                className="h-9 w-9 rounded object-contain"
              />
              <span
                className="font-sans text-[#C9A84C] font-semibold text-xs uppercase tracking-[0.15em] hidden sm:block"
              >
                Olive Education
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 font-sans text-sm transition-colors duration-200 ${
                    isActive(link.to)
                      ? 'text-[#C9A84C]'
                      : 'text-[#F5F0E8]/60 hover:text-[#F5F0E8]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="ml-4 px-5 py-2 bg-[#C9A84C] text-[#1C3A2A] font-sans font-semibold text-xs rounded uppercase tracking-wider hover:bg-[#E8C96A] transition-colors duration-200"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile trigger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-[#F5F0E8]/70 hover:text-[#F5F0E8] transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-40 bg-[#1C3A2A] flex flex-col pt-20 transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="rule" />
        <nav className="flex-1 flex flex-col px-8 py-10">
          {navLinks.map((link, i) => (
            <div key={link.to}>
              <Link
                to={link.to}
                className={`block py-5 italic text-4xl sm:text-5xl transition-all duration-300 ${
                  open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                } ${isActive(link.to) ? 'text-[#C9A84C]' : 'text-[#F5F0E8]/70 hover:text-[#C9A84C]'}`}
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  transitionDelay: open ? `${i * 50}ms` : '0ms',
                }}
              >
                {link.label}
              </Link>
              <div className="rule" />
            </div>
          ))}

          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-block px-8 py-3.5 bg-[#C9A84C] text-[#1C3A2A] font-sans font-semibold text-sm rounded hover:bg-[#E8C96A] transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </nav>

        <div className="px-8 pb-10">
          <p className="font-sans text-[#F5F0E8]/25 text-xs">© 2026 Olive Education</p>
        </div>
      </div>
    </>
  )
}
