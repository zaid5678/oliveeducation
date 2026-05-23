import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FlaskConical, Cpu, Wrench, Palette, Calculator, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Steam() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    document.title = 'STEAM Programme — Olive Education'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'The Olive Education STEAM Programme is coming soon — Science, Technology, Engineering, Arts & Maths for the next generation.')
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  const steamItems = [
    { icon: <FlaskConical size={32} />, label: 'Science', float: 'float-1' },
    { icon: <Cpu size={32} />, label: 'Technology', float: 'float-2' },
    { icon: <Wrench size={32} />, label: 'Engineering', float: 'float-3' },
    { icon: <Palette size={32} />, label: 'Arts', float: 'float-4' },
    { icon: <Calculator size={32} />, label: 'Maths', float: 'float-5' },
  ]

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-32 relative overflow-hidden gradient-animate"
      style={{
        background: 'linear-gradient(135deg, #111f17 0%, #1C3A2A 35%, #254D38 65%, #1C3A2A 100%)',
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: '#C9A84C' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: '#D4E84A' }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto w-full">
        {/* Logo */}
        <img
          src="/images/logo.jpg"
          alt="Olive Education"
          className="w-20 h-20 rounded-full object-cover ring-2 ring-[#C9A84C]/60 mb-8"
          style={{ boxShadow: '0 0 30px rgba(201,168,76,0.25)' }}
        />

        {/* Badge */}
        <span className="inline-block px-5 py-2 bg-[#D4E84A] text-[#1C3A2A] rounded-full font-sans font-bold text-xs uppercase tracking-widest mb-8">
          Coming Soon
        </span>

        {/* H1 */}
        <h1
          className="font-display italic text-[#C9A84C] text-5xl sm:text-6xl md:text-7xl leading-tight mb-4"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          STEAM Programme
        </h1>

        {/* Disciplines */}
        <p className="font-sans text-[#F5F0E8]/60 text-sm uppercase tracking-[0.3em] mb-8">
          Science · Technology · Engineering · Arts · Maths
        </p>

        {/* Body */}
        <p className="font-sans text-[#F5F0E8]/80 text-lg leading-relaxed mb-12 max-w-xl">
          We're building something exciting. Our STEAM programme will inspire the next generation of thinkers, creators and problem-solvers. Stay tuned for the official launch.
        </p>

        {/* STEAM Icons */}
        <div className="flex items-end justify-center gap-6 md:gap-10 mb-16">
          {steamItems.map((item) => (
            <div key={item.label} className={`flex flex-col items-center gap-2 ${item.float}`}>
              <div className="text-[#C9A84C] w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#254D38] rounded-xl border border-[#C9A84C]/20">
                {item.icon}
              </div>
              <span className="font-sans text-[#F5F0E8]/60 text-xs font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Email Sign-up */}
        <div className="w-full max-w-md mb-12">
          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-6">
              <CheckCircle2 size={40} className="text-[#D4E84A]" />
              <p className="font-sans text-[#F5F0E8] font-medium">
                You're on the list! We'll let you know when we launch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <p className="font-sans text-[#F5F0E8]/70 text-sm mb-4">
                Be the first to know when we launch.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-5 py-3 bg-[#254D38] border border-[#C9A84C]/30 rounded-full text-[#F5F0E8] placeholder-[#F5F0E8]/40 font-sans text-sm focus:outline-none focus:border-[#C9A84C] transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#C9A84C] text-[#1C3A2A] font-sans font-semibold rounded-full hover:bg-[#E8C96A] transition-colors text-sm whitespace-nowrap"
                >
                  Notify Me
                </button>
              </div>
              {error && (
                <p className="mt-2 text-red-400 font-sans text-xs text-left pl-2">{error}</p>
              )}
            </form>
          )}
        </div>

        {/* Link back */}
        <div className="gold-divider w-full mb-8" />
        <p className="font-sans text-[#F5F0E8]/60 text-sm mb-3">
          In the meantime, explore our Madrasah programme.
        </p>
        <Link
          to="/madrasah"
          className="inline-flex items-center gap-2 font-sans text-[#C9A84C] font-medium text-sm hover:gap-3 transition-all"
        >
          Explore the Madrasah <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}
