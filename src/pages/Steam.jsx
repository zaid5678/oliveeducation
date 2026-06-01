import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FlaskConical, Cpu, Wrench, Palette, Calculator, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Steam() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    document.title = 'STEAM Programme — Olive Education'
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', 'The Olive Education STEAM Programme is coming soon — Science, Technology, Engineering, Arts & Maths for the next generation of Muslim thinkers.')
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

  const disciplines = [
    { icon: <FlaskConical size={18} />, label: 'Science' },
    { icon: <Cpu size={18} />, label: 'Technology' },
    { icon: <Wrench size={18} />, label: 'Engineering' },
    { icon: <Palette size={18} />, label: 'Arts' },
    { icon: <Calculator size={18} />, label: 'Maths' },
  ]

  return (
    <div className="bg-[#F5F0E8]">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="geo-texture pt-32 pb-20 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="inline-block px-3 py-1 border border-[#1C3A2A]/30 text-[#1C3A2A] font-sans text-xs font-semibold uppercase tracking-widest rounded-sm mb-8">
            Coming Soon
          </div>
          <h1
            className="display text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-3xl mb-8"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            STEAM Programme
          </h1>
          <p className="font-sans text-[#1a1a18]/45 text-sm uppercase tracking-[0.2em] mb-8">
            Science · Technology · Engineering · Arts · Maths
          </p>
          <p className="font-sans text-[#1a1a18]/60 text-lg max-w-xl leading-relaxed">
            We're building something exciting. Our STEAM programme will inspire the next generation of thinkers, creators and problem-solvers.
          </p>
        </div>
        <div className="rule mt-20" />
      </section>

      {/* ── About the Programme ───────────────────────────────────── */}
      <section className="py-24 bg-[#EBE5D9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-14 gap-x-16">

            <div className="lg:col-span-5">
              <p className="label mb-5 flex items-center">
                <span className="section-mark" />
                The Programme
              </p>
              <h2
                className="display text-3xl sm:text-4xl mb-8"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                Five disciplines. One vision.
              </h2>

              <div className="space-y-0">
                {disciplines.map((d, i) => (
                  <div key={d.label}>
                    <div className="flex items-center gap-4 py-4">
                      <span className="text-[#1C3A2A]/60">{d.icon}</span>
                      <span className="font-sans text-[#1a1a18]/75 font-medium text-sm">{d.label}</span>
                    </div>
                    {i < disciplines.length - 1 && <div className="rule" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <div className="space-y-6 lg:pt-16">
                <p className="font-sans text-[#1a1a18]/65 leading-relaxed">
                  The Olive Education STEAM programme is designed for the next generation of Muslim thinkers, makers and innovators. We believe that science and technology are not separate from faith — they are expressions of it.
                </p>
                <p className="font-sans text-[#1a1a18]/65 leading-relaxed">
                  Rooted in curiosity and grounded in Islamic values, our programme will give young people the tools to engage with the modern world with confidence, creativity and purpose.
                </p>
                <p className="font-sans text-[#1a1a18]/65 leading-relaxed">
                  We are currently in the planning phase. Register your interest below and we'll be in touch as soon as we're ready to launch.
                </p>

                {/* Email capture */}
                <div className="pt-4">
                  {submitted ? (
                    <div className="flex items-center gap-3 py-5">
                      <CheckCircle2 size={20} className="text-[#1C3A2A] flex-shrink-0" />
                      <p className="font-sans text-[#1a1a18]/75 text-sm">
                        You're on the list. We'll be in touch.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      <p className="font-sans text-[#1a1a18]/45 text-xs uppercase tracking-widest mb-4">
                        Notify me when we launch
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          className="flex-1 px-4 py-3 bg-[#F5F0E8] border border-[#1C3A2A]/20 rounded text-[#1a1a18] placeholder-[#1a1a18]/30 font-sans text-sm focus:outline-none focus:border-[#1C3A2A]/50 transition-colors"
                        />
                        <button
                          type="submit"
                          className="px-6 py-3 bg-[#1C3A2A] text-[#F5F0E8] font-sans font-semibold text-sm rounded hover:bg-[#254D38] transition-colors duration-200 whitespace-nowrap"
                        >
                          Register Interest
                        </button>
                      </div>
                      {error && (
                        <p className="mt-2 font-sans text-red-600 text-xs">{error}</p>
                      )}
                    </form>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Link to Madrasah ──────────────────────────────────────── */}
      <section className="geo-texture py-20 bg-[#F5F0E8]">
        <div className="rule" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="font-sans text-[#1a1a18]/45 text-sm mb-2">
                While STEAM is in development —
              </p>
              <p
                className="display text-2xl sm:text-3xl"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                Explore our Madrasah programme
              </p>
            </div>
            <Link
              to="/madrasah"
              className="flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#1C3A2A] text-[#F5F0E8] font-sans font-semibold text-sm rounded hover:bg-[#254D38] transition-colors duration-200"
            >
              Madrasah Details
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
        <div className="rule" />
      </section>

    </div>
  )
}
