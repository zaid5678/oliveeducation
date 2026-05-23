import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, BookOpen, FlaskConical, ArrowRight, BookHeart, Leaf, Star } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

export default function Home() {
  useEffect(() => {
    document.title = 'Olive Education — Empowering Minds, Inspiring Futures'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', 'Olive Education is a London-based Islamic educational organisation offering Madrasah classes and a STEAM programme for children.')
  }, [])

  return (
    <div className="bg-[#1C3A2A]">
      {/* ── Hero ── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 noise-overlay overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse at center, #254D38 0%, #1C3A2A 45%, #111f17 100%)',
        }}
      >
        {/* Decorative rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full border border-[#C9A84C]/5 absolute" />
          <div className="w-[800px] h-[800px] rounded-full border border-[#C9A84C]/5 absolute" />
          <div className="w-[1000px] h-[1000px] rounded-full border border-[#C9A84C]/3 absolute" />
        </div>

        <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img
              src="/images/logo.jpg"
              alt="Olive Education"
              className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover ring-2 ring-[#C9A84C] shadow-gold mx-auto"
              style={{ boxShadow: '0 0 40px rgba(201,168,76,0.35), 0 0 0 4px rgba(201,168,76,0.15)' }}
            />
          </div>

          {/* Eyebrow */}
          <p className="font-sans uppercase tracking-[0.3em] text-[#C9A84C]/70 text-xs mb-6">
            Islamic Education · London
          </p>

          {/* H1 */}
          <h1
            className="font-display italic text-[#C9A84C] text-5xl sm:text-6xl md:text-7xl leading-tight mb-6"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Empowering Minds,<br />
            <span className="shimmer-text">Inspiring Futures</span>
          </h1>

          {/* Subtext */}
          <p className="font-sans text-[#F5F0E8]/80 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            A community-led educational organisation dedicated to nurturing the next generation through Islamic education and STEAM learning.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/madrasah"
              className="px-8 py-3.5 bg-[#C9A84C] text-[#1C3A2A] font-sans font-semibold rounded-full hover:bg-[#E8C96A] transition-all duration-200 hover:shadow-gold text-sm"
            >
              Explore Madrasah
            </Link>
            <Link
              to="/steam"
              className="px-8 py-3.5 border border-[#C9A84C] text-[#C9A84C] font-sans font-semibold rounded-full hover:bg-[#C9A84C] hover:text-[#1C3A2A] transition-all duration-200 text-sm"
            >
              Discover STEAM
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <span className="text-[#F5F0E8]/40 font-sans text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={20} className="text-[#C9A84C]/60 bounce-chevron" />
        </div>
      </section>

      {/* ── What We Offer ── */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-sans uppercase tracking-[0.3em] text-[#C9A84C] text-xs text-center mb-3">
              What We Offer
            </p>
            <h2
              className="font-display italic text-[#C9A84C] text-4xl md:text-5xl text-center mb-16"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Two Pillars of Learning
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Madrasah Card */}
            <ScrollReveal delay={100}>
              <Link
                to="/madrasah"
                className="block h-full group bg-[#254D38] rounded-2xl p-8 md:p-10 hover:scale-[1.02] transition-transform duration-300 border border-[#C9A84C]/10 hover:border-[#C9A84C]/30"
              >
                <div className="w-14 h-14 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mb-6">
                  <BookOpen size={26} className="text-[#C9A84C]" />
                </div>
                <h3
                  className="font-display italic text-[#C9A84C] text-2xl md:text-3xl mb-4"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  Olive Education Madrasah
                </h3>
                <p className="font-sans text-[#F5F0E8]/75 leading-relaxed mb-6 text-sm md:text-base">
                  A safe and nurturing space where children learn Qaa'idah, Qur'an, Islamic Studies, Seerah and more — every Thursday during term time.
                </p>
                <div className="mb-6">
                  <span className="inline-block px-4 py-1.5 bg-[#D4E84A] text-[#1C3A2A] rounded-full font-sans font-semibold text-xs">
                    Every Thursday · 5–7pm
                  </span>
                </div>
                <span className="font-sans text-[#C9A84C] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </span>
              </Link>
            </ScrollReveal>

            {/* STEAM Card */}
            <ScrollReveal delay={200}>
              <Link
                to="/steam"
                className="block h-full group bg-[#254D38] rounded-2xl p-8 md:p-10 hover:scale-[1.02] transition-transform duration-300 border border-[#C9A84C]/10 hover:border-[#C9A84C]/30"
              >
                <div className="w-14 h-14 rounded-full bg-[#C9A84C]/10 flex items-center justify-center mb-6">
                  <FlaskConical size={26} className="text-[#C9A84C]" />
                </div>
                <h3
                  className="font-display italic text-[#C9A84C] text-2xl md:text-3xl mb-4"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  STEAM Programme
                </h3>
                <p className="font-sans text-[#F5F0E8]/75 leading-relaxed mb-6 text-sm md:text-base">
                  Our upcoming Science, Technology, Engineering, Arts & Maths programme — designed to inspire curiosity and build future skills in young minds.
                </p>
                <div className="mb-6">
                  <span className="inline-block px-4 py-1.5 bg-[#C9A84C]/15 text-[#C9A84C] border border-[#C9A84C]/30 rounded-full font-sans font-semibold text-xs">
                    Launching Soon
                  </span>
                </div>
                <span className="font-sans text-[#C9A84C] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Find Out More <ArrowRight size={16} />
                </span>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── About Snippet ── */}
      <section className="py-24 px-4 bg-[#111f17]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="font-sans uppercase tracking-[0.3em] text-[#C9A84C] text-xs mb-6">
                  Who We Are
                </p>
                <blockquote
                  className="font-display italic text-[#C9A84C] text-4xl md:text-5xl lg:text-6xl leading-tight mb-4"
                  style={{ fontFamily: '"Cormorant Garamond", serif' }}
                >
                  "Run by the community, for the community."
                </blockquote>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 font-sans text-[#C9A84C] text-sm font-medium hover:gap-3 transition-all mt-6"
                >
                  About Us <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-5">
                <p className="font-sans text-[#F5F0E8]/80 leading-relaxed">
                  Olive Education was founded on a deep belief that every child deserves access to quality Islamic education in a welcoming, community-driven environment.
                </p>
                <p className="font-sans text-[#F5F0E8]/80 leading-relaxed">
                  We work closely with families to ensure our lessons are engaging, age-appropriate, and rooted in strong Islamic values. Our teachers are qualified, passionate, and dedicated to every child's growth.
                </p>
                <p className="font-sans text-[#F5F0E8]/80 leading-relaxed">
                  Whether your child is just beginning their Qur'anic journey or building on existing knowledge, Olive Education provides a nurturing space where they can thrive.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Values Strip ── */}
      <section className="py-20 px-4 bg-[#1C3A2A]">
        <div className="max-w-7xl mx-auto">
          <div className="gold-divider mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: <BookHeart size={32} className="text-[#C9A84C]" />, label: 'Qur\'an & Islamic Studies', desc: 'Comprehensive curriculum from Qaa\'idah through to Qur\'an, Du\'aas, Seerah and Islamic Studies.' },
              { icon: <Leaf size={32} className="text-[#C9A84C]" />, label: 'Community Focused', desc: 'Built by local families for local families — we foster a sense of belonging and shared purpose.' },
              { icon: <Star size={32} className="text-[#C9A84C]" />, label: 'Qualified Teachers', desc: 'Our teachers are experienced, compassionate, and committed to every child\'s development.' },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 100}>
                <div className="flex flex-col items-center gap-4 p-8">
                  <div className="w-16 h-16 rounded-full bg-[#254D38] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3
                    className="font-display italic text-[#C9A84C] text-xl"
                    style={{ fontFamily: '"Cormorant Garamond", serif' }}
                  >
                    {item.label}
                  </h3>
                  <p className="font-sans text-[#F5F0E8]/65 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="gold-divider mt-16" />
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-24 px-4 bg-[#254D38]">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-sans uppercase tracking-[0.3em] text-[#C9A84C] text-xs mb-4">
              Join Us
            </p>
            <h2
              className="font-display italic text-[#C9A84C] text-4xl md:text-5xl mb-5"
              style={{ fontFamily: '"Cormorant Garamond", serif' }}
            >
              Ready to join our community?
            </h2>
            <p className="font-sans text-[#F5F0E8]/75 mb-2 leading-relaxed">
              Madrasah runs every Thursday 5–7pm during term time at Lillington Gardens Community Hall.
            </p>
            <p className="font-sans text-[#F5F0E8]/60 text-sm mb-10">
              Contact us at <a href="tel:+447723383465" className="text-[#C9A84C] hover:underline">+44 7723 383 465</a> or <a href="mailto:oliveeducation@mail.com" className="text-[#C9A84C] hover:underline">oliveeducation@mail.com</a>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3.5 bg-[#C9A84C] text-[#1C3A2A] font-sans font-semibold rounded-full hover:bg-[#E8C96A] transition-colors text-sm"
              >
                Register Now
              </Link>
              <Link
                to="/madrasah"
                className="px-8 py-3.5 border border-[#C9A84C]/60 text-[#C9A84C] font-sans font-semibold rounded-full hover:border-[#C9A84C] transition-colors text-sm"
              >
                View Schedule
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
