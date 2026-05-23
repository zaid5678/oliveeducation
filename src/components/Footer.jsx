import { Link } from 'react-router-dom'
import { Phone, Mail, Instagram, MapPin } from 'lucide-react'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Madrasah', to: '/madrasah' },
  { label: 'STEAM', to: '/steam' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#111f17]">
      <div className="gold-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Col 1: Brand */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/images/logo.jpg"
                alt="Olive Education"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-[#C9A84C]/40"
              />
              <span
                className="font-display text-[#C9A84C] font-semibold text-xl"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                OLIVE EDUCATION
              </span>
            </Link>
            <p
              className="font-display italic text-[#E8C96A] text-lg"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              "Empowering Minds, Inspiring Futures"
            </p>
            <p className="text-[#F5F0E8]/70 font-sans text-sm leading-relaxed">
              A community-led Islamic educational organisation in London, nurturing the next generation through faith, knowledge and curiosity.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-sans font-semibold text-[#C9A84C] uppercase tracking-widest text-xs mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-[#F5F0E8]/70 hover:text-[#C9A84C] font-sans text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-[#C9A84C]/40 group-hover:w-6 group-hover:bg-[#C9A84C] transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="font-sans font-semibold text-[#C9A84C] uppercase tracking-widest text-xs mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+447723383465"
                  className="flex items-center gap-3 text-[#F5F0E8]/70 hover:text-[#C9A84C] transition-colors group font-sans text-sm"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#254D38] flex items-center justify-center group-hover:bg-[#C9A84C]/20 transition-colors">
                    <Phone size={14} className="text-[#C9A84C]" />
                  </span>
                  +44 7723 383 465
                </a>
              </li>
              <li>
                <a
                  href="mailto:oliveeducation@mail.com"
                  className="flex items-center gap-3 text-[#F5F0E8]/70 hover:text-[#C9A84C] transition-colors group font-sans text-sm"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#254D38] flex items-center justify-center group-hover:bg-[#C9A84C]/20 transition-colors">
                    <Mail size={14} className="text-[#C9A84C]" />
                  </span>
                  oliveeducation@mail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/olive.education_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#F5F0E8]/70 hover:text-[#C9A84C] transition-colors group font-sans text-sm"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#254D38] flex items-center justify-center group-hover:bg-[#C9A84C]/20 transition-colors">
                    <Instagram size={14} className="text-[#C9A84C]" />
                  </span>
                  @olive.education_
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#F5F0E8]/50 font-sans text-sm">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#254D38] flex items-center justify-center mt-0.5">
                  <MapPin size={14} className="text-[#C9A84C]" />
                </span>
                <span className="leading-relaxed">
                  Lillington Gardens Community Hall,<br />
                  Vauxhall Bridge Road,<br />
                  London, SW1V 2LF
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="gold-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[#F5F0E8]/40 font-sans text-xs">
          © 2025 Olive Education. All rights reserved.
        </p>
        <p className="text-[#F5F0E8]/30 font-sans text-xs">
          London, UK
        </p>
      </div>
    </footer>
  )
}
