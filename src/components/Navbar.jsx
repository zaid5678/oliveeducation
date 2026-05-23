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
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const menuRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    if (open) document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/'
    return location.pathname.startsWith(to)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#1C3A2A]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.3)]'
            : 'bg-[#1C3A2A]/95 backdrop-blur-md'
        } border-b border-[#C9A84C]/20`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/images/logo.jpg"
                alt="Olive Education Logo"
                className="h-10 w-10 rounded-full object-cover ring-2 ring-[#C9A84C]/60 group-hover:ring-[#C9A84C] transition-all duration-300"
              />
              <span
                className="font-display text-[#C9A84C] font-semibold tracking-wide text-lg leading-tight hidden sm:block"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                OLIVE EDUCATION
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 font-sans text-sm font-medium transition-colors duration-200 group ${
                    isActive(link.to)
                      ? 'text-[#C9A84C]'
                      : 'text-[#F5F0E8] hover:text-[#C9A84C]'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-px bg-[#C9A84C] transition-transform duration-300 origin-left ${
                      isActive(link.to) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              ))}
              <Link
                to="/contact"
                className="ml-4 px-5 py-2 bg-[#C9A84C] text-[#1C3A2A] font-sans font-semibold text-sm rounded-full hover:bg-[#E8C96A] transition-colors duration-200"
              >
                Enrol Now
              </Link>
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-[#F5F0E8] hover:text-[#C9A84C] transition-colors"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-40 bg-[#1C3A2A] flex flex-col transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ paddingTop: '4rem' }}
      >
        <div className="flex flex-col items-center justify-center flex-1 gap-2 px-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block w-full text-center py-4 font-display italic text-5xl transition-all duration-300 ${
                isActive(link.to)
                  ? 'text-[#C9A84C]'
                  : 'text-[#F5F0E8]/80 hover:text-[#C9A84C]'
              }`}
              style={{
                transitionDelay: open ? `${i * 60}ms` : '0ms',
                transform: open ? 'translateY(0)' : 'translateY(20px)',
                opacity: open ? 1 : 0,
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="gold-divider w-full my-6" />
          <Link
            to="/contact"
            className="px-10 py-3 bg-[#C9A84C] text-[#1C3A2A] font-sans font-semibold text-base rounded-full hover:bg-[#E8C96A] transition-colors"
          >
            Enrol Now
          </Link>
        </div>
        <div className="py-8 text-center text-[#F5F0E8]/40 font-sans text-sm">
          © 2025 Olive Education
        </div>
      </div>
    </>
  )
}
