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
      <div className="rule" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Col 1: Brand */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/images/logo-HD.png"
                alt="Olive Education"
                className="h-10 w-10 rounded object-cover"
              />
              <span className="font-sans text-[#C9A84C] font-semibold text-xs uppercase tracking-[0.15em]">
                Olive Education
              </span>
            </Link>
            <p
              className="font-display italic text-[#E8C96A] text-lg leading-snug"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              "Empowering Minds,<br />Inspiring Futures"
            </p>
            <p className="font-sans text-[#F5F0E8]/45 text-sm leading-relaxed">
              A community-led Islamic educational organisation in London, nurturing the next generation through faith, knowledge and curiosity.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-sans font-semibold text-[#F5F0E8]/35 uppercase tracking-widest text-xs mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-sans text-[#F5F0E8]/60 hover:text-[#C9A84C] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="font-sans font-semibold text-[#F5F0E8]/35 uppercase tracking-widest text-xs mb-6">
              Contact
            </h3>
            <ul className="space-y-4">
              {[
                { icon: <Phone size={13} />, value: '+44 7723 383 465', href: 'tel:+447723383465' },
                { icon: <Mail size={13} />, value: 'oliveeducation@mail.com', href: 'mailto:oliveeducation@mail.com' },
                { icon: <Instagram size={13} />, value: '@olive.education_', href: 'https://www.instagram.com/olive.education_/', external: true },
              ].map((item) => (
                <li key={item.value}>
                  <a
                    href={item.href}
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex items-center gap-3 text-[#F5F0E8]/60 hover:text-[#C9A84C] font-sans text-sm transition-colors duration-200"
                  >
                    <span className="text-[#C9A84C]/60">{item.icon}</span>
                    {item.value}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-3 text-[#F5F0E8]/35 font-sans text-xs pt-1 leading-relaxed">
                <MapPin size={13} className="text-[#C9A84C]/40 flex-shrink-0 mt-0.5" />
                Lillington Gardens Community Hall,<br />Vauxhall Bridge Road, London SW1V 2LF
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="rule" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-sans text-[#F5F0E8]/25 text-xs">
          © 2025 Olive Education. All rights reserved.
        </p>
        <p className="font-sans text-[#F5F0E8]/20 text-xs">London, UK</p>
      </div>
    </footer>
  )
}
